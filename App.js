import logo from './134a1d5ba19b25b4daf3a6c032ddbd7a.jpeg';
import logo1 from './Screenshot__6_-removebg-preview.png';
import logo2 from './Screenshot__7_-removebg-preview.png';
import './App.css';


function App() {
  return (
    
    <div className="App">
  
      <header className="App-header">
      <img src={logo} className="App-logo" />
      <img src={logo1} className="App-logo-resturant"/>
      <img src={logo2} className="App-logo-flower"/>
        
        <h1 className="rectangle"  >
             <div className="text-white">

             TASTE THE AUTHENTIC<br />
              SAUDI CUISINE
              </div>
        
        </h1>
        <h1 className='text'>
             <div className="text-white">
             
              Among the best Saudi chefs in the world, serving<br />
               you something beyond flavor. 
               </div>
        </h1>
        <div className="text-white">
        <div className="home">{"Home"}</div>
        <div className="about"> About </div>
        <div className="portfolio">{"Protfolio"}</div>
        <div className="client">{"Clients"}</div>
        <div className="blog">{"Blog"}</div>
        <div className="contact">{"Contact"}</div>
        </div>;
        <div className="square00">
            <h1 className="text-black-spr">
              EXPLORE MENU
            </h1>
            
        </div>
        <div className="square">
            <h1 className="text-black-spr">
              BOOK A TABLE
            </h1>
            
        </div>
        <div className="circle">
            <h1 className="text-black">
              TODAY <br/> 
              OFFER
            </h1>
            
        </div>
        
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <h1>Hello world</h1> */}
      </header>
    </div>
  );
}

export default App;
