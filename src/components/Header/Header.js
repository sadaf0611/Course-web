import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React,{Fragment,useState} from 'react'
import './Header.css'
import { Provider, useSelector } from 'react-redux';


const Header = (props) => {
   
    const cartData=useSelector(state=>state.cartReducer)
    var modal = document.getElementById("myModal");


  return (
    <>
      <header>
        <div>
            <h1>Course Bay</h1>
        </div>
        <button className='button' onClick={props.onShowCart}>
          <span className='icon'>
          <i class="fa-solid fa-cart-shopping"></i>
          </span>
          {/* <span>user Name</span> */}
          <span className='badge'>{cartData.length}</span>
        </button>  {/* cart btn close */}

      </header>
      <div className='main-image iconCrt' >
      <img src="../../assets/indomeal.jpg" alt="study" />
      </div>
      <section className='summary'>
      <h2>Skills that drive you forward</h2>
      <p>
      Innovation and the universe of work change quick — with us, you're quicker. Get the right stuff to accomplish objectives and remain serious.
      </p>
      <p>
      Technology and the world of work change fast with us, you’re faster. Upgrade the skills to achieve goals and stay competitive.
      </p>
    </section>
        

    
    </>
  )
}

export default Header
