



var header = new Headers()
const login = ( formdata ) => fetch('http://127.0.0.1:8000/api/token/', {
    method: 'POST',
    body: formdata
})
.then((res) => res.json())
.then(data => {
    localStorage.setItem('refresh', data['refresh'])
    localStorage.setItem('access', data['access'])
    header.delete('Authorization')
    header.append('Authorization', `Bearer ${localStorage.getItem('access')}`)
})

const getUserInfo = (id) => fetch(`http://127.0.0.1:8000/api/users/${id}/`).then(res => res.json())

const refreshAccess = () => fetch('http://127.0.0.1:8000/api/token/refresh/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "refresh": localStorage.getItem('refresh')
    })
})
.then (res => res.json())
.then(data => {
    localStorage.setItem('access', data['access'])
})

const isRefreshValid = () => fetch('http://127.0.0.1:8000/api/token/refresh/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "refresh": localStorage.getItem('refresh')
    })
})
.then (res => res.ok)

const autoRefreshToken = (res) =>{
    if (res.status == 401){
        refreshAccess()
        .then(res => getOrders())
    }
    else if (res.ok){
        return res.json()
    }
}


const getAllBooks = () => fetch('http://127.0.0.1:8000/api/books/').then((res) => res.json());

const getBook = (id) => fetch(`http://127.0.0.1:8000/api/books/${id}`).then((res) => res.json());

const getBookOrders = (id) => fetch(`http://127.0.0.1:8000/api/book_orders/${id}`).then((res) => res.json());

const getBookOrderVolume = (id) => fetch(`http://127.0.0.1:8000/api/book_stats_vol/${id}`).then((res) => res.json());

const getBookOrderPrices = (id) => fetch(`http://127.0.0.1:8000/api/book_stats_prices/${id}`).then((res) => res.json());

const getUserOrders = (id) => fetch(`http://127.0.0.1:8000/api/user_orders/${id}`).then((res) => res.json())

const deleteOrder = (id) => {
    header = new Headers()
    header.append('Authorization', `Bearer ${localStorage.getItem('access')}`)
    return fetch(`http://127.0.0.1:8000/api/orders/${id}`, {
        method:'DELETE',
        headers: header
    })
    .then((res) => {
        if (res.status == 401){
            refreshAccess() 
            .then(res => deleteOrder(id))
        }
        else if (res.ok){
            return res.json()
        }
    })
}

const editOrder = (id, orderEdit) => {
    header = new Headers()
    header.append('Authorization', `Bearer ${localStorage.getItem('access')}`)
    header.append('Content-Type','application/json')
    return fetch(`http://127.0.0.1:8000/api/orders/${id}`, {
        method:'PATCH',
        headers: header,
        body: JSON.stringify({
            price: orderEdit.price,
            quantity: orderEdit.quantity
        })
    })
    .then((res) => {
        if (res.status == 401){
            return refreshAccess() 
            .then(res => editOrder(id, orderEdit))
        }
        else if (res.ok){
            return res.json()
        }
    })
}


const createBookOrderWrapper = (id, orderInfo) => {
    const createBookOrder = () => {

        header = new Headers()
        header.append('Authorization', `Bearer ${localStorage.getItem('access')}`)
        header.append('Content-Type','application/json')
        return fetch(`http://127.0.0.1:8000/api/book_orders/${id}`, {
        method:'POST',
        headers: header,
        body: JSON.stringify({
            buyorsell: orderInfo.orderType,
            book: orderInfo.item,
            price: orderInfo.price,
            quantity: orderInfo.quantity,
            quality: 'Used'
        })
    })
    .then((res) => {
        if (res.status == 401){
            refreshAccess() 
            .then(res => createBookOrder(id, orderInfo))
        }
        else if (res.ok){
            return res.json()
        }
    })
    }
    return createBookOrder()
}


const getOrders = () => {
    header = new Headers()
    header.append('Authorization', `Bearer ${localStorage.getItem('access')}`)
    return fetch('http://127.0.0.1:8000/api/orders/',{
    method:'GET',
    headers: header
}).then(autoRefreshToken)};




export default { 
    getAllBooks, 
    getBook, 
    getBookOrders,
    getBookOrderVolume, 
    getBookOrderPrices, 
    getOrders,
    login, 
    refreshAccess, 
    isRefreshValid,
    getUserInfo,
    createBookOrderWrapper,
    getUserOrders,
    deleteOrder,
    editOrder
     };
