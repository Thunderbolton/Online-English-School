import { Link } from "react-router-dom";
import heroImage from "../img/character 12.svg"
import heroImage1 from "../img/character 18.svg"

const Hero = () => {
    return (
        <section className="hero"> 
                <img src={heroImage}></img>
                <img src={heroImage1}></img>
                <h1>Online English School</h1>
                <h2>Any time. Anywhere. Any way.</h2>
                <div className="hero-btns">
                    <Link to="/register"><button className="hero-btn-left">START your journey</button></Link>
                    <a href="#more-info"><button className="hero-btn-right">LEARN more</button></a> 
                </div>
                {/* <Link style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'stretch', top: '60%', right: '10%' }} to="/register"><button className="hero-btn-left">Start your journey</button></Link>
                <button className="hero-btn-right">Learn More</button>                  */}
        </section> 
     );
}
 
export default Hero;