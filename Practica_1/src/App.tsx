import { useState } from 'react'
import { Frases } from './component/Frases';

import './App.css'

function App() {

  const [pulsacion, setPulsacion] = useState<boolean>(false);
  
  
  return (
    <>
      <div className = "titulo">
        <img src = "/Titulo_Pagina.png"/>
      </div>

      <div className = "contenedorPrincipal">
        <div className = "leftContainer">
          <img src = "/Comprar_Coche.png" />
          <img src = "/Flecha_Coche.gif" />
          <img src = "/Coche_Vendido.png" />

        </div>

        <div className = "mainContainer">
          <div className = "btn_frase">
            <button onClick={() => setPulsacion(!pulsacion)}>Cambiar Frase</button>
          </div>

          <Frases pulsacion={pulsacion}/>
        </div>   

        <div className = "rightContainer">
            <img src = "/Personajes.png" />
            <p> * THIS SITE DESIGNED BY THE SOLAR OPPOSITES </p>
        </div>  

      </div>  

      <div className = "bottonContainer">
        <img src = "/Sirena.png" />
        <img src = "/Error.png" />
        <img src = "/Pupa_Coin.gif" />

      </div>

      <div className = "fuego">
        <img src = "/Fuego.gif" />  
      </div>    
   </>
  )
}

export default App
