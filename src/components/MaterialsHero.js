import conversation from "../img/conversation-app-screenshot.PNG";
import news from "../img/news-app-screenshot.PNG";

const MaterialsHero = () => {
    return ( 
        <div className="materials-hero">
            <img src={conversation} alt="a collection of conversation topics"></img>
            <div className="conversation-info">
                <button id="conversation-btn" className="materials-hero-info-btn">Jump into daily conversation</button>
            </div>
            <div className="news-info">
                <button id="news-btn" className="materials-hero-info-btn">Read the latest news</button>
            </div>
            <img id="news-img" src={news} alt="a page with news articles" />
        </div>
     );
}
 
export default MaterialsHero;