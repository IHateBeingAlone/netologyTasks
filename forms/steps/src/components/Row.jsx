import PropTypes from 'prop-types';

export function Row({date, distance, idx, editRow, deleteRow}) {
    return (
        <div className="row-comp">
            <span>{new Date(date).toLocaleDateString()}</span>
            <span>{distance}</span>
            <div className="row-events">
                <i className="row-edit" onClick={ () => {editRow(idx)}}>&#9998;</i>
                <i className="row-delete" onClick={ () => {deleteRow(idx)}}>&#10005;</i>
            </div>
        </div>
    );
}

Row.propTypes = {
    date: PropTypes.string,
    distance: PropTypes.number,
    idx: PropTypes.number,
    editRow: PropTypes.func,
    deleteRow: PropTypes.func,
}

Row.defaultProps = {
    date: '',
    distance: '',
    idx: '0',
}