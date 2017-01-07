import React from 'react';

const Main = ({
	onShowMessage, 
	message
}) => (
	<div>
		<div className="header">
			<div className="row">
				<div className="col-md-8">
					<h3>{message}</h3>
					<input type="button" value="Don't click me." onClick={onShowMessage()}/>
				</div>
			</div>
		</div>
	</div>
);

export default Main;
