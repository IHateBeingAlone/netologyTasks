import PropTypes from 'prop-types';

/**
 * ��������� ���������� ����� � ���������. ��� ����� �� ���������, �� ���������� �������� � ���������� ����� ����� ��������.
 */

export function NewsTitle(props) {
    return (
        <h1
            data-index={props.idx}
            className={props.active === true ? "news__title active" : "news__title"}
            onClick={ (e) => {props.clicked(e)} }
        >
            {props.title}
            {props.children}
        </h1>
    );
}

NewsTitle.propTypes = {
    idx: PropTypes.number,
    active: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.array,
}