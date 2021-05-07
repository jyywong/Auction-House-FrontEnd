import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import MessagesTabList from '../components/MessagesTabList';

const Messages = ({ user }) => {
	const [ showChatBox, setShowChatBox ] = useState(false);
	const [ currentConvo, setCurrentConvo ] = useState();

	return (
		<React.Fragment>
			<div className="container">
				<div className="card bg-light my-3 p-2">
					<div className="card-title text-center">
						<h1>My Messages</h1>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<MessagesTabList
						user={user}
						showChatBox={showChatBox}
						setShowChatBox={setShowChatBox}
						currentConvo={currentConvo}
						setCurrentConvo={setCurrentConvo}
					/>
					{showChatBox && <ChatBox user={user} currentConvo={currentConvo} />}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Messages;
