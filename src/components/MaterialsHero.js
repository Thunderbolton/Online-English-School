import conversation from "../img/conversation-app-screenshot.PNG";
import news from "../img/news-app-screenshot.PNG";

const MaterialsHero = () => {
    return ( 
        <div className="materials-hero">
            <img src={conversation} alt="a collection of conversation topics"></img>
            <div id="conversation-info" className="materials-hero-info">
                <p>Ease into lessons naturally using this material to engage in daily conversation. Select from a variety of 100 commonly talked-about topics.</p>
                <button id="conversation-btn" className="materials-hero-info-btn">Jump into daily conversation</button>
            </div>
            <div id="news-info" className="materials-hero-info">
                <p>Explore a range of news categories and read articles from a selection of countries. Enjoy discussion on the latest stories.</p>
                <button id="news-btn" className="materials-hero-info-btn">Read the latest news</button>
            </div>
            <img id="news-img" src={news} alt="a page with news articles" />
        </div>
     );
}
 
export default MaterialsHero;