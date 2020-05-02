import React from 'react';
import ListItem from '../ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = (props) => (
    <ul>
       {props.items.map(item => (
            <ListItem key={item.name} {...item}
            />
       ))}
    </ul>
);

export default ListWrapper;
