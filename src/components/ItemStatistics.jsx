import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

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
			{/* <div className="container">
				<Bar
					height={400}
					width={200}
					data={{
						labels: [ ...Object.keys(orderPrices) ],
						datasets: [
							{
								label: 'Average price of orders per day',
								data: [ ...Object.values(orderPrices) ],
								fill: true,
								backgroundColor: 'rgb(175, 102, 192)'
							}
						]
					}}
					options={{
						maintainAspectRatio: false
					}}
				/>
			</div> */}
		</div>
	);
};

export default ItemStatistics;
