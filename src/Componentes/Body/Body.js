
import Header from './Header'
import { Album, BodyContainter, Icons, Info, Songs } from './Style'
import {useSelector} from "react-redux";
import { selecPlayList } from '../../Features/PlayListSlice';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

const Body = () => {
  const playList = useSelector (selecPlayList)
  console.log("playlist =>", playList)
  return (
    <BodyContainter>
    <Header/>
    <Info>
      <img src="https://i.scdn.co/image/ab67616d0000b273bd5535137387c1538753a546" alt ="" className='Aranjuez'/>
   
    <Album>
      <h3>Lo mas Escuchado este Año</h3>
      <h1>PlayList</h1>
      <h2 className='Disco'>Album del Momento Aranjuez de  Alcolirykoz</h2>

     
    </Album>
    </Info>
      <Songs>
        <Icons>
        <PlayCircleFilledIcon/>
        <FavoriteIcon fontSize="large"/>
        <MoreHorizIcon fontSize="large"/>
        </Icons>
       <h4 className='Canciones'>Aranjuez</h4>
      <h4 className='Canciones'>La Caza de Nariño</h4>
      <h4 className='Canciones'>Todo lo Bueno Tarda</h4>
      <h4 className='Canciones'>Aguanilé</h4>
      <h4 className='Canciones'>No Está en Venta</h4>
    
      </Songs>
    </BodyContainter>
  )
}

export default Body