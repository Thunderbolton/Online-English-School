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
            interests: "Sports, Hiking, Reading",
            profilePicture: james,
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur nisi dolores aspernatur alias cum voluptatum dicta. Excepturi, ipsam sunt adipisci repellendus",
            isOnline: true
        },
        {
            name: "Lily",
            location: "New York, USA",
            homeCountry: "USA",
            interests: "",
            profilePicture: lily,
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur nisi dolores aspernatur alias cum voluptatum dicta. Excepturi, ipsam",
            isOnline: true
        },
        {
            name: "Alex",
            location: "Madrid, Spain",
            homeCountry: "New Zealand",
            interests: "",
            profilePicture: alex,
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur nisi dolores aspernatur alias cum",
            isOnline: false
        },
        {
            name: "Emma",
            location: "Tokyo, Japan",
            homeCountry: "UK",
            interests: "",
            profilePicture: emma,
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur nisi dolores aspernatur alias cum voluptatum dicta. Excepturi, ipsam sunt adipisci repellendus",
            isOnline: true
        },
        {
            name: "John",
            location: "New York, USA",
            homeCountry: "USA",
            interests: "",
            profilePicture: john,
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur nisi dolores aspernatur alias cum voluptatum dicta.",
            isOnline: false
        },
        {
            name: "Grace",
            location: "Madrid, Spain",
            homeCountry: "USA",
            interests: "",
            profilePicture: grace,
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur nisi dolores aspernatur alias cum voluptatum dicta. Excepturi, ipsam sunt adipisci repellendus",
            isOnline: true
        },
    ]
    return ( 
        <div className="teacher-card-grid">
            {cards.map((card) => (
                <div className="teacher-card">
                    <h1 className="teacher-card-name">{card.name}</h1>
                    <div className="teacher-card-text">
                        <h3>From: {card.homeCountry}</h3>
                        <h4>Living in: {card.location}</h4>
                        <h4>Interests: {card.interests}</h4>
                    </div>
                    <img className="teacher-img" src={card.profilePicture}></img>
                    <p className="teacher-bio">{card.bio}</p>
                    
                </div>    
            ))}
        </div>
     );
}
 
export default TeacherCards;