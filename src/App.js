import logo from './logo.svg';
import './App.css';
import posts from './data.json';
import ImageSlider from './components/ImageSlider'

function App() {
  const data = posts["data"];
  // const images=data['images'];
  // console.log(images);


  return (
    // <div className="App">
    //   <img  src={data[0]['images'][0]['url']} />
    //   <img  src={data[0]['images'][1]['url']} />
    //   <img  src={data[0]['images'][2]['url']} />
    //   <img  src={data[0]['images'][3]['url']} />
    //   <img  src={data[0]['images'][4]['url']} />

    // </div>
    <>
      <div className='container'>

        {data.map(card => {
          return <> 
            <div className='containerStyles'><ImageSlider slides={card.images} /> 
              <div className='name-rating'>{card.city},{card.country}</div></div>
          </>
        })}


      </div>
    </>
  );
}

export default App;
