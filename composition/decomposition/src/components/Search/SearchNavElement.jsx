import PropTypes from 'prop-types';

/**
 * ��������� �������� ��������� ����� �� ������� ������. ��������� �������� ��������� ��� ��������� �������.
 */

export function SearchNavElement(props) {
    return (
        <a href={props.link}>{props.text}</a>
    )
}

SearchNavElement.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
}