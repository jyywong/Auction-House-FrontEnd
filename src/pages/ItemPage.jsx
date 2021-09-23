import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import ItemHeader from '../components/itempage/ItemHeader'
import ItemOrdersTable from '../components/itempage/ItemOrdersTable'
import ItemStatistics from '../components/itempage/ItemStatistics'
import ItemTableChoices from '../components/itempage/ItemTableChoices'
import BookServices from '../services/BookServices'
import ItemModal from '../components/itempage/ItemModal'
import FloatingActionButtion from '../components/itempage/FloatingActionButtion'
import OrderFormModal from '../components/itempage/OrderFormModal'



const ItemPage = ({match:{params:{id}}, isLoggedIn, user}) => {
    const [modalShow, setModalShow] = useState(false)
    const [modalOrder, setModalOrder] = useState({})
    
    const [orderFormShow, setOrderFormShow] = useState(false)
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
    const [loading, setLoading] = useState(false)

    const handleModalClose = () => setModalShow(false)
    const filterByPriceDesc = (a, b) => a.price - b.price  
    const filterByPriceAsc = (a, b) => b.price - a.price 


    useEffect(() => {
        setLoading(true)
        BookServices.getBook(id)
        .then((data)=>{setItem(data)});
        BookServices.getBookOrders(id)
        .then((data) => setOrders(data))
        BookServices.getBookOrderVolume(id)
        .then((data)=> setOrderVolume(data))
        BookServices.getBookOrderPrices(id)
        .then((data)=> {
            setLoading(false)
            setOrderPrices(data)
        })

    }, [])

    
    
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
                loading={loading}
                orders={orderFilter(orders)} 
                orderPrice={orderPrice} 
                setOrderPrice={setOrderPrice} 
                handleModalShow={setModalShow}
                setModalOrder={setModalOrder}
                isLoggedIn={isLoggedIn}
            />}
            {isLoggedIn &&
            <FloatingActionButtion
                orderFormShow={orderFormShow}
                setOrderFormShow={setOrderFormShow}
            />
            
            }
            {isLoggedIn &&
            <OrderFormModal
            id={id}
                isLoggedIn={isLoggedIn}
                item={item}
                setOrders={setOrders}
                orderFormShow={orderFormShow}
                setOrderFormShow={setOrderFormShow}
            />
            }
            

            <ItemModal 
                modalShow={modalShow}
                handleModalClose={handleModalClose}
                modalOrder={modalOrder}
                item={item}
                isLoggedIn={isLoggedIn}
                user={user}

            />
        
        </>
    )
}

ItemPage.propTypes = {
    id: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    user: PropTypes.object
}
export default withRouter(ItemPage)
