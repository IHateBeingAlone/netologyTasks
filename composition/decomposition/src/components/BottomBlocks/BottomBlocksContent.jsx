import PropTypes from 'prop-types';

/**
 * Компонент «Контент нижних блоков». Наполнение контейнера контентом.
 */

export function BottomBlocksContent(props) {
    return (
        <span>
            {
                props.image ? <img src={props.image} alt={props.alt} /> : ''
            }
            {
                props.strong ? <strong>{props.strong}</strong> : ''
            }
            {props.content}
            {
                props.light ? <span>{props.light}</span> : ''
            }
        </span>
    )
}

BottomBlocksContent.propTypes = {
    image: PropTypes.string,
    strong: PropTypes.string,
    content: PropTypes.string,
    light: PropTypes.string,
}