import React from 'react';
import { Line } from 'react-chartjs-2';

const ItemStatistics = () => {
	return (
		<div>
			<div className="container">
				<Line
					height={400}
					width={200}
					data={{
						labels: [ 'red', 'blue', 'orange' ],
						datasets: [
							{
								label: 'My first chart',
								data: [ 1, 2, 3, 4, 5 ],
								fill: false,
								borderColor: 'rgb(75, 102, 192)',
								tension: 0.1
							}
						]
					}}
					options={{
						maintainAspectRatio: false
					}}
				/>
			</div>
		</div>
	);
};

export default ItemStatistics;
