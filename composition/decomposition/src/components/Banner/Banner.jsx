import PropTypes from 'prop-types';

/**
 * ��������� �������.
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