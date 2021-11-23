import teachers from "../img/teachers.svg"
import TeacherCards from "./TeacherCards";

const Teachers = () => {
    return ( 
        <div className="teachers">
            <h2>Our teachers are located globally </h2>
            <img className="teachers-hero-img" src={teachers} alt="teachers" />
            <h2>Meet some of our highly rated instructors</h2>
            <TeacherCards />
        </div>
     );
}
 
export default Teachers;