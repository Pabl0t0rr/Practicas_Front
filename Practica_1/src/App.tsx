import { Frases } from './component/Frases';

import './App.css'

function App() {

  return (
    <>
      <div className = "titulo">
        <img src = "/Titulo_Pagina.png"/>
      </div>

      <div className = "mainContainer">
        <div className = "leftContainer">
          <img src = "/Comprar_Coche.png" />
          <img src = "/Flecha_Coche.gif" className="FlechaCoche" />
          <img src = "/Coche_Vendido.png" />

        </div>

        <div className = "centerContainer">          
          <Frases/>

        </div>   

        <div className = "rightContainer">
            <img src = "/Personajes.png" />

            <div className = "rightContainerText">
            <p> * THIS SITE DESIGNED BY THE SOLAR OPPOSITES </p>
            </div>
        </div>  

      </div>  

      <div className = "errorContainer">
        <img src = "/Sirena.png" />
        <img src = "/Error.png" />
        <img src = "/Pupa_Coin.gif" />

      </div>

      <div className = "bottonContainer">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Your California Privacy Rights</p>
        <p>About Ads</p>
      </div>

      <div className = "fuegoContainer">
        <img src = "/Fuego.gif" />  
      </div>    
   </>
  )
}

export default App
