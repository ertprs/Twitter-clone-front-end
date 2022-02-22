import {FaTwitter, FaAngleDown} from 'react-icons/fa'
import classes from './Nav.module.css'
import Card from '../Card/Card'

const Navbar = (() => {
    return(
    
            <Card>
                <nav>
                    <div className={classes.logo}>
                        <span><a href="home"><FaTwitter /></a></span>
                        <div className={classes.theme}>Tweeter</div>
                    </div>

                    <div className={classes.menu}>
                        <ul className={classes.navlinks}>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Explore</a></li>
                            <li><a href='#'>Bookmarks</a></li>
                        </ul>
                    </div>
                    <div className={classes.navleft}>
                        <div className='navprof'>
                            <img src="img" alt="pix" />
    
                        </div>
                        <div>
                            <h6 className={classes.name}>Xantel Neel</h6>
                        </div>
                        <div className={classes.arrow}>
                            <span><a href="#"><FaAngleDown /></a></span>
                        </div>
                    
                    </div>
                </nav>
                
            </Card>
            
            
    
    )
})


export default Navbar