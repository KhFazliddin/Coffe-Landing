import './App.css';
import logo from './img/logo.png'
import man from './img/profile-image.png'
import cart from './img/shopping Cart icon.png'
import mocha1 from './img/Mocha-big.png'
import iced from './img/Iced.png'
import caramel from './img/Caramel.png'
import mocha from './img/Mocha.png'
import espresso from './img/Espresso.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='top'>
          <div className='logo'>
            <img src={logo}></img>
          </div>
          <div className='links'>
            <a href='Home'>Home</a>
            <a href='About Us'>About Us</a>
            <a href='Our Lands'>Our Lands</a>
            <a href='Our Suppliers'>Our Suppliers</a>
            <a href='Products'>Products</a>
            <a href='Contact Us'>Contact Us</a>
          </div>
          <div className='right'>
            <img src={cart}></img>
            <img src={man}></img>
          </div>
        </div>
      </header>
      <main>

        <div className='container'>
          <div className='black-coffee'>
            <img src={mocha1}></img>
            <h1>Mocha Late</h1>
            <p className>Coffee is a brewed drink prepared
              from roasted coffee beans, the seeds of berries from certain Coffea species.</p>
            <div className='price'>
              <p>1 Bag</p>
              <p>$69.99</p>
            </div>
          </div>

          <div className='Active'>
            <p className='Be'>Be Active</p>
            <p className='Brew'>Barnsley Brew Coffee</p>
            <p className='Text'>Coffee is a brewed drink prepared from roasted coffee beans,
              the seeds of berries from certain Coffea species.
              When coffee berries turn from.</p>
            <p className='Packs'>Top Packs</p>

            <div className='Coffee'>
              <div className='Iced'>
                <img src={iced}></img>
                <p>Iced Coffee</p>
                <p className='Text'>Coffee is a brewed drink prepared
                  from roasted coffee beans, the seeds of berries from certain Coffea species.</p>
              </div>
              <div className='Caramel'>
                <img src={caramel}></img>
                <p>Caramel Frappe</p>
                <p className='Text'>Coffee is a brewed drink prepared
                  from roasted coffee beans, the seeds of berries from certain Coffea species.</p>
              </div>
              <div className='Mocha'>
                <img src={mocha}></img>
                <p>Mocha Late</p>
                <p className='Text'>Coffee is a brewed drink prepared
                  from roasted coffee beans, the seeds of berries from certain Coffea species.</p>
              </div>
              <div className='Espresso'>
                <img src={espresso}></img>
                <p>Double Espresso</p>
                <p className='Text'>Coffee is a brewed drink prepared
                  from roasted coffee beans, the seeds of berries from certain Coffea species.</p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
