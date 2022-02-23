import PropTypes from 'prop-types';

/**
 * Компонент «Элемент курса валюты». Структура блока курса валюты.
 */

export function CurrencyElement(props) {
    return (
        <div className="currency">
            <span className="currency__currency">{props.currency}</span>
            <span className="currency__name">{props.name}</span>
            <span className="currency__value">{props.value}</span>
            <span className="currency__difference">{props.difference}</span>
        </div>
    );
}

CurrencyElement.propTypes = {
    currency: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number,
    difference: PropTypes.string,
}