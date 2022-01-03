import teachers from "../img/teachers.svg"

const TeachersHero = () => {
    return ( 
        <div>
            <h1 className="teachers-hero-heading">Our teachers are located globally</h1>
            <img className="teachers-hero-img" src={teachers} alt="teachers" />
            <h2 className="teachers-hero-subheading">Meet some of our highly rated instructors</h2>
        </div>
     );
}
 
export default TeachersHero;