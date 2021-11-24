import conversation from "../img/conversation-app-screenshot.PNG";
import news from "../img/news-app-screenshot.PNG";

const MaterialsHero = () => {
    return ( 
        <div className="materials-hero">
            <img src={conversation} alt="a collection of conversation topics"></img>
            <img src={news} alt="" />
        </div>
     );
}
 
export default MaterialsHero;