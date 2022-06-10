import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'
export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='Arya'
			userSecret='22222'
			projectID='2081b1e1-8140-4ea6-b8ac-46e3872eff9e'
		/>
	);
}

export default App;