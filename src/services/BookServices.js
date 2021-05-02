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
    console.log(header.get('Authorization'))
})


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
     };
