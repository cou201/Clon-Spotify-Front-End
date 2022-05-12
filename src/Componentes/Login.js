

import { loginurl,} from "../SpotifyLogic"


import styled from "styled-components"
const Container = styled.div`

display:grid;
place-items: center;
height: 100vh;
background-color: #000;
`
const LoginButton = styled.a`
padding: 20px;
background-color: #1db954;
border-radius:70px;
color: #fff;
text-decoration:none;
font-weight:bolder
`

const Login = () => { 
  
  return (
      <Container  className="Logincontainer">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Logo" className="Logo"/> 
        <LoginButton href= {loginurl}>Conectate con Spotify</LoginButton>
        </Container>
   
  )
}

export default Login