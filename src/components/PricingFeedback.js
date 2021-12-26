import feedback from "../img/feedback.svg"


const PricingFeedback = () => {
    const screenWidth = window.innerWidth;

    const quotes = [
        {text: "The teachers are very thoughtful and kind. They have a good understanding of cultural differences.", id: 1},
        {text: "I had a very fun time during my class. The teachers are good listeners and give me opportunity to speak lots.", id: 2},
        {text: "The tutors create a very friendly and easy-to-speak atmosphere. They will confirm the purpose of the class first, then proceed, and will answer your questions accurately.", id: 3},
        {text: "It was very relaxing to speak in English. I learnt many expressions. The lessons were very helpful as well.", id: 4},
    ]
    
    return ( 
        <div className="pricing-feedback">
            <h2>What our students are saying</h2>

            <div className="pricing-quotes-container">
                {quotes.map((quote) =>
                    <div className="pricing-quotes-lg" key={quote.id}>
                        {quote.id > 2 ? <i class="fas fa-quote-right"></i> : <i class="fas fa-quote-left"></i>}
                        <p>{quote.text}</p>
                    </div>        
                )}
            </div>

            <img src={feedback} alt="a woman adjusting a ratings slider" />
        </div>
     );
}
 
export default PricingFeedback;