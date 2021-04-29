import React, {useState, useEffect} from 'react'
import ItemHeader from '../components/ItemHeader'
import ItemOrdersTable from '../components/ItemOrdersTable'
import ItemStatistics from '../components/ItemStatistics'
import ItemTableChoices from '../components/ItemTableChoices'
import BookServices from '../services/BookServices'


const ItemPage = ({match:{params:{id}}}) => {
    const [item, setItem] = useState({})
    const [orders, setOrders] = useState([])
    const [orderType, setOrderType] = useState('Sell')
    const [orderPrice, setOrderPrice] = useState(true)
    const [pageFunction, setPageFunction] = useState('orders')

    useEffect(() => {
        BookServices.getBook(id)
        .then((data)=>setItem(data));
        BookServices.getBookOrders(id)
        .then((data) => setOrders(data))

    }, [])

    const filterByPriceDesc = (a, b) => a.price - b.price  
    const filterByPriceAsc = (a, b) => b.price - a.price 
    
    const orderFilter = (orders) =>{
        let orderTypeFiltered = orders.filter((order) => order.buyorsell === orderType);
        return orderTypeFiltered.sort(orderPrice ? filterByPriceDesc : filterByPriceAsc )
    }

    return (
        <>
            <ItemHeader item={item} />
            <ItemTableChoices orderType={orderType} setOrderType={setOrderType} pageFunction={pageFunction} setPageFunction={setPageFunction}/>
            <ItemOrdersTable orders={orderFilter(orders)} orderPrice={orderPrice} setOrderPrice={setOrderPrice} />
            <ItemStatistics/>
        </>
    )
}

export default ItemPage
