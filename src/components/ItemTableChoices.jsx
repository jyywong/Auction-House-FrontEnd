import React from 'react';
import ItemOrderFilters from './ItemOrderFilters';

const ItemTableChoices = ({ priceFilter, setPriceFilter, pageFunction, setPageFunction, orderType, setOrderType }) => {
	return (
		<div className="container">
			<div className="card bg-light">
				<div className="card-body">
					<div className="row px-3">
						<h5
							className="text-muted"
							style={
								pageFunction === 'orders' ? (
									{
										cursor: 'pointer',
										borderBottomStyle: 'solid'
									}
								) : (
									{
										cursor: 'pointer'
									}
								)
							}
							onClick={() => setPageFunction('orders')}
						>
							Orders
						</h5>
						<h5
							className="mx-3 text-muted px-2"
							style={
								pageFunction === 'stats' ? (
									{
										cursor: 'pointer',
										borderBottomStyle: 'solid'
									}
								) : (
									{
										cursor: 'pointer'
									}
								)
							}
							onClick={() => setPageFunction('stats')}
						>
							Statistics
						</h5>
					</div>
					{pageFunction === 'orders' && (
						<ItemOrderFilters
							orderType={orderType}
							setOrderType={setOrderType}
							priceFilter={priceFilter}
							setPriceFilter={setPriceFilter}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemTableChoices;
