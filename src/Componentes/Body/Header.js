import { HeaderContainer, HeaderLeft, HeaderRigth } from "./Style"
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from "@material-ui/core"

function Header() {
  return (
    <HeaderContainer>
      <SearchIcon/>
      <input type="text" placeholder="Busca tu Artista o Canción favorita" className="Input"></input>
     <HeaderLeft></HeaderLeft>
     <HeaderRigth></HeaderRigth>
     <Avatar/>
     <h3 className="Nombre">Cou</h3>
    </HeaderContainer>
  )
}

export default Header 