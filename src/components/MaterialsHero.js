import conversation from "../img/conversation-app-screenshot.PNG";
import news from "../img/news-app-screenshot.PNG";

const MaterialsHero = () => {
    return ( 
        <div className="materials-hero">
            <img id="conversation-img" src={conversation} alt="a collection of conversation topics"></img>
            <img id="news-img" src={news} alt="a page with news articles" />
        </div>
     );
}
 
export default MaterialsHero;