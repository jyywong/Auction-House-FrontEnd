import React from 'react';
import PropTypes from 'prop-types';

const ChatBoxMessage = ({ user, message }) => {
	return (
		<React.Fragment>
			<div className={message.sender === user.id ? 'container' : 'container text-right'}>
				<h5 style={{ display: 'inline' }} className={message.sender === user.id ? 'text-info' : 'text-primary'}>
					{message.sender_username}
				</h5>
				<p style={{ display: 'inline' }} className="text-muted ml-2">
					<small>{new Date(Date.parse(message.created_at)).toLocaleString()}</small>
				</p>
				<p>{message.message}</p>
			</div>
		</React.Fragment>
	);
};

ChatBoxMessage.propTypes = {
	user: PropTypes.object,
	message: PropTypes.object
};

export default ChatBoxMessage;
