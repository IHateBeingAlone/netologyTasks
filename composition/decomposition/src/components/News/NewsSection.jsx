import {NewsElement} from "./NewsElement";
import {NewsTitle} from "./NewsTitle";

export function NewsSection(props) {

    return (
        <div className="news__section">
            <div className="news__titles">
                {
                    props.sections.map((el, idx) => {
                        return (
                            <NewsTitle
                                key={idx}
                                idx={idx}
                                clicked={props.clicked}
                                title={el.title}
                                active={el.active}
                            >
                                {el.text}
                                {
                                    props.sections.length - 1 === idx ? <span>{new Date().toLocaleString()}</span> : ""
                                }
                            </NewsTitle>
                        )
                    })
                }
            </div>
            <div className="news__container">
                {
                    props.newsArray.map((el, idx) => {
                        return (
                            <NewsElement
                                image={el.image}
                                key={idx}
                            >
                                {el.text}
                            </NewsElement>
                        )
                    })
                }
            </div>
        </div>
    );
}