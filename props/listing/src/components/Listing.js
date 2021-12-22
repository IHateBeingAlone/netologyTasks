import PropTypes from 'prop-types';
import React, { useState } from 'react'


export function Listing({items}) {

    return (
        <div className="item">
            <div className="item-image">
                <a href={items.url}>
                    <img src={items.MainImage.url_570xN} alt=""/>
                </a>
            </div>
            <div className="item-details">
                {
                    items.title.length > 50 ? <p className="item-title">{items.title.slice(0, 50).trim().replace(/[,.!?:;]$/, "") + '...'}</p> : <p className="item-title">{items.title}</p>
                }
                {
                    items.currency_code == 'USD' &&
                    <p className="item-price">${items.price}</p>
                    || items.currency_code == 'EUR' &&
                    <p className="item-price">&euro;{items.price} </p>
                    ||
                    <p className="item-price">{items.price} {items.currency_code}</p>
                }
                {
                    items.quantity <= 10 &&
                    <p className="item-quantity level-low">{items.quantity}</p>
                    || items.quantity <= 20 &&
                    <p className="item-quantity level-medium">{items.quantity}</p>
                    || items.quantity > 20 &&
                    <p className="item-quantity level-high">{items.quantity}</p>
                }
            </div>
        </div>
    );
}

Listing.propTypes = {
    items: PropTypes.array,
}

Listing.defaultProps = {
    items: [],
}