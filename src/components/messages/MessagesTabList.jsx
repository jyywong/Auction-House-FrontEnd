import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MessageServices from '../../services/MessageServices';
import MessageTab from './MessageTab';

const MessagesTabList = ({ user, showChatBox, setShowChatBox, setCurrentConvo, currentConvo }) => {
	const [ convos, setConvos ] = useState([]);

	useEffect(() => {
		MessageServices.getUserConversations(user.id).then((data) => setConvos(data));
	}, []);
	return (
		<React.Fragment>
			<div
				className={showChatBox ? 'col-4 overflow-auto' : 'col overflow-auto'}
				style={{ height: '40rem' }}
				data-testid="Tab List"
			>
				{convos.map((convo) => (
					<MessageTab
						key={convo.id}
						convo={convo}
						showChatBox={showChatBox}
						setShowChatBox={setShowChatBox}
						currentConvo={currentConvo}
						setCurrentConvo={setCurrentConvo}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

MessagesTabList.propTypes = {
	user: PropTypes.object,
	showChatBox: PropTypes.bool,
	setShowChatBox: PropTypes.func,
	setCurrentConvo: PropTypes.func,
	currentConvo: PropTypes.object
};

export default MessagesTabList;
