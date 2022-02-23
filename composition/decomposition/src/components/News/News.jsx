import {NewsSection} from "./NewsSection";
import {useState} from 'react';

/**
 * Компонент «Новости». Контейнер секций новостей и их заголовков.
 */

export function News() {

    const smi = [
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/26056/1047-1478692902215-square/logo-square",
            text: "Самолет с бывшим президентом Украины Порошенко на борту приземлился в Киеве"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/26056/1047-1478692902215-square/logo-square",
            text: "IHME: пик заболеваемости омикрон-штаммом коронавируса может произойти в России 22 января"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/117671/1027-1530099491421-square/logo-square",
            text: "Экс-банкир Аблязов пообещал продолжить организацию протестов в Казахстане"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
            text: "МВД Австралии разрешило въезд привитым двумя дозами российской вакцины «Спутник V»"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/41096/1040-1640775230584-square/logo-square",
            text: "Гинцбург оценил вероятность омикрона стать «живой вакциной»"
        },
    ]

    const omsk = [
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/50744/7833-1478693078843-square/logo-square",
            text: "Олег Заремба назначен вице-губернатором Омской области"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/28627/254159013-1539083884015-square/logo-square",
            text: "В Омске у депутата Горностаевой на 90 миллионов рублей арестовали имущество"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/117671/3130-1481105481451-square/logo-square",
            text: "Заседание оперштаба по борьбе с коронавирусом в Омской области назначено на четверг"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/50744/12354-1548730718671-square/logo-square",
            text: "В Омской области выявили первые случаи заражения штаммом «омикрон»"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/117671/3130-1481105481451-square/logo-square",
            text: "«Омский аэропорт» дал в долг губернскому телеканалу 15 млн руб. под залог ДК «Химик»"
        },
    ]

    const interesting = [
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/50744/1703-1555674648686-square/logo-square",
            text: "Авторы Dying Light 2 обещают поддерживать игру в течение как минимум 5 лет"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/50744/1703-1555674648686-square/logo-square",
            text: "CD Projekt RED обновила сборку Cyberpunk 2077 в Steam"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/50744/1703-1555674648686-square/logo-square",
            text: "Пиковый онлайн God of War в Steam превзошёл уровень Horizon Zero Dawn"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/50744/1703-1555674648686-square/logo-square",
            text: "Слух: GTA V для PS5 и Xbox Series могут отложить до конца весны"
        },
        {
            image: "https://avatars.mds.yandex.net/get-ynews-logo/135513/2220-1478692942720-square/logo-square",
            text: "Starfield создают уже 6 лет. Это дольше, чем разрабатывали «Скайрим»"
        },
    ]

    const sections = [
        {
            active: true,
            newsArray: smi,
            title: "Сейчас в СМИ",
        },
        {
            active: false,
            newsArray: omsk,
            title: "в Омске",
        },
        {
            active: false,
            newsArray: interesting,
            title: "Интересное",
        },
    ]

    const [state, setState] = useState(sections);
    const handleExpandedChange = (e) => {

        state.map((el, idx) => {
            Number(e.target.dataset.index) === idx ? el.active = true : el.active = false
        })
        setState( (state) => { return [...state] } )
    }

    return (
        <div className="news">
            {
                state.map((el, idx) => {
                    if (el.active === true) {
                        return (
                            <NewsSection
                                newsArray={el.newsArray}
                                clicked={handleExpandedChange}
                                sections={state}
                                key={idx}
                            />
                        )
                    }
                })
            }
        </div>
    );
}