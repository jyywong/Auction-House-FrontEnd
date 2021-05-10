const baseURL = 'http://127.0.0.1:8000/api/'

const login = ( formdata ) => fetch(baseURL + 'token/', {
    method: 'POST',
    body: formdata
})
.then((res) => res.json())
.then(data => {
    localStorage.setItem('refresh', data['refresh'])
    localStorage.setItem('access', data['access'])
    // header.delete('Authorization')
    // header.append('Authorization', `Bearer ${localStorage.getItem('access')}`)
})

const getUserInfo = (id) => fetch(baseURL + `users/${id}/`).then(res => res.json())

const refreshAccess = () => fetch(baseURL + 'token/refresh/', {
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

const isRefreshValid = () => fetch(baseURL + 'token/refresh/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "refresh": localStorage.getItem('refresh')
    })
})
.then (res => res.ok)

// const autoRefreshToken = (res) =>{
//     if (res.status == 401){
//         refreshAccess()
//         .then(res => getOrders())
//     }
//     else if (res.ok){
//         return res.json()
//     }
// }
export default {
    login, 
    getUserInfo,
    refreshAccess,
    isRefreshValid
}