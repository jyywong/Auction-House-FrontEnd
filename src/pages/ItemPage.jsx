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
    const [orderPrice, setOrderPrice] = useState(false)
    const [pageFunction, setPageFunction] = useState('orders')
    const [orderVolume, setOrderVolume] = useState({})
    const [orderPrices, setOrderPrices] = useState({})
    const [priceFilter, setPriceFilter] = useState({
        min: '',
        max: '',
    })

    useEffect(() => {
        BookServices.getBook(id)
        .then((data)=>setItem(data));
        BookServices.getBookOrders(id)
        .then((data) => setOrders(data))
        BookServices.getBookOrderVolume(id)
        .then((data)=> setOrderVolume(data))
        BookServices.getBookOrderPrices(id)
        .then((data)=> setOrderPrices(data))


    }, [])

    const filterByPriceDesc = (a, b) => a.price - b.price  
    const filterByPriceAsc = (a, b) => b.price - a.price 
    
    const orderFilter = (orders) =>{
        let orderTypeFiltered = orders
                                .filter((order) => order.buyorsell === orderType)
                                .filter((order) => 
                                    !priceFilter.max || priceFilter.max === 0 ?
                                    Number(order.price) >= priceFilter.min :
                                    Number(order.price) >= priceFilter.min && Number(order.price) <= priceFilter.max
                                )

        return orderTypeFiltered.sort(orderPrice ? filterByPriceDesc : filterByPriceAsc )
    }

    return (
        <>
            <ItemHeader item={item} />
            <ItemTableChoices 
                orderType={orderType} 
                setOrderType={setOrderType} 
                pageFunction={pageFunction} 
                setPageFunction={setPageFunction}
                priceFilter = {priceFilter}
                setPriceFilter = {setPriceFilter}
            />

            {pageFunction === 'stats' ? 
            <ItemStatistics 
                orderVolume={orderVolume} 
                orderPrices={orderPrices}
            /> : 
            <ItemOrdersTable 
                orders={orderFilter(orders)} 
                orderPrice={orderPrice} 
                setOrderPrice={setOrderPrice} 
            />}
            
        </>
    )
}

export default ItemPage
