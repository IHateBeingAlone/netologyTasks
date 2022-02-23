import PropTypes from 'prop-types';

/**
 * Компонент «Баннер».
 */

export function Banner(props) {
    return (
        <a className="banner" href={props.href}><img src={props.src} alt={props.alt}/></a>
    )
}

Banner.propTypes = {
    href: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
}