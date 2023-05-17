import React from 'react';
import './projects.css'; 

const Projects = (props) => {
  const handleClick = (evt) => {
    props.handleButtonClick("Paslaugos")
  }
    return (
      <div className="projects">
        <div className="wide-containerfour">
          <div className="containero">
            <img src="../photo/ddddd.png" alt="Image 1" />
            <ht2>Moko grožio studija</ht2>
            <pt>Facebook reklama</pt>
            <button className="black-button"onClick={handleClick} value="order">Daugiau</button>
          </div>
          <div className="containero">
            <img src="../photo/fffff.png" alt="Image 2" />
            <ht2>Camembert vyno darykla</ht2>
            <pt>Youtube reklama</pt>
            <button className="black-button"onClick={handleClick} value="order">Daugiau</button>
          </div>
          <div className="containero">
            <img src="../photo/gggggg.png" alt="Image 3" />
            <ht2>Loud garso įrangos parduotuvė</ht2>
            <pt>TikTok'o reklama</pt>
            <button className="black-button"onClick={handleClick} value="order">Daugiau</button>
          </div>
          <div className="containero">
            <img src="../photo/jjjjjj.png" alt="Image 4" />
            <ht2>IT puslapių vystymo įmonė</ht2>
            <pt>Instagram'o reklama</pt>
            <button className="black-button"onClick={handleClick} value="order">Daugiau</button>
          </div>
        </div>
        <footer className="footer">
            <p>&copy; 2023 Eagle. All rights reserved.</p>
        </footer>
      </div>
    );
  };
export default Projects;