import React from 'react';
import './cart.css'; 
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const Cart = () => {
    const lineStyle = {
        width: '90%',
        height: '2px',
        backgroundColor: 'white',
        margin: '60px 0',
      };
      const handleClick = (evt) => {
        props.handleButtonClick(evt.target.value)
      }
    return(
        <div className="cart">
            <div className="wide-containerfive">
                <div className="header">Paslaugos</div>
                <div className="container">
                    <div className="text">Reklama Instagrame</div>
                    <div className="price">99€</div>
                    <div className="toggle">
                    <Toggle />
                    </div>
                </div>
                <div className="container">
                    <div className="text">Reklama Facebook</div>
                    <div className="price">99€</div>
                    <div className="toggle">
                    <Toggle />
                    </div>
                </div>
                <div style={lineStyle}></div>
                <h6>Viso:</h6>
                <p>198€</p>
                <div className="button-container">
                    <button className="black-button"onClick={handleClick} value="order">Apmokėjimas</button>
                </div>
            </div>
            <footer className="footer">
            <p>&copy; 2023 Eagle. All rights reserved.</p>
        </footer>
        </div>
    );
};

export default Cart;