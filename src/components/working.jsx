import React from 'react';
import './working.css'; 

const Working = () => {
    const prekes = [{
        name: 'Kaip tai paverčiame realybe',
        model: 'Reklama siekiama vartotojui pristatyti naują prekės ženklą, produktą, komunikacijos žinutę.',
        apsaug:'Reklama, kai vartotojas jau yra susipažinęs su prekės ženklu ir svarsto, ar norėtų jį įsigyti, lygina su kitais, ir  siekia sužinoti daugiau.',
        kitas: 'Reklamos tikslas atvesti pirkėją ir paskatinti įsigyti prekę. Ši optimizacijos rūšis vertingesnė, kai vartotojas žino prekės ženklą,',
        dar:'Potencialus pirkėjas gali būti nukreipiamas į svetainę, komunikuojamos pagalbinės žinutės ar siūlomos pridėtinės vertės.',
        image: "../../photo/laptop-g5b10fbd27_1920.jpg"
      }]
    return(
        <div className= "working">
        <div className="wide-containerthree">
        <div className="product-container2">
          {prekes.map((preke, index) => (
            <div className="product2" key={index}>
              <img src={preke.image} alt={preke.name} />
              <div className="product-text">
                <h3>{preke.name}</h3>
                <h4>{preke.model}</h4>
                <h4>{preke.apsaug}</h4>
                <h4>{preke.kitas}</h4>
                <h4>{preke.dar}</h4>
              </div>
            </div>
          ))}
        </div>

        </div>   
        </div>
    );
};

export default Working;