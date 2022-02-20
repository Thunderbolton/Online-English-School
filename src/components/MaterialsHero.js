import { useState } from "react";
import conversation from "../img/conversation-app-screenshot.PNG";
import news from "../img/news-app-screenshot.PNG";
import "../index.css";


const MaterialsHero = () => {

    const [conversationContrast, setConversationContrast] = useState("materials-hero-img");
    const [newsContrast, setNewsContrast] = useState("materials-hero-img");

    const conversationContrastChange = () => {
    setConversationContrast("materials-hero-info-highlight");
    }

    const newsContrastChange = () => {
    setNewsContrast("materials-hero-info-highlight");
    }

    return ( 
        <div className="materials-hero">
            
            <div id="conversation-info" className="materials-hero-info" onMouseEnter={conversationContrastChange} onMouseLeave={() => setConversationContrast("materials-hero-img")}>
                <p>Ease into lessons naturally using this material to engage in daily conversation. Select from a variety of 100 commonly talked-about topics.</p>
                <a href="https://thunderbolton.github.io/Conversation-app/" target="_blank" rel="noopener noreferrer"><button id="conversation-btn" className="materials-hero-info-btn">Jump into daily conversation</button></a>
            </div>
            <img id="conversation-img" src={conversation} alt="a collection of conversation topics" className={conversationContrast}></img>

            <div id="news-info" className="materials-hero-info" onMouseEnter={newsContrastChange} onMouseLeave={() => setNewsContrast("materials-hero-img")}>
                <p>Explore a range of news categories and read articles from a selection of countries. Enjoy discussion on the latest stories.</p>
                <a href="https://readthelatest.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button id="news-btn" className="materials-hero-info-btn">Read the latest news</button></a>
            </div>
            <img id="news-img" src={news} alt="a page with news articles" className={newsContrast}/>

            {/* For smaller screen sizes */}
            <div className="materials-hero-info-btn-sm">
                <a href="https://thunderbolton.github.io/Conversation-app/" target="_blank" rel="noopener noreferrer"><button id="conversation-btn-sm" onMouseEnter={conversationContrastChange} onMouseLeave={() => setConversationContrast("materials-hero-img")}>Jump into daily conversation</button></a>
                <a href="https://readthelatest.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button id="news-btn-sm" onMouseEnter={newsContrastChange} onMouseLeave={() => setNewsContrast("materials-hero-img")}>Read the latest news</button></a>
            </div>
        </div>
     );
}
 
export default MaterialsHero;