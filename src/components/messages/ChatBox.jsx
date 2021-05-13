import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MessageServices from '../../services/MessageServices';
import ChatBoxMessage from './ChatBoxMessage';

const ChatBox = ({ user, conversation, setConversation, currentConvo, setShowChatBox }) => {
	const [ newMessage, setNewMessage ] = useState('');
	const divRef = useRef(null);

	const handleBack = () => {
		setShowChatBox(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newMessageObject = {
			conversation: currentConvo.id,
			sender: user.id,
			receiver: user.id === currentConvo.send_to ? currentConvo.created_by : currentConvo.send_to,
			message: newMessage.message
		};
		MessageServices.createNewMessage(currentConvo.id, newMessageObject).then((data) => {
			setNewMessage({ ...newMessage, message: '' });
			MessageServices.getConversationMessages(currentConvo.id).then((data) => setConversation(data));
		});
	};

	useEffect(
		() => {
			MessageServices.getConversationMessages(currentConvo.id).then((data) => setConversation(data));
		},
		[ currentConvo ]
	);

	useEffect(
		() => {
			divRef.current.scrollIntoView();
		},
		[ conversation ]
	);

	return (
		<div className="col-8">
			<div className="card" style={{ height: '40rem' }}>
				<div className="card-header ">
					<div className="row">
						<div className="col">
							<button onClick={handleBack} className="btn btn-primary" data-testid="Back Button">
								Back
							</button>
						</div>
						<div className="col p-0">
							<h5 className="text-center">{currentConvo.name}</h5>
						</div>
						<div className="col" />
					</div>
				</div>
				<div className="card-body overflow-auto">
					{conversation.map((message) => (
						<ChatBoxMessage message={message.id} user={user} message={message} />
					))}

					<div ref={divRef} />
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
								data-testid="newChat"
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

ChatBox.propTypes = {
	user: PropTypes.object,
	conversation: PropTypes.arrayOf(PropTypes.object),
	setConversation: PropTypes.func,
	currentConvo: PropTypes.object,
	setShowChatBox: PropTypes.func
};

export default ChatBox;
