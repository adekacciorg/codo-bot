import * as vscode from 'vscode';
import ollama from 'ollama';

export function activate(context: vscode.ExtensionContext) {

	console.log('Codo Bot is up and running!');

	const disposable = vscode.commands.registerCommand('codo-bot.start', () => {
		const panel = vscode.window.createWebviewPanel(
			'CodoBot',
			'Codo Bot window',
			vscode.ViewColumn.One,
			{ enableScripts: true }
		);

		panel.webview.html = getWebviewHtml();

		console.log("Webview content fetched!");

		panel.webview.onDidReceiveMessage(async (message: any) => {
			console.log("Message Received");
			if (message.command === 'chat') {
				console.log("Chat Command Received"); 
				const userPrompt = message.text;
				console.log("User Prompt: ", userPrompt);
				let responseText = '';

				try {
					const streamResponse = await ollama.chat({
						model: 'deepseek-r1:1.5b',
						messages: [{ role: 'user', content: userPrompt }],
						stream: true
					});

					console.log("Stream Started");

					for await (const part of streamResponse) {
						responseText += part.message.content;
						panel.webview.postMessage({ command: 'chatResponse', text: responseText });
					}
				} catch (e) {
					console.log("Error Occured: ", e);
				 }
			}
		})
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }


function getWebviewHtml() {
	console.log("Hello world I am stuck here");
	return /*html*/`<!DOCTYPE html>
	<html lang="en">
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style>
			body {
				margin: 1em;
			}
	
			#prompt {
				width: 100%;
				box-sizing: border-box;
			}
	
			#response {
				border: 1px solid #ccc;
				margin-top: 1em;
				padding: 0.5em;
			}
		</style>

	</head>
	
	<body>
		<h2>Hello World</h2>
		<textarea id="prompt" rows=3 placeholder="Ask Something..."></textarea> <br />
		<button id="askBtn">Ask</button>
		<div id="response"></div>


		<script>
			const vscode = acquireVsCodeApi();

			document.getElementById('askBtn').addEventListener('click', () => {
				const prompt = document.getElementById('prompt').value;
				vscode.postMessage({ command: 'chat', text: prompt });
			});

			window.addEventListener('message', event => {
				const {command, text} = event.data;
				if (command === 'chatResponse') {
					document.getElementById('response').innerText = text;
				}
			});
		</script>
		
	</body>
	
	</html>`;
}