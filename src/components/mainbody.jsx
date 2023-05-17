import React from 'react';
import './mainbody.css'; 

const MainBody = (props) => {
    const handleClick = (evt) => {
        props.handleButtonClick("Paslaugos")
      }
  return (
    <div className="main-page">
     <div className="wide-container">
     <div className="text-container">
          <h1>Marketingo planas Jūsų verslui</h1>
          <div className="button-container">
            <button className="black-button"onClick={handleClick} value="order">Daugiau</button>
          </div>
        </div>
        <div className="image-containerone">
          <img src="../photo/pagr.png" alt="Background" className="round-image" />
        </div>
      </div>
     <div className="image-container">
          <div className="image-text-container">
          <img src="../photo/startup-gefc5553b8_1920.jpg" alt="Image 1" />
            <h2>Rinkodaros inžinieriai nuo 2006 metų dirbantys su skaitmenine rinkodara ir internetiniais puslapiais. Mūsų darbas apima rinkodarą, informacines technologijas, skaitmeninių strategijų kūrimą.</h2>
          </div>


          <div className="image-text-container">
          <img src="../photo/startup-g896f866be_1920.jpg" alt="Image 2" />
            <h2>Tai galimybė pasiekti būtent tuos, kurie ieško tokių prekių ar paslaugų, kokias jūs ir siūlote. Rinkodaros inžinieriai, dirbantys su skaitmenine rinkodara ir internetiniais puslapiais.</h2>
          </div>


          <div className="image-text-container">
          <img src="../photo/woman-g37974e444_1920.jpg" alt="Image 3" />
            <h2>Vartotojai pasiekiami vaizdinės  (baneriai, video) reklamos dėka. Be to, ji gali būti sustabdoma ar redaguojama, net neišnaudojus viso biudžeto.</h2>
          </div>
     </div>
     <footer className="footer">
        <p>&copy; 2023 Eagle. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainBody;
