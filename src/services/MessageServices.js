const baseURL = "http://127.0.0.1:8000/api/"

const getUserConversations = (user) => fetch( baseURL + `user_conversations/${user}`).then(res => res.json())

const getConversationMessages = (convo) => fetch( baseURL + `conversation_messages/${convo}`).then(res=> res.json())

export default { getUserConversations, getConversationMessages }