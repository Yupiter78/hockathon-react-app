import React from "react";
import PropTypes from "prop-types";

const Card = ({ firstName, lastName, photo, about }) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={photo} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5>
                        {firstName} {lastName}
                    </h5>
                    <p className="card-text">18 years old</p>
                    <p className="card-text">{about}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                            >
                                View
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                            >
                                Favourites
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.any,
    about: PropTypes.string
};

export default Card;
