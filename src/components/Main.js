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
					<ul style={{ listStyleType: "none" }}>
						<li><input type="checkbox" value="React JS" onChange={onChangeMessage}/>React JS</li>
						<li><input type="checkbox" value="JSX" onChange={onChangeMessage}/>JSX</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default Main;
