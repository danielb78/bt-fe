import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {itemName} from '../../../helpers/section';
import PropTypes from 'prop-types';

const Section = (props) => {
    return (
        <section className="Section">
            <h3><FontAwesomeIcon icon={props.fontAwesome}/> {props.title}</h3>
            <ol className="rectangle-list">
                {props.list.map(item =><li key={item.name || props.title}>
                    <span>{itemName(item)}{item.value}</span>
                </li>)}
            </ol>
        </section>
    );
};

Section.propTypes = {
    fontAwesome: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired
        }),
    ).isRequired
};

export default Section;
