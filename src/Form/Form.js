import React from 'react';
const Form = (props) => {

  
  const inputstyle = {
  border: '2px solid black',
  borderRadius: '0px',
  fontSize: '18px',
  margin: '5px',
  };
 
  return (
      <form onSubmit={props.loadWeather}>
        <input type="text" name="city" placeholder="City..." style={inputstyle} />
        <input type="text" name="country" placeholder="Country..." style={inputstyle}/>
        <button style={inputstyle}>Get Weather</button>
      </form>
  )
}

export default Form;