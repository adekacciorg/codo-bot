import {style} from "../style";

export default function ChatPage() {
	console.log("Hello world I am stuck here");
	return (
	 /*html*/`<!DOCTYPE html>
	<html lang="en">
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		${style}

	</head>
	
	<body>
		<h2 class="text-5xl text-blue-100" >Codo Bot</h2>
		<textarea id="prompt" class="" rows=3 placeholder="Ask Something..."></textarea> <br />
		<button id="askBtn" class="text-3xl w-6 " >Ask</button>
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
	
	</html>` );
}