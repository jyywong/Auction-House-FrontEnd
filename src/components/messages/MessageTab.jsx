import React, { useEffect } from 'react';

const MessageTab = ({ user, convo, showChatBox, setShowChatBox, setCurrentConvo, currentConvo }) => {
	const handleClick = () => {
		!showChatBox && setShowChatBox(true);
		setCurrentConvo(convo);
	};

	return (
		<div
			onClick={handleClick}
			className={
				currentConvo.id === convo.id && showChatBox ? (
					'card mb-2 p-2 border-primary shadow-sm '
				) : (
					'card mb-2 p-2 shadow-sm '
				)
			}
		>
			<div className="row">
				<div className={!showChatBox ? 'col-4' : 'col'}>
					<h3 className="text-info">{convo.name}</h3>
					<p className="text-muted">
						<small>
							Last update: {new Date(Date.parse(convo.last_message.created_at)).toLocaleString()}
						</small>
					</p>
				</div>
				{!showChatBox && (
					<div className="col-8">
						<h5>{convo.last_message.sender_username}</h5>
						<p className="text-muted">{convo.last_message.message}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default MessageTab;
