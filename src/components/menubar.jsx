import "./menubar.css";
import { useState } from "react";

const MenuBar = (props) => {
  const [currClick, setCurrClick] = useState(0);
  const handleAClick = (evt) => {
    props.handleTargetChange(evt.target.firstChild.data);
  };
  const handleLogoClick = () => {
    props.handleTargetChange("");
  };
  const handleCartClick = () => {
    props.handleTargetChange("Cart");
  };
  const handleUserClick = () => {
    props.handleTargetChange("User");
  };
  

  return (
    <header>
      <nav>
        <ul>
          <div className="imageContainer">
            <img
              className="clickableImage"
              src="../../photo/llllllllll.png"
              onClick={handleLogoClick}
              width="80"
              height="80"
            ></img>
          </div>
          <li id="1">
            <a className="aText" onClick={handleAClick}>
              Apie mus
            </a>
          </li>
          <li id="2">
            <a className="aText" onClick={handleAClick}>
              Paslaugos
            </a>
          </li>
          <li id="3">
            <a className="aText" onClick={handleAClick}>
              Kaip tai veikia?
            </a>
          </li>
          <li id="4">
            <a className="aText" onClick={handleAClick}>
              Įgyvendinti projektai
            </a>
          </li>
          <li>
          </li>
          <div className="groupImageContainer">
            <img
              className="clickableImage"
              src="../../photo/cart-73-64.png"
              onClick={handleCartClick}
              width="30"
              height="30"
            ></img>
            
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default MenuBar;
