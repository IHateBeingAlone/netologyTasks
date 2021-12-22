import {Star} from './Star';
import PropTypes from 'prop-types';

export function Stars({counts}) {

    let elementsOfCounts = [];

    for (let i = 0; i < counts; i++) {
        elementsOfCounts[i] = i;
    }

    return (
        elementsOfCounts.map((el, idx) => {
            return (
                <Star key={idx} item={el} className="star" />
            )
        })
    );
}

Stars.propTypes = {
    counts: PropTypes.number,
}

Stars.defaultProps = {
    counts: '1',
}