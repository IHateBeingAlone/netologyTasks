export function Collapse(props) {
    return (
        <div className={props.isExpanded === true ? "collapse expanded" : "collapse"}>
            {props.children}
            <a href="#" className={props.isExpanded === true ? "link collapse__link expanded" : "link collapse__link"} onClick={ props.onExpandedChange }>
                <span className="link__text">
                    {props.isExpanded === true ? props.expandedLabel : props.collapsedLabel}
                </span>
                <span className="link__icon"></span>
            </a>
        </div>
    );
}