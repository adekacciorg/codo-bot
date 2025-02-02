import * as vscode from 'vscode';
import ollama from 'ollama';
import ChatPage from './chatPage/ChatPage';
import * as ReactDOM from 'react-dom/server';

export function activate(context: vscode.ExtensionContext) {

	console.log('Codo Bot is up and running!');

	const disposable = vscode.commands.registerCommand('codo-bot.start', () => {
		const panel = vscode.window.createWebviewPanel(
			'CodoBot',
			'Codo Bot window',
			vscode.ViewColumn.One,
			{ enableScripts: true }
		);

		console.log("Reached Here");

		panel.webview.html = `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>My Component</title>
				</head>
				<body>
					<div id="root"></div>
					${ReactDOM.renderToString(ChatPage())}
				</body>
				</html>
				`;

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
