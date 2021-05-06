import React from 'react'
import ItemOrder from './ItemOrder'
import {FaSortDown, FaSortUp} from 'react-icons/fa'
const ItemOrdersTable = ({orders, orderPrice, setOrderPrice, handleModalShow, setModalOrder}) => {
    return (
        <>
            <div className="container mt-3">
			<table className="table table-hover">
				<thead className="thead-light">
					<tr>
						<th scope="col"></th>
						<th scope="col" > User </th>
						<th scope="col" style={{cursor:'pointer'}} onClick={()=>setOrderPrice(!orderPrice)}>
							Price {orderPrice ? <FaSortUp/> : <FaSortDown/>}
						</th>
						<th scope="col"> Reputation </th>
						<th scope="col"> Quantity </th>
						<th style={{width:"6rem"}}> 
							PM
						</th>
					</tr>
				</thead>
				<tbody>
                    {orders.map((order) => <ItemOrder 
					key={order.id}
					order={order} 
					handleModalShow={handleModalShow}
					setModalOrder={setModalOrder}
					/>)}
                </tbody>
				
			</table>
		</div>
        </>
    )
}

export default ItemOrdersTable
