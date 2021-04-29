import React from 'react'
import ItemOrder from './ItemOrder'
import {FaSortDown, FaSortUp} from 'react-icons/fa'
const ItemOrdersTable = ({orders, orderPrice, setOrderPrice}) => {
    return (
        <>
            <div className="container mt-3">
			<table className="table table-hover">
				<thead className="thead-light">
					<tr>
						<th scope="col" > User </th>
						<th scope="col" style={{cursor:'pointer'}}onClick={()=>setOrderPrice(!orderPrice)}>
							Price {orderPrice ? <FaSortDown/> : <FaSortUp/>}
						</th>
						<th scope="col"> Reputation </th>
						<th scope="col"> Quantity </th>
					</tr>
				</thead>
				<tbody>
                    {orders.map((order) => <ItemOrder order={order} />)}
                </tbody>
				
			</table>
		</div>
        </>
    )
}

export default ItemOrdersTable
