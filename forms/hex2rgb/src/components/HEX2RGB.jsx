import {useState} from 'react';

const INITIAL_FORM_STATE = {
    hex: '',
    r: '255',
    g: '255',
    b: '255',
    valid: true
}

export function HEX2RGB() {
    const [form, setForm] = useState(INITIAL_FORM_STATE);

    const onFieldChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        if (e.target.value.length === 7 && e.target.value.match(/#[0-9a-fA-F]{6}/)) {
            setForm(prev => ({
                ...prev,
                r: parseInt(e.target.value.substr(1, 2), 16),
                g: parseInt(e.target.value.substr(3, 2), 16),
                b: parseInt(e.target.value.substr(5, 2), 16)
            }));
        } else {
            setForm(prev => ({
                ...prev,
                r: INITIAL_FORM_STATE.r,
                g: INITIAL_FORM_STATE.g,
                b: INITIAL_FORM_STATE.b
            }));
        }
    }

    let wrapperHex = {};

    if (form.hex.match(/#[0-9a-fA-F]{6}/) && form.hex.length === 7) {
        form.valid = true;
        wrapperHex = {
            background: form.hex,
        };
    } else if (form.hex.length > 7) {
        form.valid = false;
        wrapperHex = {
            background: '#E94B35',
        };
    } else {
        form.valid = true;
    }

    return (
        <div className="wrapper" style={wrapperHex}>
            <form className="ColorForm">
                <div className="ColorForm-Field">
                    <input
                        className="ColorForm-Control"
                        id="hex"
                        name="hex"
                        value={form.hex}
                        onChange={onFieldChange}
                        placeholder="#FFFFFF"
                    />
                </div>
                {
                    form.valid
                        ?
                        <div className="ColorForm-Field">rgb({form.r}, {form.g}, {form.b})</div>
                        :
                        <div className="ColorForm-Field">Ошибка!</div>
                }
            </form>
        </div>
    );
}