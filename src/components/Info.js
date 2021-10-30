import anytime from "../img/anytime.svg"
import anywhere from "../img/anywhere.svg"
import anyway from "../img/anyway.gif"

const Info = () => {
    return (
        <div className="infoContainer">
            <section className="infoBox1">
                <div className="infoBoxtext">
                    <h1>Any time</h1>
                    <h3>Arrange your lesson schedule around you. We have teachers online at all times. Meet some of our teachers here. </h3>
                </div>
                <img src={anytime} alt="r" />
            </section>
            <section className="infoBox2">
                <div className="infoBoxtext">
                    <h1>Anywhere</h1>
                    <h3>At home. In a cafe. In a park. Jump into conversation from wherever you are comfortable. </h3>
                </div>
                <img src={anywhere} alt="d" />
            </section>
            <section className="infoBox3">
                <div className="infoBoxtext">
                    <h1>Any way</h1>
                    <h3>Enjoy full flexiblility of your English classes whether it's on a computer, tablet or smarthphone.</h3>
                </div>    
                <img src={anyway} alt="d" />
            </section>
        </div> 
        
     );
}
 
export default Info;