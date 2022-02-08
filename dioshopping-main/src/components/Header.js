import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import { NewHeader, NewLogo, NewStoreName, NewMenuButton } from './styled.js'

const Header = () => {
    return(
        <NewHeader>
          <Link to="/"><NewLogo/></Link>  
            <NewStoreName><Link to="/">DIO FUTSTORE</Link></NewStoreName>
               <NewMenuButton>
            <Link to="/contato" style={{"text-decoration":"none", "color":"red"}}>
                Contato
            </Link>
            </NewMenuButton>
            <Cart/>
        </NewHeader>
     
    )
}

export default Header;



