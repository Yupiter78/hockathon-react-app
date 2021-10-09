import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PrimaryButton = styled.button`
    color: #fff;
    background-color: cadetblue;
    border-color: lightblue;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    border-radius: 20%;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
`;

const Button = ({ text }) => {
    return <PrimaryButton>{text}</PrimaryButton>;
};

Button.propTypes = {
    text: PropTypes.string
};

export default Button;
