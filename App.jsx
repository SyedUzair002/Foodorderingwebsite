import { useState } from 'react'
import React from 'react'
import ReactDOM  from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Food from './Food'
import { CartProvider, CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <>
      <div className='top'>
      <div className='nav'>
      <img src='src\logo.png'/>
        <ul>
          <li><a href='src\App.jsx'><b style={{color: 'red'}}>Home</b></a></li>
          <li><a href='#'>Foods</a></li>
          <li><a href='#'>Cart ({cart.length})</a></li>
          <li><a href='#'>Contact</a></li>
          <div className='images'>
             
             <a><img src='src\acc.png' style={{height:'35px'}} /></a>
          </div>
        </ul>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-6 left'>
            <h3>Easy to make an order</h3>
            <h2><b style={{color: 'red'}}>Hungry! </b>Just wait <br />for food at your door</h2>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem voluptatibus perspiciatis impedit ad dicta nostrum eius facere necessitatibus reiciendis?</p>
            <div className='button'>
              <button style={{backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", padding: "10px 20px"}}><b style={{color: "white"}}>Order now</b></button>
              <button style={{marginLeft: "30px" , padding: "10px 20px" , backgroundColor: "white" , color: "red" , borderColor: "red" , borderRadius: '5px' , fontWeight: '600'}}>See al foods</button>
            </div>
          </div>
          <div className='col-6'>
            <img src='src\istockphoto-691716484-612x612.jpg' />
          </div>
        </div>
        <div className='row btn2 right'>
            <button><img src='src\fastfood.jpeg' />Fast Food</button>
            <button><img src='src\pizza.jpg' />Pizza</button>
            <button><img src='src\asianfood.jpg' />Asian Food</button>
            <button><img src='src\rawmeat.jpg' />Raw meat</button>
          </div>
        <div className='row mid'>
          <p style={{color : "red" , fontWeight: "800"}}>What we serve</p>
          <h3 style={{fontWeight:"800"}}>Just sit back at home<br />We wil <b style={{color:"red"}}>take care</b></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eligendi?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ea.</p>
        </div>
        <div className='row middle'>
          <div className='col-4 coloumn'>
            <img src='src\delivery.png' style={{height: "50px"}}/>
            <h5>Quick Delivery</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nam, veniam quam suscipit aspernatur vel?</p>
          </div>
          <div className='col-4 coloumn'>
            <img src='src\dinein.png' style={{height: "50px"}}/>
            <h5>Super Dine In</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nam, veniam quam suscipit aspernatur vel?</p>
          </div>
          <div className='col-4 coloumn'>
            <img src='src\pickup.png' style={{height: "50px"}}/>
            <h5>Easy Pick Up</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nam, veniam quam suscipit aspernatur vel?</p>
          </div>
        </div>
        <div className='row middown'>
          <Food addToCart={addToCart}/>
        </div>
        <div className='row midd'>
          <div className='col-6'>
            <img src='\src\address.png' style={{height: '400px'}} />
          </div>
          <div className='col-6'>
            <h3 style={{fontWeight:"800"}}>Why <b style={{color:"red"}}>Tasty treat</b></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia delectus, laudantium repudiandae dignissimos dolorum facilis voluptatum, minima odio omnis repellat modi error ducimus fugit esse adipisci veritatis velit enim quod, perspiciatis praesentium nostrum sapiente hic consequatur! </p>
            <h6 style={{marginTop:"50px"}}><b>Fresh and tasty food</b></h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorum voluptates expedita</p>
            <h6><b>Quality support</b></h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorum voluptates  </p>
            <h6><b>Order from any location</b></h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>
          </div>
        </div>
        <div className='footer'>
          <div className='col-3'>
            <img src='\src\logo.png' style={{height:"50px"}}/>
            <h5>Tasty Treat</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, doloremque!</p>
          </div>
          <div className='col-3'>

          </div>
          <div className='col-3'>

          </div>
          <div className='col-3'>

          </div>
        </div>
      </div>
    </>
  );
}

export default App
