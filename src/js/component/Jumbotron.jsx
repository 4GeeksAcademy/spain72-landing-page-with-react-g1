import React from "react";

export const Jumbotron = () => {

    return (
        < div className="row jumbotron bg-light py-4" >
            <div className="col col-sm-2 col-md-6 col-lg-8"></div>

            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente blanditiis excepturi ullam. Illum placeat ullam incidunt natus repellat.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
    )
}