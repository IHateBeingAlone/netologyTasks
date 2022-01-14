import {useState} from 'react';
import {Row} from './Row';

const INITIAL_FORM_STATE = {
    date: '',
    distance: '',
    rows: [],
    editMode: null
}

export function AddRowForm() {
    const [form, setForm] = useState(INITIAL_FORM_STATE);

    const onFieldChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }
    const addRow = (e) => {
        setForm( prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        e.preventDefault();

        function findDate(findDate) {
            return findDate.date === form.date;
        }


        if (form.editMode !== null) {
            form.rows[form.editMode].date = form.date;
            form.rows[form.editMode].distance = form.distance;
        } else {
            if (form.rows.find(findDate)) {
                form.rows.find(findDate).distance = Number(form.rows.find(findDate).distance) + Number(form.distance);
            } else {
                if (form.date.length > 0 && Number(form.distance) > 0) {
                    form.rows.push({
                        date: form.date,
                        distance: form.distance
                    });
                } else {
                    alert('Заполнены не все поля!');
                }
            }
        }

        form.rows.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });

        form.date = "";
        form.distance = "";
        form.editMode = null;
    }

    const editRow = (e) => {
        setForm( prev => ({
            ...prev,
            editMode: e
        }));

        form.date = form.rows[e].date;
        form.distance = form.rows[e].distance;
    }

    const deleteRow = (e) => {
        form.editMode = null;
        setForm( prev => ({
            ...prev,
        }));

        form.rows.splice(e, 1);
    }

    return (
        <div className="AddRowForm-Wrapper">
            <form className="AddRowForm" onSubmit={addRow}>
                <div className="AddRowForm-Top">
                    <div className="AddRowForm-Field">
                        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                        <input
                            className="AddRowForm-Control"
                            id="date"
                            name="date"
                            type="date"
                            value={form.date}
                            disabled={form.editMode !== null}
                            onChange={onFieldChange}
                        />
                    </div>
                    <div className="AddRowForm-Field">
                        <label htmlFor="distance">Пройдено км</label>
                        <input
                            className="AddRowForm-Control"
                            id="distance"
                            name="distance"
                            value={form.distance}
                            onChange={onFieldChange}
                        />
                    </div>
                    <button className="AddRowForm-Button AddRowForm-Submit">OK</button>
                </div>
                <div className="AddRowForm-Bot">
                    <div className="AddRowForm-Spans">
                        <span>Дата (ДД.ММ.ГГ)</span>
                        <span>Пройдено км</span>
                        <span>Действия</span>
                    </div>
                    <div className="AddRowForm-Row-Wrapper">
                        {
                            form.rows.map((el, idx) => {
                                return (
                                    <Row key={idx} date={el.date} distance={el.distance} idx={idx} editRow={editRow} deleteRow={deleteRow}/>
                                )
                            })
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}