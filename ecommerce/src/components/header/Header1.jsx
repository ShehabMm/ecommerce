import './header.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useState} from 'react'
const Header1 = () => {

const [correct,]= useState(true)

  return (
    <div className='main' id="up">
      <nav>
        <ul>
          <div className='left-side'>
            <li>
              <p className='hot'>Hot</p>
            </li>
            <li>
              <p> Free Express Shipping </p>
            </li>
          </div>

        </ul>
      </nav>


      <div className='right-side'>
        <ul>
          <li>

      
        {correct? <Brightness7Icon  sx={{fontSize:"20px"}} /> : <Brightness7Icon  sx={{fontSize:"20px"}} />}
  

          </li>
          <li><FacebookIcon   sx={{fontSize:"20px"}} /></li>
          <li><InstagramIcon  sx={{fontSize:"20px"}}/></li>
          <li><TwitterIcon  sx={{fontSize:"20px"}}/></li>
        </ul>
      </div>



    </div>
  );
};

export default Header1;
