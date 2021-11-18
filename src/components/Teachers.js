import teachers from "../img/teachers.svg"
import TeacherCards from "./TeacherCards";

const Teachers = () => {
    return ( 
        <div className="teachers">
            <h2>Our teachers are located globally. </h2>
            <img src={teachers} alt="teachers" />
            <TeacherCards />
        </div>
     );
}
 
export default Teachers;