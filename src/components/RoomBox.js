import React, { useState } from "react";
import users from "../images/icons/users-30.png";
import cup from "../images/icons/coffee-24.png";
import roomBed from "../images/icons/bed-30.png"

function RoomBox(props) {

    const [select, setSelect] = useState("انتخاب شود");
    const [flag, setFlag] = useState(true);
    const [buttonclass, setButtonClass] = useState("room-box-button")
    const { id, type, roomImg, numberOfDay, price, bed, addToArray, removeToArray } = props;




    function changeButton() {
        if (flag) {
            setSelect("انتخاب شد");
            setFlag(false);
            setButtonClass("room-box-button-selected");
            addToArray([id, type, price, bed])
        } else {
            setSelect("انتخاب شود")
            setFlag(true);
            setButtonClass("room-box-button");
            removeToArray([id])

        }

    }

    return (

        <div className="booking-room-box" >
            <div className="room-box-name">
                <span style={{ display: "inline-block", marginRight: "10px", color: "rgb(194, 56, 56)" }}>(کد اتاق: {id})</span>
                <span>{type}</span>

            </div>

            <div dir="rtl" style={{ display: "flex" }}>
                <div className="room-box-img">
                    <img src={roomImg} />

                </div>

                <div className="room-box-price">


                    <div className="room-box-price-up">
                        <div style={{fontSize: "14px", color: "rgb(55, 54, 54)"}}>برای 1 شب</div>
                        <div style={{fontSize: "14px", color: "rgb(55, 54, 54)"}}>
                            {price}<span style={{ color: "#c9c2c2", marginRight: "10px" }}>تومان</span>
                        </div>
                    </div>


                    <div className="room-box-price-down">
                        <div  style={{fontSize: "14px", color: "rgb(55, 54, 54)"}}>برای {numberOfDay} شب</div>
                        <div style={{fontSize: "14px", color: "rgb(55, 54, 54)"}}>
                             {Number(price.split(",").join("") * numberOfDay).toLocaleString()}
                            <span style={{ color: "#c9c2c2", marginRight: "10px" }}>تومان</span>
                        </div>

                    </div>




                </div>

                <div className="room-box-reserve">
                    <button className={buttonclass} onClick={changeButton}>{select}</button>

                </div>


            </div>

            <div dir="rtl" style={{ display: "flex", borderTop: "1px solid #ccc", }}>
                <div style={{ width: "250px", padding: "10px", borderLeft: "1px solid #ccc", color: "#c9c2c2" }}>نوع سرویس اضافه: <span style={{ color: "black" }}>دارد</span></div>

                <div style={{ width: "379px", alignItems: "center", display: "flex", color: "#212529", padding: "0 10px", justifyContent: "space-around", boxSizing: "border-box" }}>
                    <div style={{ display: "flex", alignItems: "end" }}>
                        <img style={{ width: "24px" }} src={users} />
                        <span style={{ fontSize: "0.7rem", paddingRight: "5px" }}>{bed} نفر</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "end" }}>
                        <img style={{ width: "24px" }} src={cup} />
                        <span style={{ fontSize: "0.7rem", paddingRight: "5px" }}>صبحانه</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "end" }}>
                        <img style={{ width: "24px" }} src={roomBed} />
                        <span style={{ fontSize: "0.7rem", paddingRight: "5px" }}>1 نفر اضافه</span>
                    </div>

                </div>


            </div>

        </div>

    )
}

export default RoomBox;