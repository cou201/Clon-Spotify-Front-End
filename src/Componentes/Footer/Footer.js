import React from 'react'
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from './Styles'
import ShuffleIcon from "@material-ui/icons/Shuffle"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleFilledOutlined"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from "@material-ui/icons/PlaylistAdd"
import VolumenDownIcon from "@material-ui/icons/VolumeDown"




function Footer() {
  return (
    <FooterContainer>
       <FooterLeft>
         <img src="https://i.scdn.co/image/ab6761610000e5eb0b0ff7ccf4ac0e783d54b0af" alt="DobleP" className='DobleP'></img>
         <div>
           <h3>Doble Porción</h3>
           <p>Caós</p>
         </div>
       </FooterLeft>

       <FooterCenter>
         <ShuffleIcon/>
         <SkipPreviousIcon/>
         <PlayCircleOutlineIcon/>
         <SkipNextIcon/>
         <RepeatIcon/>
       </FooterCenter>

       <FooterRight>
         <Grid container spacing={2}></Grid>
           <Grid item><PlaylistPlayIcon/></Grid>
           <Grid item><VolumenDownIcon/></Grid>
           <Grid item><Slider/></Grid>
       </FooterRight>

    </FooterContainer>
  )
}

export default Footer