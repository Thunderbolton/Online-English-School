import { useState } from "react";
import conversation from "../img/conversation-app-screenshot.PNG";
import news from "../img/news-app-screenshot.PNG";
import "../index.css";


const MaterialsHero = () => {

    const [contrast, setContrast] = useState("materials-hero-img");

    const contrastChange = () => {
    setContrast("materials-hero-info-highlight");
}
    return ( 
        <div className="materials-hero">
            
            <div id="conversation-info" className="materials-hero-info" onMouseEnter={contrastChange}>
                <p>Ease into lessons naturally using this material to engage in daily conversation. Select from a variety of 100 commonly talked-about topics.</p>
                <button id="conversation-btn" className="materials-hero-info-btn">Jump into daily conversation</button>
            </div>
            <img id="conversation-img" src={conversation} alt="a collection of conversation topics" className={contrast}></img>

            <div id="news-info" className="materials-hero-info" onMouseEnter={contrastChange}>
                <p>Explore a range of news categories and read articles from a selection of countries. Enjoy discussion on the latest stories.</p>
                <button id="news-btn" className="materials-hero-info-btn">Read the latest news</button>
            </div>
            <img id="news-img" src={news} alt="a page with news articles" className={contrast}/>

            <div className="materials-hero-info-btn-sm">
                <button id="conversation-btn-sm">Jump into daily conversation</button>
                <button id="news-btn-sm">Read the latest news</button>
            </div>
        </div>
     );
}
 
export default MaterialsHero;