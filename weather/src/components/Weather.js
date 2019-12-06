import React from 'react';

export default class Weather extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="weatherStyles">
				<div>
					<div className="card">
						<div className="container">
							<p>City:{this.props.city}</p>
						</div>
					</div>
					
    				<div className="card">
    					<div className="container">
							<p>Country:{this.props.country}</p>
						</div>
					</div>
    				
    				<div className="card">
    					<div className="container">
							<p>Temperature:{this.props.temperature}</p>
						</div>
					</div>
    				
    				<div className="card">
    					<div className="container">
    						<p>Humidity:{this.props.humidity}</p>
    					</div>
    				</div>
    			
    
    				<div className="card">
    					<div className="container">
							<p>Description:{this.props.description}</p>
						</div>
					</div>
				</div>
				<div>
					<p style={{"textAlign":"center"}}>Have patience to see image</p>
					<img src={this.props.image}/>
				</div>
    				



				
			</div>
		);
	}
}
