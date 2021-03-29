import React from 'react';
import PropTypes from 'prop-types';
import './paragraph.scss';

export const Paragraph = ({text, color, fontSize}) => {
    let paragraphStyle = {
        fontSize: fontSize,
        color: color
    };
    return (
        <p className="paragraph" style={paragraphStyle}>{text}</p>
    )
};

export const BoldParagraph = ({text, color, fontSize}) => {
    let paragraphStyle = {
        fontSize: fontSize,
        color: color
    };
    return (
        <p className="paragraph paragraph-bold" style={paragraphStyle}>{text}</p>
    )
};

export const ItalicParagraph = ({text, color, fontSize}) => {
    let paragraphStyle = {
        fontSize: fontSize,
        color: color
    };
    return (
        <p className="paragraph paragraph-italic" style={paragraphStyle}>{text}</p>
    )
};


Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.number
};

