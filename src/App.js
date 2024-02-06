import logo from './logo.svg';
import Tour from './components/Tour'
import './App.css';
import data from './data'
import { useState } from 'react'

function App() {
  const [tours, SetTours] = useState(data)
  function removeTour(id) {
    const filteredData = tours.filter(tour => tour.id !== id);
    console.log(filteredData);
    SetTours(filteredData)
  }
  function refreshHandler() {
    SetTours(data)
  }
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>no tours left</h2>
        <button onClick={refreshHandler}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
