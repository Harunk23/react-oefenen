import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import Huis from './images/huis.jpg';
import Auto from './images/auto.jpg';
import Zorg from './images/zorg.jpg';

function Verzekering() {
    return(
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 hoogte"
                    src={Auto}
                    alt="First slide"
                />
                <Carousel.Caption className="caption">
                    <h1 className="faze-in"><b>Autoverzekering</b></h1>
                    <button className="carousel-btn faze-in"><span>VERGELIJK</span></button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 hoogte"
                    src={Zorg}
                    alt="Second slide"
                />

            <Carousel.Caption className="caption">
                <h1 style={{color: "gray"}}><b>Zorgverzekering</b></h1>
                <button className="carousel-btn"><span>VERGELIJK</span></button>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 hoogte"
                    src={Huis}
                    alt="Third slide"
                />

            <Carousel.Caption className="caption">
                <h1 style={{color: "black"}}><b>Woonverzekering</b></h1>
                <button className="carousel-btn"><span>VERGELIJK</span></button>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Verzekering;