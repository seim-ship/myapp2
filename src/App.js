import './App.css';
import selim from './img/selim3.mp4'
import image from './img/unnamed.jpg'
function App() {
  return (
<>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">selim ghazouani</h1>
    <br />
    <img src={image} />
    <br />
    <img src="./selim1.png" />
  </div>
  <video width={320} height={240} controls>
    <source src={selim} />
  </video>
</>
  );
}

export default App;
