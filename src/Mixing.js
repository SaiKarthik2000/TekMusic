import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navbarc from './Component/Navbarc.js';
import BackgroundSlider from './Component/BackgroundSlider';
import './index.css';
import image1 from './Assets/Images/slider7.jpeg';


function Mixing() {
  return (
    <div className="talent">
        <Navbarc />
        <BackgroundSlider images={[image1]} duration={3600}  />
        <div style={{display:"block"}}>
            <div className="bgslider2">
                <div className="justify-content-md-center maincontent2"><font style={{color:'gold'}}>Mixing Wing</font></div>     
                <div className="justify-content-md-center maincontent2"><font style={{color:'gold'}}>General Instructions</font></div>
            </div>
            <div className="bgslider3">
                <div className="maincontent3"><font><li>Participants who wish to apply for multiple categories are encouraged to register for each category separately.</li></font></div>
                <div className="maincontent3"><font><li>Please note that the number of categories applied to will not increase or decrease the chance of getting in.</li></font></div>
                <div className="maincontent3"><font><li>It will be purely based on the skills of the applicant in the respective category.</li></font></div>
                <div className="maincontent3"><font><li>Keep in mind that a well recorded video/audio will be easier to judge.</li></font></div>
                <div className="maincontent3"><font><li>Send us your portfolios! Your portfolio must include a brief summary of your past work and a concise list of skills you think you are adept at, with reference to sound mixing.</li></font></div>
            </div>
            <div className="bgslider4">
                <Row xs={1} md={1} className="g-4">
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Live Mixing and Sound Production</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Santhosh +91-9566587117</font></div>
                                    <div className="maincontent3"><font>Aaditya +91-9444511430</font></div>
                                </Card.Text>
                                <a href="https://forms.gle/HA8ptFUwq2f4TgvQ6" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Mixing</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{display:"block"}}>
                <div className="bgslider2" style={{marginTop: '1rem'}}>
                    <div className="justify-content-md-center maincontent2" ><font>Other categories</font></div>     
                    
                    <Link to="/Talenthunt/Classical" className='fontjoin'>
                        <button className="button text-bt-2">
                            Classical Wing
                        </button>
                    </Link>
                    <Link to="/Talenthunt/Light&Western" className='fontjoin'>
                        <button className="button text-bt-2">
                            Light and Western Wing
                        </button>
                    </Link>
                    <Link to="/Talenthunt/Media" className='fontjoin'>
                        <button className="button text-bt-2">
                            Media Wing
                        </button>
                    </Link>
                    <Link to="/Talenthunt/otherInstruments" className='fontjoin'>
                        <button className="button text-bt-2">
                            Other Instruments
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
        <div className="bgslider2" style={{marginTop: '1rem'}}>
            <div className="maincontent3"><font>For any other queries, contact:</font></div>
            <div className="maincontent3"><font>Tharun +91-9380205535</font></div>
              <div className="maincontent3"><font>Sneha +91-8778569766</font></div>
        </div>
        <div className="bgslider2" style={{marginTop: '4rem'}} />
    </div>

  );
}

export default Mixing;
