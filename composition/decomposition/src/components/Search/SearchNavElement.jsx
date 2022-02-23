import PropTypes from 'prop-types';

/**
 * Компонент «Элемент навигации блока со строкой поиска». Структура элемента навигации над поисковой строкой.
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