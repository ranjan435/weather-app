import React from 'react';
import './App.css';
import Title from './components/Title'
import Forms from './components/Forms'
import Weather from './components/Weather'
import axios from 'axios'

class App extends React.Component {
   state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    image: undefined
  }
  getWeather=(e)=>{
    const country=e.target.country.value
    const city=e.target.city.value
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8d2de98e089f1c28e1a22fc19a24ef04`)
      .then((response)=>{
          this.setState({
            temperature:response.data.main.temp,
            city:response.data.name,
            country:response.data.sys.country,
            humidity:response.data.main.humidity,
            description:response.data.weather[0].description,
            
          })
        }

      )
    axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=80610eea547de2420c679f10be2e9e5100fb62b383696ad27554f52fecf1d560`)
      .then((response)=>{

        this.setState({
          image:response.data.results[0].urls.full
        })
      })

    e.preventDefault()
  }
  render(){
    return (
      <div className="App">
        <Title/>
        <Forms loadWeather={this.getWeather}/>
        <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    image={this.state.image}
        />

      </div>
    );
  }
}

export default App;
