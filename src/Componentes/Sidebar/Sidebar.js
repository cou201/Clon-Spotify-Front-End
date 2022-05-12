import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import  SidebarChoice  from './SidebarChoice';
import { PlayList, SidebarContainer } from './Style'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <img src="https://www.soydemac.com/wp-content/uploads/2019/10/logo-spotify.jpg.webp" alt="logotwo" className='Logotwo'/>
     <SidebarChoice title="Inicio" Icon={HomeIcon}/>
     <SidebarChoice title="Buscar" Icon={SearchIcon}/>
     <SidebarChoice title="Librearia" Icon={LibraryMusicIcon}/>
     <PlayList>
       <h2>PlayList</h2>
     </PlayList>
     <hr className="Separacion"/>
     <SidebarChoice title="Rap en Ingles"/>
     <SidebarChoice title="Heavy Metal"/>
     <SidebarChoice title="Chill Music"/>
     <SidebarChoice title="Mas escuchados en el 2022"/>
     
        </SidebarContainer>
  )
}

export default Sidebar