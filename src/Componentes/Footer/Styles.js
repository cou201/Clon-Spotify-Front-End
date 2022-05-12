import styled from "styled-components";



const FooterContainer = styled.div`
position: fixed;
bottom: 0;
height: 70px;
width: 100vw;
background-color: #181818;
color: #fff;
display: flex;
justify-content: space-between;
`

const FooterLeft = styled.div`
flex: 0.3;
display:flex;
align-items: center;
max-width: 300px;

`
const FooterCenter = styled.div`
flex: 0.4;
display: flex;
align-items: center;
justify-content: space-between;
max-width: 300px;
`
const FooterRight= styled.div`
flex: 0.3;
display: flex;
align-items: center;
justify-content: center;
margin-right: 35px;
`


export {FooterContainer,FooterLeft,FooterCenter,FooterRight}