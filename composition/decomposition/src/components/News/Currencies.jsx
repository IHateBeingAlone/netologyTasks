import {CurrencyElement} from "./CurrencyElement";

/**
 * Компонент «Валюты». Наполнение контентом блоков с курсом валют.
 */

const currencies = [
    {
        name: "MOEX",
        currency: "USD",
        value: "63,52",
        difference: "+0,09",
    },
    {
        name: "MOEX",
        currency: "EUR",
        value: "70,86",
        difference: "+0,14",
    },
    {
        name: "",
        currency: "НЕФТЬ",
        value: "64,90",
        difference: "+1,63%",
    },
];

export function Currencies() {
    return (
        <div className="currencies">
            {
                currencies.map((el, idx) => {
                    return (
                        <CurrencyElement
                            currency={el.currency}
                            name={el.name}
                            key={idx}
                            value={el.value}
                            difference={el.difference}
                        />
                    )
                })
            }
        </div>
    );
}