import feedback from "../img/feedback.svg"


const PricingFeedback = () => {
    const screenWidth = window.innerWidth;

    const quotes = [
        {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae in nostrum, mollitia laborum ipsa aliquid pariatur vitae veritatis accusantium.", id: 1},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est optio itaque architecto velit, nobis repudiandae.", id: 2},
        {text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, adipisci.", id: 3},
        {text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos velit natus numquam?", id: 4},
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