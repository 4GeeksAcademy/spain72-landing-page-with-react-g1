import React from "react";
import PropTypes from "prop-types";
import ImagenDefault from '../../img/Imagen.jpg';


export const Card = (props) => {
    return (
        <div className="col">
            <div class="card m-1">
            <img className="card-img-top w-100 img-fluid" src={props.imagen} alt="Card image cap"/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text flex-grow-1">{props.description}</p>
                    <hr className="my-3"/>
                    <a href="#" className="btn btn-primary mt-auto">{props.textButton}</a>
                </div>

            </div>
        </div>
    );
};


Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    textButton: PropTypes.string,
    imagen: PropTypes.string
}

Card.defaultProps = {
    title: 'Card Title',
    description: 'Alguna descripcion de tu contenido',
    textButton: 'Leer más...',
    imagen: ImagenDefault
}