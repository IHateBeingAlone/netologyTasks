export function NewsElement(props) {
    return (
        <div className="news__element">
            <img src={props.image} alt="news icon"/>
            <span>
                {props.children}
            </span>
        </div>
    );
}