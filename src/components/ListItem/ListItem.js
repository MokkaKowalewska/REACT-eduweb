import React from 'react';
import Proptypes from 'prop-types';
import './ListItem.css';

const ListItem = ({
    name,
    description,
    image,
    twitterLink
}) => (
    <li className="ListItem__wrapper">
        <img
            src={image}
            className ="listItem__image"
            alt="{name}" />
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <a href={twitterLink} className="listItem__button">visit twitter page</a>
        </div>
    </li>
);

ListItem.propTypes = {
    name: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    image: Proptypes.string,
    twitterLink: Proptypes.string.isRequired,
}

ListItem.defaultProps = {
    description: "ashdhasdasdjasgd",
}

export default ListItem;
