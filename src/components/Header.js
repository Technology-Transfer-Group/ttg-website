import '../style/main.css';
import { Link } from 'react-router-dom';
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";


const Header = () => {

    useEffect(()=>{
        Aos.init({duration:1500 });
        },[]);
    
    return ( 
        <section className="hero-area">
        <img className="hero-shape" src="/images/hero/hero-shape.svg" alt="#" />
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="hero-content">
                        <h4 data-aos="slide-up" data-aos-delay="100">SRIC, IIT Kharagpur</h4>
                        <h1  data-aos="slide-up" data-aos-delay="200" style={{fontFamily:'Raleway'}}>Technology
                            Transfer <br />Group 
                            <span>
                                <img className="text-shape" src="/images/hero/text-shape.svg" alt="#" />

                            </span>
                        </h1>
                        <p data-aos="slide-up" data-aos-delay="300">A Patent a day keeps the infringer away
                        </p>
                        <div className="button " data-aos="slide-up" data-aos-delay="200">
                            <Link to="/about" className="btn " style={ {textDecoration:'none'} }>Know More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-12">
                    <div className="hero-image">
                        <object className="main-image" type="image/svg+xml" data="/images/logo/ttg-3d-logo.svg" src="/images/logo/ttg-3d-logo.svg" alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Header;