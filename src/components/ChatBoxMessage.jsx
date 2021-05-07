import React from 'react';

const ChatBoxMessage = ({ user, message }) => {
	return (
		<React.Fragment>
			<div className="container">
				<h5>{message.sender_username}</h5>
				<p className="text-muted">{message.message}</p>
			</div>
		</React.Fragment>
	);
};

export default ChatBoxMessage;
