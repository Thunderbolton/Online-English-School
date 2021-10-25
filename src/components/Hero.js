import heroImage from "../img/character 12.svg"
import heroImage1 from "../img/character 18.svg"

const Hero = () => {
    return (
        <section className="hero"> 
                <img src={heroImage}></img>
                <img src={heroImage1}></img>
                <h1>Online English School</h1>
                <h2>Any time. Anywhere. Any way.</h2>
                <button>Start your journey</button>  
        </section> 
     );
}
 
export default Hero;