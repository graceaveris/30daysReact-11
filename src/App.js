import React, { Component } from 'react';
import logo from './friedhead.svg';
import Titles from './Titles/Titles'
import Form from './Form/Form'
import Weather from './Weather/Weather'
import './App.css';


class App extends Component {

//We start off with empty variables, we need to fetch the data
  state = {
  temperature: undefined,
  city: undefined,
  humidity: undefined,
  description: undefined,
}


// ------  HANDLERS ------ //

getWeather = async (event) => {
  event.preventDefault();
  const Api_Key = 'INSERT_API_KEY'

//We collect the city and country input bu the user, and use them in the fetch
  const city = event.target.elements.city.value;
  const country = event.target.elements.country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);

//we convert the reponse into a json file  
  const response = await api_call.json();
  console.log(response);

//we can then access elements from the json object and set them
  this.setState({
    temperature: response.main.temp,
    country: response.sys.country,
    humidity: response.main.humidity,
    description: response.weather[0].description,
    city: response.name,
  })
}

// ------  DEFINING AND RENDERING  ------ //

render() {


//This checks if there is an imput and only displays if there is data to show
const check = this.state.temperature;
let weather;

if (check !== undefined) {
  weather = (
      <div>
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}/>
      </div>) 
}


// ------  THE RETURN BLOCK  ------ //

return (
  <div className="App">


{/* HEADER */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Eleven / Weather Watcher</h2>
        </header>

{/* COMPONENTS */}

        <div>
          <Titles />
          
          <Form 
           loadWeather={this.getWeather}/>
         
          {weather}

        </div>


   </div>
  );
 }
}

export default App;

