
import { Choices } from "./Style"

const SidebarChoice = ({title, Icon})=>{
    return(
     <Choices>
     {
         Icon && <Icon/>
     }
     {
        Icon ? <h2>{title}</h2> : <h3>{title}</h3>
     }
     </Choices>
    )   
}

export default SidebarChoice