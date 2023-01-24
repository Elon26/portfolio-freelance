import React from "react";

const Work = ({ name, img, stack, repository, deploy, video, description }) => {
    return (
        <div className="works__item">
            <div className={"works__card " + (description.length > 500 ? "big" : "small")}>
                <div className="works__front">
                    <div className="works__screen">
                        <img src={img} alt="Скрин приложения" />
                    </div>
                    <div className="works__name">{name}</div>
                </div>
                <div className="works__back">
                    <div className="works__info">
                        <div className="works__infoItem">
                            <b>Название проекта: </b>{name}
                        </div>
                        <div className="works__infoItem">
                            <b>Стек технологий: </b>{stack}
                        </div>
                        <div className="works__infoItem">
                            <b>Описание проекта: </b>{description}
                        </div>
                        <div className="works__infoItem works__infoItem_big">
                            <a href={deploy}
                                target="blank"><b>Посмотреть проект</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Work;