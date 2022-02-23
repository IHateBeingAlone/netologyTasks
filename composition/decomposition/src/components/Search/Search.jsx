import {SearchNavElement} from "./SearchNavElement";

/**
 * Компонент «Контейнер блока со строкой поиска».
 */

export function Search() {
    const links = [
        {
            text: "Видео",
            link: "https://yandex.ru/video/search/",
        },
        {
            text: "Картинки",
            link: "https://yandex.ru/images/",
        },
        {
            text: "Новости",
            link: "https://yandex.ru/news/",
        },
        {
            text: "Карты",
            link: "https://yandex.ru/maps/",
        },
        {
            text: "Маркет",
            link: "https://market.yandex.ru/",
        },
        {
            text: "Переводчик",
            link: "https://translate.yandex.ru/",
        },
        {
            text: "Программа",
            link: "https://tv.yandex.ru/",
        },
    ]
    return (
        <div className="search">
            <div className="search-top">
                {
                    links.map((el, idx) => {
                        return (
                            <SearchNavElement link={el.link} key={idx} text={el.text}/>
                        )
                    })
                }
                <a href="#">ещё</a>
            </div>
            <form className="search-middle">
                <a href="https://yandex.ru/" className="search-title"><img src="data:image/svg+xml;charset=utf8,%3Csvg width='144' height='103' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M125.427 66.316c2.326 0 3.975-.423 5.201-1.311v-4.103c-1.268.889-2.791 1.438-4.905 1.438-3.595 0-5.075-2.79-5.075-7.19 0-4.609 1.818-6.977 5.117-6.977 1.945 0 3.848.677 4.863 1.311v-4.271c-1.057-.592-2.918-1.015-5.413-1.015-6.428 0-9.769 4.61-9.769 11.08 0 7.105 3.256 11.038 9.981 11.038zm-31.464-1.861v-4.102c-1.565 1.057-4.187 1.987-6.64 1.987-3.68 0-5.075-1.734-5.286-5.286h12.137V54.39c0-7.401-3.256-10.192-8.289-10.192-6.132 0-9.05 4.694-9.05 11.122 0 7.4 3.637 10.996 10.065 10.996 3.214 0 5.582-.846 7.063-1.861zM47.866 44.62v8.415h-6.724v-8.415H36.11v21.272h5.032v-8.881h6.724v8.88H52.9V44.622h-5.033zM75.61 61.917h-2.242V44.621H58.693v1.818c0 5.202-.339 11.926-2.115 15.478h-1.565v8.839h4.652v-4.863h11.292v4.863h4.652v-8.839zm34.424 3.976h5.709l-8.077-11.461 7.104-9.811h-5.074l-7.105 9.811v-9.811h-5.033v21.272h5.033V55.447l7.443 10.446zm-24.232-17.72c2.495 0 3.256 2.072 3.256 4.736v.423h-7.02c.127-3.383 1.353-5.159 3.764-5.159zM68.335 61.917H61.23c1.396-3.214 1.776-9.008 1.776-12.687v-.634h5.329v13.321z' fill='%23000'/%3E%3Cpath d='M31.88 65.892h-5.116V40.476H24.48c-4.187 0-6.386 2.114-6.386 5.244 0 3.552 1.523 5.202 4.652 7.316l2.58 1.734-7.443 11.122h-5.54l6.682-9.938c-3.849-2.749-6.006-5.413-6.006-9.938 0-5.667 3.933-9.515 11.419-9.515h7.443v29.391z' fill='%23FC3F1D'/%3E%3C/svg%3E" alt="Логотип"/></a>
                <input type="text" name="text" className="search-input" placeholder="Найдётся всё"/>
                <input type="submit" name="submit" className="search-submit" value="Найти"/>
            </form>
            <div className="search-bottom">
                <span className="text">Найдётся всё. Например, </span><span className="text-gray">фаза луны сегодня</span>
            </div>
        </div>
    );
}