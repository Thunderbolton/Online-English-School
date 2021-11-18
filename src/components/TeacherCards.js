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
            profilePicture: james,
            homeCountry: "UK",
            bio: "I'm an English teacher living in Japan"
        },
        {
            name: "Lily",
            location: "New York, USA",
            profilePicture: lily,
            homeCountry: "USA",
            bio: "I'm an English teacher living in USA"
        },
        {
            name: "Alex",
            location: "Madrid, Spain",
            profilePicture: alex,
            homeCountry: "New Zealand",
            bio: "I'm an English teacher living in Spain"
        },
        {
            name: "Emma",
            location: "Tokyo, Japan",
            profilePicture: emma,
            homeCountry: "UK",
            bio: "I'm an English teacher living in Japan"
        },
        {
            name: "John",
            location: "New York, USA",
            profilePicture: john,
            homeCountry: "USA",
            bio: "I'm an English teacher living in USA"
        },
        {
            name: "Grace",
            location: "Madrid, Spain",
            profilePicture: grace,
            homeCountry: "USA",
            bio: "I'm an English teacher living in Spain"
        },
    ]
    return ( 
        <div className="teacher-card-grid">
            {cards.map((card) => (
                <div className="teacher-cards">
                    <h1>{card.name}</h1>
                    <h3>From: {card.homeCountry}</h3>
                    <h4>Living in: {card.location}</h4>
                    <img className="teacher-img" src={card.profilePicture}></img>
                    <hr />
                    <p>{card.bio}</p>
                </div>    
            ))}
        </div>
     );
}
 
export default TeacherCards;