import React, {useState} from 'react';
import './taskchat.css';
import pdp from "../../assets/pdp.svg"
import {Link} from "react-router-dom";
import downloadIcon from "../../assets/downSec.png"
import downSendIcon from "../../assets/downIcon.svg";
import inputFile from "../../assets/inputFile.svg";
import sendIcon from "../../assets/sendIcon.svg";

export default function ChatApp() {
    let date = new Date();
    let year = date.getFullYear().toString().substr(-2);
    let dateTime = date.getDate() + "." + date.getMonth() + 1 + "." + year + " / " + date.getHours() + ":" + date.getMinutes()

    let [inputValue, setInputValue] = useState("");
    const [showValue, setShowValue] = useState("");

    const handleOnchange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSend = (e) => {
        e.preventDefault();
        setShowValue(inputValue);
        console.log(inputValue);

    }
    return (
        <div className="container-fluid">
            <div className="row chat-field">
                <div className="col-md-9 mt-auto">
                    <div className="received-massage p-3">
                        <div className="d-flex">
                            <Link to={pdp} target="_blank" download>
                                <img className="img-fluid" src={downloadIcon} alt=""/>
                            </Link>
                            <div className="ml-2">
                                <h6 className="mb-0">2-topshiriq.zip</h6>
                                <small>3.1 MB</small>
                            </div>
                        </div>
                        <p className="chat-massage mb-0">Men shu vazifani qildim. tekshitrib bera olasizmi?
                            Rahmat ustoz</p>
                    </div>
                    <small className="float-right">{dateTime}</small>
                </div>
                <div className="col-md-9 mt-auto my-4 ml-auto">
                    <div className="sent-massage p-3">
                        <div className="d-flex">
                            <Link className="downSend" to={pdp} target="_blank" download>
                                <img className="img-fluid mx-auto" src={downSendIcon} alt=""/>
                            </Link>
                            <div className="ml-2">
                                <h6 className="mb-0">2-topshiriq javobi.zip</h6>
                                <small>5.0 MB</small>
                            </div>
                        </div>
                        <p className="chat-massage mb-0">Mana bu faylda to’liq javob berilgan shuni ko’rishni sizga
                            maslaxat beraman</p>
                    </div>
                    <small className="float-right">{dateTime}</small>
                </div>
                <div className={`col-md-9 mt-auto my-4 ml-auto ${showValue !== "" ? null : "d-none"}`}>
                    <div className="sent-massage p-3">
                        <div className="d-flex">
                            <Link className="downSend" to={pdp} target="_blank" download>
                                <img className="img-fluid mx-auto" src={downSendIcon} alt=""/>
                            </Link>
                            <div className="ml-2">
                                <h6 className="mb-0">2-topshiriq javobi.zip</h6>
                                <small>5.0 MB</small>
                            </div>
                        </div>
                        <p className="chat-massage mb-0">{showValue}</p>
                    </div>
                    <small className="float-right">{dateTime}</small>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group border-top pt-2 flex-nowrap">
                        <div className="input-group-prepend mr-2">
                            <label htmlFor="fileInput">
                                <img src={inputFile} className="img-fluid" alt=""/>
                                <input id='fileInput' type="file" className="d-none"/>
                            </label>
                        </div>
                        <div className="w-100">
                            <input type="text" className="massage w-100 border-0"
                                   placeholder="Vazifa haqida nimadir yozing. . . "
                                   onChange={e => handleOnchange(e)}/>
                        </div>
                        <img onClick={handleSend} src={sendIcon} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}