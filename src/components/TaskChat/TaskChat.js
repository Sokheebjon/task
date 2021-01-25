import React, {useState} from 'react';
import "./taskchat.css";
import ChatApp from "./ChatApp";
import ReactStars from "react-rating-stars-component";
import {taskData, userData, marks} from "./TaskChatData";
import {Link} from "react-router-dom";
import search from '../../assets/search.svg'
import menuSearch from '../../assets/menuSearch.svg';
import userKamola from "../../assets/userKamola.png";
import userArlene from "../../assets/userArlene.png";
import userBell from "../../assets/userBell.png"
import userAlbert from "../../assets/userAlbert.png";
import starActive from "../../assets/starActive.png";
import starMuted from "../../assets/starMuted.svg";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.svg";
import smile from "../../assets/smile.svg";
import massage from "../../assets/massage.svg"
import courseInfo from "../../assets/courseInfo.svg"
import taskHistory from "../../assets/TaskHistory.svg"
import tick from "../../assets/tick.svg"
import notRate from "../../assets/notSubmit.svg"
import pdp from "../../assets/pdp.svg"
import downBlack from "../../assets/downBlack.svg";
import showButton from "../../assets/show.svg"


export default function TaskChat() {
    const [id, setId] = useState(0)
    const [active, setActive] = useState(null)
    const [open, setOpen] = useState(false)
    const handleToggle = (i) => {
        setId(i);
    }
    const handleToggleChat = (i) => {
        setActive(i);
        setOpen(false)
    }
    return (
        <div className="container-fluid px-5">
            <div className="d-flex">
                <h2 className="header mb-5">Vazifalar va chat</h2>
                <button onClick={() => setOpen(!open)} className="btn ml-auto d-block d-sm-none">
                    <img width="25" className="img-fluid" src={showButton} alt=""/>
                </button>
            </div>
            <div className="row flex-row border">
                <div className={`col-sm-3 chat p-0 ${open === false ? "sideChat" : null}`}>
                    <div className="d-flex chatBar">
                        {taskData.map((data, i) => (
                            <div key={i}
                                 onClick={() => handleToggle(i)}
                                 className={`position-relative w-50 border-bottom p-3 
                          ${id === i ? "activeChat" : null}`}>
                                <span>{data.name}</span>
                                <div className="badge badge-danger task-badge rounded-circle">
                                    <span className="my-auto">{data.badge}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="chatBar d-flex p-2 w-100">
                        <img src={search} className="mr-2" alt=""/>
                        <input type="search" className="search-input" placeholder="Search"/>
                        <button className="btn ml-auto p-0">
                            <img src={menuSearch} alt=""/>
                        </button>
                    </div>
                    <ul className="list-unstyled mb-0 chatUsers d-flex flex-column">
                        {userData.map((data, i) => (
                            <li key={data.id} onClick={() => handleToggleChat(i)} style={{cursor: "pointer"}}
                                className={`px-2 py-2 border-bottom h-auto d-flex ${active === i ? "activeUserChat" : null}`}>
                                {data.img !== null ? <img className="avatar-image" src={data.img} alt=""/> :
                                    <div className="rounded-circle p-2 avatar text-white bg-success">
                                        <h5 className="my-auto">DS</h5>
                                    </div>}
                                <div className="ml-2 my-auto">
                                    <h6 className="m-0">{data.name}</h6>
                                    <p className="lastMassage">{data.lastMassage}</p>
                                </div>
                                <div className="ml-auto">
                                    <small className="d-block">{data.time}</small>
                                    <div
                                        className={`badge chat-badge rounded-circle ml-3 mt-4 ${active === i ? "badge-light text-success" : "badge-danger"} ${data.badge === null ? "bg-none" : ""}`}>
                                        <small className="font-weight-bold my-auto">
                                            {data.badge}
                                        </small>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-sm-6 position-relative inTablet p-0">
                    <div id="carousel" data-interval="false" className="carousel  slide">
                        <div className="d-flex w-100">
                            <div className="col-10 p-0">
                                <div className="carousel-inner w-100 d-flex">
                                    <div className="carousel-item active">
                                        {marks.map((value, index) => (
                                            <div key={index} className="w-100 text-center marks">
                                                <h2>{value.taskNum}</h2>
                                                <p>
                                                    <img src={value.activeStar === true ? starActive : starMuted}
                                                         alt=""/>
                                                    <span className="my-auto ml-1">{value.mark}</span>
                                                </p>
                                                <h5 className="text-uppercase">{value.pow}</h5>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="carousel-item">
                                        {marks.map((value, index) => (
                                            <div key={index} className="w-100 text-center marks">
                                                <h2>{value.taskNum}</h2>
                                                <p>
                                                    <img src={value.activeStar === true ? starActive : starMuted}
                                                         alt=""/>
                                                    <span className="my-auto ml-1">{value.mark}</span>
                                                </p>
                                                <h5 className="text-uppercase">{value.pow}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 p-0">
                                <div className="border-bottom carousel-controls">
                                    <a className="carousel-control-prev border-right" href="#carousel" role="button"
                                       data-slide="prev">
                                        <img src={arrowLeft} alt=""/>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel" role="button"
                                       data-slide="next">
                                        <img src={arrowRight} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex p-2 border-bottom">
                        <div className="col-6 border-right">
                            <h4 className="lessonName">Murakkab <br/> animatsiya yaratish</h4>
                        </div>
                        <div className="col-6 h-100">
                            <div className="d-flex">
                                <p>O’quvchi reytingi:</p>
                                <p className="ml-auto">53%</p>
                            </div>
                            <div className="d-flex">
                                <img className="img-fluid mr-2 img-progress" src={smile} alt=""/>
                                <div className="d-block w-100">
                                    <div className="progress clip-polygon">
                                        <div className="progress-bar bg-success clip-polygon-color" role="progressbar"
                                             style={{width: '53%'}}
                                             aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-2">
                        <ChatApp/>
                    </div>
                </div>
                <div className="col-sm-3 border-left d-lg-block d-none">
                    <div className="mt-3 text-center">
                        <img width="50" height="50" src={userKamola} alt=""/>
                        <h4 className="mt-2">Nurmatova Kamola</h4>
                        <ul className="list-unstyled listInfo mt-4 d-flex">
                            <li>
                                <div className="rounded-circle mx-auto userDetails">
                                    <img className="img-fluid" src={massage} alt=""/>
                                </div>
                                <small className="font-weight-light">Chatga o’tish</small>
                            </li>
                            <li>
                                <div className="rounded-circle mx-auto userDetails">
                                    <img className="img-fluid" src={courseInfo} alt=""/>
                                </div>
                                <small className="font-weight-light">Kurs info</small>
                            </li>
                            <li>
                                <div className="rounded-circle mx-auto userDetails">
                                    <img className="img-fluid" src={taskHistory} alt=""/>
                                </div>
                                <small className="font-weight-light">Task history</small>
                            </li>
                        </ul>
                        <ReactStars
                            count={5}
                            size={40}
                            color="rgba(216, 216, 216, 0.46)"
                            activeColor="#ffd700"
                            classNames="rateStars"
                        />
                        <div className="d-flex border-bottom pb-3">
                            <div className="pr-1 mx-auto">
                                <button className="btn btn-success rounded-0">
                                    <img src={tick} alt=""/>
                                </button>
                            </div>
                            <div className="pl-1 mx-auto">
                                <button className="btn btn-danger rounded-0">
                                    <img src={notRate} alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h5 className="text-left">2. Fill yordamida berilgan animatsiyani yarating</h5>
                            <div className="text-task text-left pl-2">
                                <small>Kiritilgan stringning berilgan indexdan boshlab qolgan qismini chop qiluvchi
                                    dastur
                                    yozing. Masalan: String: android,index=2 Natija: “droid”;</small>
                            </div>
                            <div className="downTask px-3">
                                <Link className="d-flex" to={pdp} target="_blank" download>
                                    <img src={downBlack} alt=""/>
                                    <p className="mt-3 text-question text-dark">2-topshiriq savol.jpg</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}