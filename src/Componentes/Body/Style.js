import styled from "styled-components";


const BodyContainter = styled.div`
flex: 0.8;
background:linear-gradient(#340034,#0000);
`
const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 35px;
`
const HeaderLeft = styled.div`
display: flex;
align-items: center;
flex: 0.5;
min-width: 75px;
background-color: #fff;
color: #181818;
border-radius: 30px;
padding: 10px;

`

const HeaderRigth = styled.div`
display:flex;
align-items: center;
 `

const Info = styled.div`
display: flex;
align-items: flex-end;
padding: 10px;

`

const Album = styled.div`
flex: 1;
&h1{
    margin-bottom: 10px;
}
`

const Songs = styled.div`
margin: 20px -20px;


`


const Icons = styled.div`
margin: 30px;
display: flex;
cursor: pointer;
transition: 300ms color ease-in;
`

export {BodyContainter,HeaderContainer,HeaderLeft,HeaderRigth, Info, Album, Songs, Icons}