import logo from './logo.svg';
import './App.css';
import posts from './data.json';

function App() {
  const data = posts["data"];
  return (
    <div className="App">
      <img  src={data[0]['images'][0]['url']} />
      
    </div>
  );
}

export default App;
