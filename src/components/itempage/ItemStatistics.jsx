import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const ItemStatistics = ({ orderVolume, orderPrices }) => {
	const filteredPrices = Object.values(orderPrices).map((price) => (price[0] ? price[0] : null));

	return (
		<div>
			<div className="container">
				<Line
					height={400}
					width={200}
					data={{
						datasets: [
							{
								type: 'line',
								label: 'Average price of orders per day',
								yAxisID: 'vol',
								tension: 0.25,
								spanGaps: true,
								data: [ ...filteredPrices ],
								borderColor: 'rgb(214,237,23)'
							},
							{
								type: 'bar',
								label: '# of orders per day',
								yAxisID: 'prices',
								data: [ ...Object.values(orderVolume) ],
								backgroundColor: 'rgb(192, 192, 192)'
							}
						],
						labels: [ ...Object.keys(orderVolume) ]
					}}
					options={{
						maintainAspectRatio: false,
						scales: {
							vol: {
								max: 80,
								type: 'linear',
								position: 'left'
							},
							prices: {
								type: 'linear',
								position: 'right'
							}
						}
					}}
				/>
			</div>
		</div>
	);
};

ItemStatistics.propTypes = {
	orderPrices: PropTypes.object,
	orderVolume: PropTypes.object
};

export default ItemStatistics;
