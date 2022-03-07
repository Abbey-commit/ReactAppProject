import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay="morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay="afternoon"
  } else {
    timeOfDay = "evening"
  }
  return (
    <h1>Good {timeOfDay}</h1>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

