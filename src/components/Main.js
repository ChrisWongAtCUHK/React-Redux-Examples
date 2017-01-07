import React from 'react';

const Main = ({
	onChangeMessage, 
	message
}) => (
	<div>
		<div className="header">
			<div className="row">
				<div className="col-md-8">
					<h3>{message}</h3>
					<input type="text" onChange={onChangeMessage}/>
				</div>
			</div>
		</div>
	</div>
);

export default Main;
