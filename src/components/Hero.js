import { Link } from "react-router-dom";
import heroImage from "../img/character 12.svg"
import heroImage1 from "../img/character 18.svg"

const Hero = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <section className="hero"> 
                <img src={heroImage} alt="a man sat at a desk on a computer"></img>
                <img src={heroImage1} alt="a student sat at a desk on a laptop"></img>
                <h1>Online English School</h1>
                <h2>Any time. Anywhere. Any way.</h2>
                <div className="hero-btns">
                    <Link to="/Online-English-School/register" onClick={scrollToTop}><button className="hero-btn-left">START your journey</button></Link>
                    <a href="#more-info"><button className="hero-btn-right">LEARN more</button></a> 
                </div>
        </section> 
     );
}
 
export default Hero;