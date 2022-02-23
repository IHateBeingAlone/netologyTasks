import PropTypes from 'prop-types';

/**
 * ��������� �������� ������ ����. ��������� �������� ����� � ������ ����� ������.
 */

export function TopRightBlock(props) {
    return (
        <div className="top-right__block">
            <img width={props.width} height={props.height} src={props.image} alt={props.alt}/>
            <a href={props.href}>{props.linkContent}</a>
            <span>{props.spanContent}</span>
        </div>
    );
}

TopRightBlock.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string,
    linkContent: PropTypes.string,
    spanContent: PropTypes.string,
}