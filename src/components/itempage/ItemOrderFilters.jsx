import React from 'react';
import ItemPriceFilter from './ItemPriceFilter';

const ItemOrderFilters = ({ orderType, setOrderType, priceFilter, setPriceFilter }) => {
	return (
		<>
		<div className="row">
			<div className="col">
				<p className="text-muted mb-0">Order Type</p>
				<button
					className={orderType === 'Sell' ? 'btn btn-success' : 'btn btn-outline-success'}
					onClick={() => setOrderType('Sell')}
					data-testid="Sellers"
				>
					Sellers
				</button>
				<button
					className={orderType === 'Buy' ? 'btn btn-primary' : 'btn btn-outline-primary'}
					onClick={() => setOrderType('Buy')}
					data-testid="Buyers"
				>
					Buyers
				</button>
			</div>
			<div className="col">
				<ItemPriceFilter
					priceFilter={priceFilter}
					setPriceFilter={setPriceFilter} 
				/>
			</div>
		</div>
		</>
	);
};

export default ItemOrderFilters;
