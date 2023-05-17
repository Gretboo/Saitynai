import React from 'react';
import './apiemus.css'; 

const ApieMus = () => {
    
  return (
    <div className="about-us">
    <div className="wide-containerone">  
    <div className="decorative-circles-container">
          {/* Pink Circle */}
          <div
            className="decorative-circle"
            style={{
              position: 'absolute',
              left: '60%',
              top: '45%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              backgroundColor: '#C7E6FF',
              zIndex: 1,
            }}
          ></div>

          {/* Purple Circle */}
          <div
            className="decorative-circle-purple"
            style={{
              position: 'absolute',
              left: 'calc(30% + 70px)',
              top: '60%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              backgroundColor: '#E6CCFF',
              zIndex: 1,
            }}
          ></div>
        </div>

        <div className="icon-list">
          <ul className="list-items">
            <li>
              <img src='../photo/checkbox.png' alt="Icon 1" />
              <span>Google yra ne tik populiariausia paieškos sistema, bet ir daugelį metų užima aukščiausią vietą pasaulio lankomiausių interneto puslapių sąraše. </span>
            </li>
            <li>
              <img src='../photo/checkbox.png' alt="Icon 1" />
              <span>Youtube yra unikalus net keliomis prasmėmis: tai yra ir socialinis tinklas, ir paieškos sistema viename, be to, abiejuose reitinguose šis kanalas yra antras pagal populiarumą.</span>
            </li>
            <li>
              <img src='../photo/checkbox.png' alt="Icon 1" />
              <span>Google vaizdinės reklamos tinklas mus lydi kasdien: statiniai paveikslėliai su tekstu, judantys baneriai ir kitokie interaktyvus skelbimai nusėja daugumą mūsų lankomų puslapių.  </span>
            </li>
            <li>
              <img src='../photo/checkbox.png' alt="Icon 1" />
              <span>Socialiniai tinklai suteikia išskirtinę galimybę kurti gyvą ryšį su savo sekėjais, kas nepaprastai svarbu formuojant patikimo prekės ženklo įvaizdį. </span>
            </li>
            <li>
              <img src='../photo/checkbox.png' alt="Icon 1" />
              <span>Kas skiria gerą marketingą nuo prasto? Sakysite, viskas paprasta – veikia tai kas generuoja pajamas. Tačiau internetinės reklamos pasaulyje viskas nėra taip akivaizdu, kaip gali pasirodyti iš pirmo žvilgsnio.</span>
            </li>
          </ul>
        </div>
    </div>
    <div className="image-container">
          <div className="image-text-container">
          <img src="../photo/man-gc3f778547_1920.jpg" alt="Image 1" />
          </div>


          <div className="image-text-container">
          <img src="../photo/make-a-phone-call-g0e823f116_1920.jpg" alt="Image 2" />
          </div>


          <div className="image-text-container">
          <img src="../photo/home-office-g48aa6f4ef_1920.jpg" alt="Image 3" />
          </div>
     </div>
     <footer className="footer">
        <p>&copy; 2023 Eagle. All rights reserved.</p>
      </footer>
    </div>
    );
}

export default ApieMus;
