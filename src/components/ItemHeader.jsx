import React from 'react';

const ItemHeader = ({ item }) => {
	return (
		<div className="container">
			<div className="card bg-light mt-5 pt-3">
				<div className="text-center">
					<img src="https://picsum.photos/200" />
				</div>
				<h1 className="card-title text-center">{item.name}</h1>
				<p className="text-muted text-center">by {item.author}</p>
				<div className="container mb-2">
					<div className="row">
						<div className="col-8">
							<h5 className="card-title mb-0">Description</h5>
							<p className="text-muted">{item.description}</p>
						</div>
						<div className="col">
							<h5 className="card-title mb-0">Classes</h5>
							<p className="text-muted">{item.classes}</p>
						</div>
						<div className="col">
							<h5 className="card-title mb-0">Subjects</h5>
							<p className="text-muted">{item.subjects}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemHeader;
