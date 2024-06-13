import React from "react";
import PropTypes from "prop-types";
import ImagenDefault from '../../img/Imagen.jpg';


export const Card = (props) => {
    return (
        <div className="card col-4">
            <img className="card-img-top" src={props.imagen} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">{props.textButton}</a>
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