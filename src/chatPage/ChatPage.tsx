import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { style } from "../style";

interface Message {
	content: string;
	sender: 'user' | 'bot';
	timestamp: Date;
}

export default function ChatPage() {
	return (
		<div>
			<h2>Hello World</h2>
		</div>
	);
}
