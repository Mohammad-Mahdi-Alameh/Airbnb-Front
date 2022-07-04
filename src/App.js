import logo from './logo.svg';
import './App.css';
import posts from './data.json';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';

function App() {
  const data = posts["data"];



  return (
  
    <>
    <Navbar />
      <div className='container'>

        {data.map(card => {
          return <>
          
            <div className='containerStyles'><ImageSlider slides={card.images} />
              <div className='name-rating'>
                <div>{card.city}, {card.country}</div>
                <div>{card.rating}</div>
              </div>
              <div className='dist'>{card.distance_away}</div>
              <div className='dist'>{card.available_times}</div>
              <div className='horizon'><p style={{fontWeight:649.99}}>{card.price}</p>&nbsp;night</div>
            </div>
          </>
        })}


      </div>
    </>
  );
}

export default App;
