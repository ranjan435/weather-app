import React from 'react'


class Forms extends React.Component{
	

	render(){


		return(
			<div class="formStyles">
				<h2 >Please input the desired name of city and country code</h2>
				<form onSubmit={this.props.loadWeather}>
					Country: <input type="text" name="country" placeholder="np"/><br/>
					City: <input type="text" name="city" placeholder="lalitpur"/><br/>
					<input type="submit" value="Submit"/>
          
				</form>
				
			</div>
		)
	}
}

export default Forms