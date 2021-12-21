import feedback from "../img/feedback.svg"

const PricingFeedback = () => {
    return ( 
        <div className="pricing-feedback">
            <h2>What our students are saying</h2>
            <div className="pricing-feedback-container">
                <img src={feedback} alt="a woman adjusting a ratings slider" />
            </div>
        </div>
     );
}
 
export default PricingFeedback;