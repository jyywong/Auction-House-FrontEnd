import React, { useState, useEffect } from 'react';
import ChatBox from '../components/messages/ChatBox';
import MessagesTabList from '../components/messages/MessagesTabList';

const Messages = ({ user }) => {
	const [ showChatBox, setShowChatBox ] = useState(false);
	const [ currentConvo, setCurrentConvo ] = useState({ id: null });
	const [ conversation, setConversation ] = useState([]);

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
					{showChatBox && (
						<ChatBox
							user={user}
							conversation={conversation}
							setConversation={setConversation}
							currentConvo={currentConvo}
							setShowChatBox={setShowChatBox}
						/>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Messages;
