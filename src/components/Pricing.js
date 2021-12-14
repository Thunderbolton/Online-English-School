import starter from "../img/starter.svg"
import regular from "../img/regular.svg"
// import prime from "./img/prime.jpg"
import prime from "../img/prime.svg"


const Pricing = () => {
    return ( 
        <div className="pricing">
            <h1 className="pricing-header">Select a suitable plan and be speaking with a teacher in a matter of minutes</h1>
            <div className="pricing-hero">
                <div className="pricing-starter">
                    <h2>Starter</h2>
                    <img src={starter} alt="" />
                    <ul>
                        <li>Lorem, ipsum dolor sit amet.</li>
                        <li>consectetur adipisicing elit.</li>
                        <li>Expedita blanditiis odit dolorem</li>
                    </ul>
                </div>
                <div className="pricing-starter">
                    <h2>Regular</h2>
                    <img src={regular} alt="" />
                    <ul>
                        <li>laudantium omnis sapiente</li>
                        <li>eveniet delectus unde voluptatibus sunt</li>
                        <li>natus eaque consequuntur praesentium</li>
                    </ul>
                </div>
                <div className="pricing-starter">
                    <h2>Prime</h2>
                    <img src={prime} alt="" />
                    <ul>
                        <li>voluptates voluptas numquam sint</li>
                        <li>quam at vel maxime accusantium laborum</li>
                        <li>Laboriosam similique velit</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Pricing;