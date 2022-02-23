import {Collapse} from './Collapse';
import {useState} from 'react';

const isExpanded = {
    isExpanded: true
}

export function CollapseWrapper() {

    const [view, setView] = useState(isExpanded);
    const handleExpandedChange = () => {
        setView( (previousState) => { return {isExpanded: !previousState.isExpanded} } )
    }

    return (
        <Collapse
            collapsedLabel='Подробнее'
            expandedLabel='Скрыть'
            isExpanded={ view.isExpanded }
            onExpandedChange={ handleExpandedChange }
        >
            <div className="collapse__content">
                Альфа-Банк, основанный в 1990 году, является универсальным банком,
                осуществляющим все основные виды банковских операций, представленных
                на рынке финансовых услуг, включая обслуживание частных и корпоративных
                клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
            </div>
        </Collapse>
    );
}