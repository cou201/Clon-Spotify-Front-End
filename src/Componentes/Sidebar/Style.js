import styled from "styled-components";

const SidebarContainer = styled.div`
flex:0.2;
background-color: #000;
height: 100vh;
color: #fff;
`

const PlayList = styled.div`
margin: 5px 10px;
`

const Choices = styled.div`
display: flex;
align-items: center;
color: gray;
height: 40px;
cursor: pointer;
transition: 300ms color ease-in;
&:hover{
  color: #fff;
}
& h3{
    margin: 10px 0 0 20px;
}
`

export {SidebarContainer, PlayList,Choices}