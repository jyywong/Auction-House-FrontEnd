import BookServices from "./BookServices"

const baseURL = "http://127.0.0.1:8000/api/"

const getUserConversations = (user) => fetch( baseURL + `user_conversations/${user}`).then(res => res.json())

const getConversationMessages = (convo) => fetch( baseURL + `conversation_messages/${convo}`).then(res=> res.json())

const createNewMessage = (convo, message) => {
    console.log('hello')
    const header = new Headers()
    header.append('Authorization', `Bearer ${localStorage.getItem('access')}`)
    header.append('Content-Type','application/json')
    return fetch(baseURL + `conversation_messages/${convo}`, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(message)
    })
    .then((res) => {
        
        if (res.status == 401){

            return BookServices.refreshAccess()
            .then(res => createNewMessage(convo, message))
        }
        else if (res.ok){
            return res.json()
        }
    })
    }


export default { getUserConversations, getConversationMessages, createNewMessage }