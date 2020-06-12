import React from 'react';
import PropTypes from 'prop-types';
import Section from "./Section";

const Sections = (props) => {
    return (
        <div className="Sections">
            {props.list.map(item => <Section
                key={item.title}
                fontAwesome={item.fontAwesome}
                title={item.title}
                list={item.list}/>)}
        </div>
    );
};

Sections.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            fontAwesome: PropTypes.object.isRequired,
            list: PropTypes.array.isRequired,
        }),
    ).isRequired
};

export default Sections;
