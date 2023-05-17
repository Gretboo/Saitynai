import React from 'react';
import './paslaugos.css'; 
import Toggle from 'react-toggle';
import 'react-toggle/style.css';


const Paslaugos = () => {
    const handleClick = (evt) => {
        props.handleButtonClick(evt.target.value)
      }
    return(
        <div className="paslaugos">
      <div className="wide-containertwo">
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
            <div className="container">
            <div className="text">Reklama TikToke</div>
            <div className="price">99€</div>
            <div className="toggle">
            <Toggle />
          </div>
            </div>
            <div className="container">
            <div className="text">Reklaminė kampanijos strategija</div>
            <div className="price">150€</div>
            <div className="toggle">
            <Toggle />
          </div>
            </div>
            <div className="container">
            <div className="text">Grafinio dizaino paslaugos</div>
            <div className="price">100-500€</div>
            <div className="toggle">
            <Toggle />
            </div>
            </div>
            <div className="container">
            <div className="text">Konsultacija</div>
            <div className="price">50€</div>
            <div className="toggle">
            <Toggle />
          </div>
            </div>
            <div className="button-container">
            <button className="black-button"onClick={handleClick} value="order">Į krepšelį</button>
          </div>
        </div>
        <footer className="footer">
            <p>&copy; 2023 Eagle. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default Paslaugos;