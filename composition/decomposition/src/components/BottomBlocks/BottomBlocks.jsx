import PropTypes from 'prop-types';

/**
 * Компонент «Нижний блок». Контейнер для контента.
 */

export function BottomBlocks(props) {
    return (
        <div className="bottom-block-container">
            <div className="bottom-block-top">
                <h2 className="bottom-block_title">{props.title}</h2>
                {
                    props.link ? <a href={props.link} className="bottom-block_button"><img src={props.src} alt={props.alt}/>{props.value}</a> : ''
                }
            </div>
            <div className="bottom-block-content">
                {props.children}
            </div>
        </div>
    )
}

BottomBlocks.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.array,
}