import React from 'react';

const MessageTab = ({ user, convo, showChatBox, setShowChatBox, setCurrentConvo, currentConvo }) => {
	const handleClick = () => {
		setShowChatBox(!showChatBox);
		setCurrentConvo(convo);
	};
	return (
		<div
			onClick={handleClick}
			className={
				currentConvo === convo.id && showChatBox ? (
					'card mb-2 p-2 border-primary shadow-sm '
				) : (
					'card mb-2 p-2 shadow-sm '
				)
			}
		>
			<div className="row">
				<div className={!showChatBox ? 'col-4' : 'col'}>
					<h3 className="text-info">{convo.send_to_username}</h3>
					<p className="text-muted"> Last seen: right now</p>
				</div>
				{!showChatBox && (
					<div className="col-8">
						<h5>Username</h5>
						<p className="text-muted">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, architecto!
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default MessageTab;
