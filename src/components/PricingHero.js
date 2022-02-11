import { Link } from "react-router-dom";
import starter from "../img/starter.svg"
import regular from "../img/regular.svg"
import prime from "../img/prime.svg"

const PricingHero = () => {

    return ( 
        <div className="pricing-hero">
                <section className="pricing-starter">
                    <h2>Starter</h2>
                    <img src={starter} alt="" />
                    <ul>
                        <li>12 1-hour private lessons monthly</li>
                        <li>IELTS, TOEIC, TOEFL exam preparation</li>
                        <li>English level placement test</li>
                    </ul>
                    <Link to="/Online-English-School/register"><button className="pricing-btn">Join now</button></Link>
                </section>
                <section className="pricing-regular">
                    <h2>Regular</h2>
                    <img src={regular} alt="" />
                    <ul>
                        <li>18 1-hour private lessons monthly</li>
                        <li>IELTS, TOEIC, TOEFL exam preparation</li>
                        <li>English level placement test</li>
                        <li><b>Business English course with certified professionals</b></li>
                    </ul>
                    <Link to="/Online-English-School/register"><button className="pricing-btn">Join now</button></Link>
                </section>
                <section className="pricing-prime">
                    <h2>Prime</h2>
                    <img src={prime} alt="" />
                    <ul>
                        <li>30 1-hour private lessons monthly</li>
                        <li>IELTS, TOEIC, TOEFL exam preparation</li>
                        <li>English level placement test</li>
                        <li>Business English course with certified professionals</li>
                        <li><b>Tailored curriculum designed by our study advisors</b></li>
                        <li><b>Unlimited access to self-study activities</b></li>
                    </ul>
                    <Link to="/Online-English-School/register"><button className="pricing-btn">Join now</button></Link>
                </section>
            </div>
 );
}
 
export default PricingHero;