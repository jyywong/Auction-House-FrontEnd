import React, { useState, useEffect } from 'react';
import MessageServices from '../services/MessageServices';
import ChatBoxMessage from './ChatBoxMessage';

const ChatBox = ({ user, currentConvo }) => {
	const [ conversation, setConversation ] = useState([]);
	const [ newMessage, setNewMessage ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setConversation([ ...conversation, { sender_username: 'jon', message: newMessage.message } ]);
		setNewMessage({});
	};

	useEffect(() => {
		MessageServices.getConversationMessages(currentConvo.id).then((data) => setConversation(data));
	}, []);
	return (
		<div className="col-8">
			<div className="card" style={{ height: '40rem' }}>
				<div className="card-header">
					{user.id === currentConvo.send_to ? (
						currentConvo.created_by_username
					) : (
						currentConvo.send_to_username
					)}
				</div>
				<div className="card-body overflow-auto">
					{conversation.map((message) => <ChatBoxMessage user={user} message={message} />)}
				</div>
				<div className="card-footer">
					<form onSubmit={handleSubmit}>
						<div className="input-group">
							<textarea
								value={newMessage.message}
								onChange={(e) => setNewMessage({ message: e.target.value })}
								type="text"
								placeholder="Your reply"
								className="form-control"
								cols="2"
							/>
							<div class="input-group-append">
								<button class="btn btn-success" type="submit">
									Send
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
