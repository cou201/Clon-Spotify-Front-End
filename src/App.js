
import { useEffect,useState } from 'react';
import './App.css';
//  import Login from './Componentes/Login';
 import Player from './Componentes/Player/Player';
import { getTokenFromURL } from "./SpotifyLogic"

function App() {
  const [token, setToken] = useState("");

  useEffect(()=>{
 const hash = getTokenFromURL();
 window.location.hash = "";
 const _token = hash.acess_token;
 setToken(_token)
 console.log("token =>", token)
  }, [token])



  return (
    <div>
      
         
         <Player/> 
         
         {/* <Login/> */}
      
      
    </div>
  );
}

export default App;
