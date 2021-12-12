import starter from "../img/starter.svg"
import regular from "../img/regular.svg"
// import prime from "./img/prime.jpg"
import prime from "../img/prime.svg"


const Pricing = () => {
    return ( 
        <div className="pricing">
            <h1 className="pricing-header">Select a suitable plan and be speaking with a teacher in a matter of minutes</h1>
            <div className="pricing-hero">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus incidunt expedita cumque praesentium alias veritatis ut quia ipsa sequi? Sequi!
                <img src={starter} alt="" />
                <img src={regular} alt="" />
                <img src={prime} alt="" />
            </div>
        </div>
     );
}
 
export default Pricing;