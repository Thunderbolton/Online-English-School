import james from "../img/james.jpg"
import lily from "../img/lily.jpg"
import alex from "../img/alex.jpg"
import emma from "../img/emma.jpg"
import john from "../img/john.jpg"
import grace from "../img/grace.jpg"


const TeacherCards = () => {

    const cards = [
        {
            name: "James",
            location: "Tokyo, Japan",
            homeCountry: "UK",
            profilePicture: james,
            bio: "Hey, I'm James and I'm from Nottingham, UK. I've been happily teaching in Tokyo for 4 years and I will be glad to help you with your English. I hope we can connect soon.",
            isOnline: true
        },
        {
            name: "Olivia",
            location: "New York, USA",
            homeCountry: "USA",
            interests: "",
            profilePicture: lily,
            bio: "Hi! It's nice to meet you - my name is Olivia. Currently I'm in New York but I was born on the West Coast, in Los Angeles. I like working with all students and hope to meet you soon!",
            isOnline: true
        },
        {
            name: "Alex",
            location: "Madrid, Spain",
            homeCountry: "New Zealand",
            interests: "",
            profilePicture: alex,
            bio: "Hi, my name is Alex and my home country is New Zealand. My hobbies are playing guitar, attending rock music concerts and gaming. I'll look forward to seeing you in my class soon!",
            isOnline: false
        },
        {
            name: "Emma",
            location: "Barcelona, Spain",
            homeCountry: "UK",
            interests: "",
            profilePicture: emma,
            bio: "Hi there, I'm Emma and I'm from London. Right now I'm living in Spain, in the wonderful city of Barcelona. I graduated with a degree in English Literature and I would love to talk with you about books.",
            isOnline: true
        },
        {
            name: "John",
            location: "Vancouver",
            homeCountry: "Canada",
            interests: "",
            profilePicture: john,
            bio: "Hello, my name is John and I'm a Professor of English language in Vancouver. Having spent years around Asia teaching English as a foreign language, I'm welcome to all kinds of students.",
            isOnline: false
        },
        {
            name: "Grace",
            location: "Madrid, Spain",
            homeCountry: "USA",
            interests: "",
            profilePicture: grace,
            bio: "Hi! I'm Grace. I have been teaching English online since 2019, and I love it. I'm excited to meet you soon and I'd like to help you become comfortable and confident when speaking English.",
            isOnline: true
        },
    ]
    return ( 
        <div className="teacher-card-grid">
            {cards.map((card) => (
                <div className="teacher-card">
                    
                    <div className="teacher-info">
                        {card.isOnline === true ? 
                            <div>
                                <i class="fas fa-circle faOnline"></i>
                            </div> : <i class="fas fa-circle faOffline"></i>}    
                        <h1 className="teacher-card-name">{card.name}</h1>
                    </div>
                    <div className="teacher-card-text">
                        <h3>From: {card.homeCountry}</h3>
                        <h4>Living in: {card.location}</h4>
                    </div>

                    <img className="teacher-img" src={card.profilePicture} alt="teacher profile"></img>
                    
                    <div className="teacher-card-bottom">
                        <p className="teacher-bio">{card.bio}</p>
                        {card.isOnline === true ? 
                        <button className="teacher-select-btn">Talk with {card.name} today!</button> : <button className="teacher-select-btn">Check {card.name + "'s"} schedule</button>}
                    </div>
                </div>    
            ))}
        </div>
     );
}
 
export default TeacherCards;