import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../img/menuIcon.svg"
import NavLinks from "./NavLinks";

const Navbar = () => {

    // const mobileMenu = ['one', 'two', 'three']
    // <div className="mobile-links">
    //     <p>This is the menu</p>
    //     <p>This is the menu</p>
    //     <p>This is the menu</p>
    // </div>;
    ;

    const mobileMenu = ["Teachers", "Materials", "Pricing"];

    const [showMenu, setShowMenu] = useState(false);
    const screenWidth = window.innerWidth;
    
    
    const handleClick = () => {
        setShowMenu(!showMenu);
        // if(showMenu == true && screenWidth > 700) {
        //     setShowMenu(false);
        //     menu = "";
        // }
    
    }

    // window.addEventListener('resize', screenWidth);
    
    /// ERROR
    // if(screenWidth > 700) {
    //     setMobileMenu([]);
    // }

    // if(showMenu == true && screenWidth < 700) {
    //     menu = "hi";
    // }

    // if(showMenu == true && screenWidth > 700) {
    //     menu = <div className="no-menu">no</div>;
    // }

    // useEffect(() => {
    //     if(screenWidth > 700) {
    //         setShowMenu(false);
    //     }
        
    // })

    // if(screenWidth > 700) {
    //     menu = false;
    // }

    
    
    return (    
        <nav className="navbar">
            <Link to="/">
                <h1>Online English School</h1>
            </Link>    

            {showMenu && mobileMenu.map((item, index) =>
                <Link to={item} className="mobile-links" key={index}> 
                    <h3>{item}</h3>
                </Link>    
                // console.log(index) = 0, 1, 2
                // console.log(item) = Teachers, Materials, Pricing
            )}
            

            {<NavLinks />}

            <img src={menuIcon} onClick={handleClick}></img>

            {!mobileMenu && <NavLinks />}
            
            {/* !<NavLinks /> ? <NavLinks/> :  */}
            

        
            {/* {mobileMenu && screenWidth > 700 && <NavLinks />} */}

          

            {/* {showMenu && screenWidth > 700 && setMobileMenu([""])} */}

            




            {/* {screenWidth > 700 && setMobileMenu([])} */}

        

            {/* {showMenu ? screenWidth > 700 && <NavLinks />} */}

            {/* {showMenu && screenWidth > 700 && <NavLinks />} */}
            

            {/* {showMenu && screenWidth > 700 ? <NavLinks /> : menu} */}


            
            
            {/* {showMenu ? screenWidth > 700 : <div></div>}*/}
            {/* {showMenu && screenWidth > 700 } */}

            {/* {showMenu ? screenWidth > 700 : setShowMenu(false)} */}
        </nav> 
            
     );
}
 
export default Navbar;