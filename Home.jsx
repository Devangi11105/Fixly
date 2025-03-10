import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import heroimg from "./images/Designer.png";
import PainterImg from "./images/painter.png";
import PlumberImg from "./images/plumbing.png";
import CarpenterImg from "./images/carpentary.png";
import ElectricalImg from "./images/electrical.png";
import CleanerImg from "./images/cleaning.png";
import ReviewCard from "./review";
import { useNavigate } from "react-router-dom";


const Home = () => {
    return(
      <>
    <div class="main">
    <div className="navbar">
        <h1>Fixly</h1>
        <div className="nav-links">
        {/* <Link to="/backhome" className="btn home">Home</Link> */}
          <Link to="/authchoice" className="btn login">Login/Sign up</Link>
          <Link to="/tasker" className="btn tasker">Become a Tasker</Link>
        </div>
    </div>

      
    <div className="hero">
        <div className="hero-text">
          <h1>Book trusted help for Home Tasks</h1>
          <Link to="/Login" className="bttn book-now">Book Now</Link>
        </div>
        <img src={heroimg} />
    </div>
    </div>


    <div className="services">
      <div style={{ marginTop: 90, marginBottom: 50 }}>
      <h3 style={{ textAlign: "center", fontSize: 30}}>Our Services</h3>
      </div>

       <div className="box">
          <div className="box1">
            <img  src={PainterImg} />
            <p style={{ textAlign: "center", fontFamily: "serif", fontSize: 24 }}>Painting</p>
          </div>
          <div className="box1">
            <img  src={CleanerImg} />
            <p style={{ textAlign: "center", fontFamily: "serif", fontSize: 24 }}>Cleaning</p>
          </div>
          <div className="box1">
            <img  src={PlumberImg} />
            <p style={{ textAlign: "center", fontFamily: "serif", fontSize: 24 }}>Plumbing</p>
          </div>
          <div className="box1">
            <img src={CarpenterImg} />
            <p style={{ textAlign: "center", fontFamily: "serif", fontSize: 24 }}>Carpentary</p>
          </div>
          <div className="box1">
            <img src={ElectricalImg} />
            <p style={{ textAlign: "center", fontFamily: "serif", fontSize: 24 }}>Electric</p>
          </div>
      </div> 


      <div className="review">
        <div style={{ marginTop: 90, marginBottom: 50 }}>
          <h3 style={{ textAlign: "center", fontSize: 30}}>See what happy customers are saying</h3>
        </div>

        <ReviewCard />


      </div>

      <footer>
        <div className="last">
        <p>Made with {"\u2764\uFE0F"} For India</p>
        </div>
      </footer>



    </div>

      
      </>
    )

};


export default Home;
