import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { RiRobot2Fill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';

interface Message {
	content: string;
	sender: 'user' | 'bot';
	timestamp: Date;
}

export default function ChatPage() {
	const [messages, setMessages] = useState<Message[]>([
		{
		  content: "Hello! I'm your AI assistant. How can I help you today?",
		  sender: 'bot',
		  timestamp: new Date(),
		},
	 ]);
  
	 const [input, setInput] = useState('');  // Changed initial value to empty string
  
	 const handleSend = (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim()) return;
  
		// Add user message
		const userMessage: Message = {
		  content: input,
		  sender: 'user',
		  timestamp: new Date(),
		};
  
		// Add bot response
		const botMessage: Message = {
		  content: "I'm a demo bot. This is a sample response!",
		  sender: 'bot',
		  timestamp: new Date(),
		};
  
		setMessages([...messages, userMessage, botMessage]);
		setInput('');
	 };

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			<div className="container mx-auto max-w-4xl h-screen flex flex-col">
				{/* Header */}
				<header className="p-4 border-b border-gray-800">
					<div className="flex items-center gap-2">
						<RiRobot2Fill className="w-6 h-6 text-blue-500" />
						<h1 className="text-xl font-bold">AI Assistant</h1>
					</div>
				</header>

				{/* Chat Container */}
				<div className="flex-1 overflow-y-auto p-4 space-y-4">
					{messages.map((message, index) => (
						<div
							key={index}
							className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
								}`}
						>
							<div
								className={`flex gap-3 max-w-[80%] ${message.sender === 'user'
										? 'flex-row-reverse'
										: 'flex-row'
									}`}
							>
								<div className="flex-shrink-0">
									{message.sender === 'user' ? (
										<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
											<FaUser className="w-4 h-4" />
										</div>
									) : (
										<div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
											<RiRobot2Fill className="w-4 h-4" />
										</div>
									)}
								</div>
								<div
									className={`rounded-lg p-4 ${message.sender === 'user'
											? 'bg-blue-600'
											: 'bg-gray-800'
										}`}
								>
									<p className="text-sm">{message.content}</p>
									<span className="text-xs text-gray-400 mt-1 block">
										{message.timestamp.toLocaleTimeString()}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Input Area */}
				<form
					onSubmit={handleSend}
					className="p-4 border-t border-gray-800 bg-gray-850"
				>
					<div className="flex gap-4">
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Type your message..."
							className="flex-1 bg-gray-800 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<button
							type="submit"
							className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 flex items-center gap-2 transition-colors"
						>
							<IoSend className="w-4 h-4" />
							<span>Send</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
