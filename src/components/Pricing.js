import PricingFeedback from "./PricingFeedback";
import PricingHero from "./PricingHero";

const Pricing = () => {
    return ( 
        <div className="pricing">
            <h1 className="pricing-header">Select a suitable plan and be speaking with a teacher in a matter of minutes</h1>
            <PricingHero />
            <PricingFeedback />
        </div>
     );
}
 
export default Pricing;