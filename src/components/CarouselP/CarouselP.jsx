import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './carouselp.css';
const CarouselP = (props) => {
    const imagenes = props.imagenes;
    return (
        <>
            <Carousel>
                {
                    imagenes.map(imagen => <img src={imagen.url} key={imagen.id} />)
                    
                }
            </Carousel>

        </>
    )
}
CarouselP.propTypes = {
    imagenes: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
};

export default CarouselP