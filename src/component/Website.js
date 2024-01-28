import React from 'react';
import './Website.css';

const Website = () => {
  return (
    <div className='tt'>
      <header>
        <h1><i>Welcome to website</i></h1>
      </header>

      <nav>
         <a href="">Home</a>
        <a href="LoginPage">Login</a>
        <a href="SignupPage">Booking</a>
        <a href="ContactForm">Contact</a>
        <a href="MenuPage">Menu</a>
    
      </nav>
      <br/>
      <br/>
      <br/>

      <div className="cont">
     
      <div  className='aaa'>
      <h2>Environment</h2>
        <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTYOddDVgLUQowjzf6CzmVLdOUl_WCnougA&usqp=CAU'></img>
      <br/>
      <a href='LoginPage'><button> submit </button></a>
      
      </div>
       

      <br/>
      
      <br/>
      
      <div className='bbb'>
      <h2>Environment</h2>
        <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTYOddDVgLUQowjzf6CzmVLdOUl_WCnougA&usqp=CAU'></img>
      <br/>
      <a href='LoginPage'><button> submit </button></a>
      
      <br/>
      <br/>
      <br/>
      </div>
      
      </div>

    </div>
  );
};


export default Website;
