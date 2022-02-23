import {News} from './News/News';
import {TopRightBlock} from "./TopRightBlock/TopRightBlock";
import {Currencies} from "./News/Currencies";
import {Search} from "./Search/Search";
import {Banner} from "./Banner/Banner";
import {BottomBlocks} from "./BottomBlocks/BottomBlocks";
import {BottomBlocksContent} from "./BottomBlocks/BottomBlocksContent";

export function Wrapper() {

    const attendance = [
        {
            strong: "Недвижимость",
            content: "- о сталинках",
        },
        {
            strong: "Маркет",
            content: "- люстры и светильники",
        },
        {
            strong: "Авто.ру",
            content: "- привод 4x4 до 500 000",
        },
    ]

    const map = [
        {
            content: "Расписания",
        },
    ]

    const tv = [
        {
            content: "02:00 ТНТ. Best",
            light: "ТНТ International",
        },
        {
            content: "02:15 Джинглики",
            light: "Карусель INT",
        },
        {
            content: "02:25 Наедине со всеми",
            light: "Первый",
        },
    ]

    const ether = [
        {
            image: "/assets/play-circle.png",
            alt: "Play",
            content: "Управление как искусство",
            light: "Успех",
        },
        {
            image: "/assets/play-circle.png",
            alt: "Play",
            content: "Ночь. Мир в это время",
            light: "earthTV",
        },
        {
            image: "/assets/play-circle.png",
            alt: "Play",
            content: "Андрей Возн...",
            light: "Совершенно секретно",
        },
    ]

    return (
        <div className="wrapper">
            <div className="top">
                <div className="top__left">
                    <News/>
                    <Currencies/>
                </div>
                <TopRightBlock
                    width={"100px"}
                    height={"100px"}
                    image={"https://www.mongodb.com/developer/images/qs-badges/qs-badge-java.png"}
                    alt={"Top right block image"}
                    href={"#"}
                    linkContent={"Работа над ошибками"}
                    spanContent={"Смотрите на Яндексе и запоминайте"}
                />
            </div>
            <Search/>
            <Banner
                href="https://www.kinopoisk.ru/"
                src="/assets/banner.png"
                alt="Форсаж"
            />
            <div className="bottom">
                <div className="bottom-left">
                    <BottomBlocks title="Погода">
                        <div className="left-block">
                            <img src="https://cdn-icons-png.flaticon.com/512/40/40191.png" alt="Погода"/>
                            <span>+17&deg;</span>
                        </div>
                        <div className="right-block">
                            <span>Утром +17,</span>
                            <span>днём +20</span>
                        </div>
                    </BottomBlocks>
                    <BottomBlocks title="Посещаемость">
                        {
                            attendance.map((el, idx) => {
                                return (
                                    <BottomBlocksContent
                                        strong={el.strong}
                                        content={el.content}
                                        key={idx}
                                    />
                                )
                            })
                        }
                    </BottomBlocks>
                </div>
                <div className="bottom-mid">
                    <BottomBlocks title="Карта Германии">
                        {
                            map.map((el, idx) => {
                                return (
                                    <BottomBlocksContent
                                        content={el.content}
                                        key={idx}
                                    />
                                )
                            })
                        }
                    </BottomBlocks>
                    <BottomBlocks
                        title="Телепрограмма"
                        link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
                        src={"/assets/play.svg"}
                        alt={"Эфир"}
                        value={"Эфир"}
                    >
                        {
                            tv.map((el, idx) => {
                                return (
                                    <BottomBlocksContent
                                        content={el.content}
                                        light={el.light}
                                        key={idx}
                                    />
                                )
                            })
                        }
                    </BottomBlocks>
                </div>
                <div className="bottom-right">
                    <BottomBlocks title="Эфир">
                        {
                            ether.map((el, idx) => {
                                return (
                                    <BottomBlocksContent
                                        image={el.image}
                                        alt={el.alt}
                                        content={el.content}
                                        light={el.light}
                                        key={idx}
                                    />
                                )
                            })
                        }
                    </BottomBlocks>
                </div>
            </div>
        </div>
    );
}