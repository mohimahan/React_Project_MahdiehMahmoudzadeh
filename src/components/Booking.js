import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RoomBox from "./RoomBox";
import user from "../images/icons/user-24.png";
import card from "../images/icons/card-48.png";
import email from "../images/icons/email-48.png";
import phone from "../images/icons/blackberry-24.png"
import { useGetRoomsQuery } from "../app/services/RoomsApi";
import { useCreatePersonReservedMutation, useGetPersonReservedQuery, useUpdatePersonReservedMutation } from "../app/services/PersonReservedApi";
import "../styles/myStyle.css";




function Booking() {

    const { data: rooms } = useGetRoomsQuery();
    const [createPersonReserved] = useCreatePersonReservedMutation();
    const [updatePersonReserved] = useUpdatePersonReservedMutation();
    const { data: person } = useGetPersonReservedQuery();


    const [bookingShow, setBookingShow] = useState("displayBlock");
    const [infoShow, setInfoShow] = useState("displayNone");
    const [personReservedRooms, setpersonReservedRooms] = useState([]);




    const params = useParams().id.split('&');
    const day1 = params[0].slice(0, 4) + "/" + params[0].slice(4, 6) + "/" + params[0].slice(6, 8);
    const day2 = params[1].slice(0, 4) + "/" + params[1].slice(4, 6) + "/" + params[1].slice(6, 8);




    function addToArray(item) {

        setpersonReservedRooms([...personReservedRooms, item]);

    }

    function removeToArray(item) {
        var temp = personReservedRooms;
        for (let i = 0; i < personReservedRooms.length; i++) {

            if (personReservedRooms[i][0] === item) {

                temp.splice(i, 1)
                setpersonReservedRooms([...temp])

            }
        }


    }

    function fun1() {
        setBookingShow("displayNone");
        setInfoShow("displayBlock");
       


    }

    function addPersonToList(event) {
        event.preventDefault();
        const form = event.target;
        const name = form['name'].value.trim();
        const lastName = form['lastName'].value.trim();
        const nationalId = form['nationalId'].value.trim();
        const phoneNumber = form['phoneNumber'].value.trim();
        const email = form['email'].value.trim();

        var flag = false;

        for (let i = 0; i < person.length; i++) {

            if (person[i].id === phoneNumber) {

                flag = true;
            }
        }

        if (!flag) {
            createPersonReserved([phoneNumber, name, lastName, nationalId, email,  personReservedRooms, day1, day2, params[2]]);
        } else {

            updatePersonReserved({ id: phoneNumber, info: [phoneNumber, name, lastName, nationalId, email, personReservedRooms, day1, day2, params[2]] });

        }

        event.target.reset();
        alert("اطلاعات شما ثبت شد. لطفا برای پرداخت و تایید نهایی به بخش رزرواسیون مراجعه نمایید.")

    }





    return (

        <>
            
            <div className={`booking ${bookingShow}`} >

                <div className="booking-date">
                    <span>از</span>
                    <span style={{ marginLeft: "10px" }}>{day1}</span>
                    <span>تا</span>
                    <span style={{ marginRight: "10px" }}>{day2}</span>
                </div>
                <div className="booking-line"></div>

                <div className="fluid">
                    <div dir="rtl" style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
                        <div className="p1" style={{ color: "green" }}>
                            <div className="num-step" style={{ backgroundColor: "green" }} >1</div>
                            انتخاب اتاق ها

                        </div>

                        <div className="p">
                            <div className="num-step" >2</div>
                            تکمیل اطلاعات

                        </div>

                        <div className="p">
                            <div className="num-step" >3</div>
                            تایید و پرداخت

                        </div>

                        <div className="p">
                            <div className="num-step" >4</div>
                            دریافت واچر

                        </div>

                    </div>
                </div>




                <div style={{ paddingBottom: "50px" }}>

                    <div className="what-to-do">اتاق(ها) را انتخاب نموده و در پایان دکمه ثبت اتاق(ها) را کلیک نمایید</div>

                    {
                        rooms && rooms.map((room) => (
                            <RoomBox roomImg={room.roomImg} id={room.id} type={room.type}
                                numberOfDay={params[2]} price={room.price}
                                bed={room.bed} addToArray={addToArray} removeToArray={removeToArray}
                            />
                        ))
                    }

                    <div className="bookking-end-button" onClick={fun1}>ثبت اتاق(ها)</div>


                </div>


            </div>


            <div className={`person-info ${infoShow}`} >

                <div className="fluid">
                    <div dir="rtl" style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
                        <div className="p">
                            <div className="num-step"  >1</div>
                            انتخاب اتاق ها

                        </div>

                        <div className="p1" >
                            <div className="num-step" style={{ backgroundColor: "green" }}>2</div>
                            تکمیل اطلاعات

                        </div>

                        <div className="p">
                            <div className="num-step" >3</div>
                            تایید و پرداخت

                        </div>

                        <div className="p">
                            <div className="num-step" >4</div>
                            دریافت واچر

                        </div>

                    </div>
                </div>


                <div className="info-person-container">

                    <div className="info-person-title">
                        اطلاعات شخص رزرو کننده
                    </div>

                    <div className="info-person-box">
                        <form dir="rtl" action="" className="info-person-form" onSubmit={(event) => addPersonToList(event)}>

                            <div className="info-person-input-container">

                                <div className="info-person-input-box" >
                                    <input type="text" className="info-person-input" id="name" required />
                                    <div className="info-person-img" >
                                        <img src={user} style={{ width: "16px", marginLeft: "3px", position: "relative", top: "3px" }} alt=""/>
                                        <span style={{ fontSize: "14px", marginLeft: "3px" }}>
                                            نام
                                        </span>
                                        <span style={{ fontSize: "12px", color: "rgb(194, 56, 56)" }}>
                                            (اجباری)

                                        </span>
                                    </div>
                                </div>

                                <div className="info-person-input-box" >
                                    <input type="text" className="info-person-input" id="lastName" required />
                                    <div className="info-person-img" >
                                        <img src={user} style={{ width: "16px", marginLeft: "3px", position: "relative", top: "3px" }} alt=""/>
                                        <span style={{ fontSize: "14px", marginLeft: "3px" }}>
                                            نام خانوادکی
                                        </span>
                                        <span style={{ fontSize: "12px", color: "rgb(194, 56, 56)" }}>
                                            (اجباری)

                                        </span>
                                    </div>
                                </div>


                                <div className="info-person-input-box" >
                                    <input type="text" className="info-person-input" id="nationalId" required />
                                    <div className="info-person-img" >
                                        <img src={card} style={{ width: "16px", marginLeft: "3px", position: "relative", top: "3px" }} alt=""/>
                                        <span style={{ fontSize: "14px", marginLeft: "3px" }}>
                                            کد ملی
                                        </span>
                                        <span style={{ fontSize: "12px", color: "rgb(194, 56, 56)" }}>
                                            (اجباری)

                                        </span>
                                    </div>
                                </div>

                                <div className="info-person-input-box" >
                                    <input type="text" className="info-person-input" id="phoneNumber" required />
                                    <div className="info-person-img" >
                                        <img src={phone} style={{ width: "16px", marginLeft: "3px", position: "relative", top: "3px" }} alt=""/>
                                        <span style={{ fontSize: "14px", marginLeft: "3px" }}>
                                            موبایل
                                        </span>
                                        <span style={{ fontSize: "12px", color: "rgb(194, 56, 56)" }}>
                                            (اجباری)

                                        </span>
                                    </div>
                                </div>

                                <div className="info-person-input-box" >
                                    <input type="text" className="info-person-input" id="email" />
                                    <div className="info-person-img" >
                                        <img src={email} style={{ width: "16px", marginLeft: "3px", position: "relative", top: "3px" }} alt=""/>
                                        <span style={{ fontSize: "14px", marginLeft: "3px" }}>
                                            ایمیل
                                        </span>
                                        <span style={{ fontSize: "12px" }}>
                                            (اختیاری)

                                        </span>
                                    </div>
                                </div>

                                <div className="yellow">
                                    لطفأ در وارد کردن شماره موبایل دقت فرمایید، زیرا ما از این طریق رزروتان را پیگیری خواهیم کرد.
                                </div>

                            </div>


                            <div className="description-age">
                                توضیحات لازم در انتخاب رده سنی
                            </div>

                            <div className="description-age-container">
                                <div className="adult">بزرگسال :  بالای 4 سال</div>
                                <div className="child">کودک : -</div>
                                <div className="baby">نوزاد : زیر 2 سال</div>

                            </div>

                            <div className="code">پس از پر کردن فرم، دکمه ثبت اطلاعات را کلیک نمایید و برای تایید و پرداخت  نهایی به بخش رزرواسیون مراجعه فرمایید</div>

                            <button type="submit" className="info-person-button">ثبت اطلاعات</button>

                           
                        </form>

                    </div>

                </div>


            </div>



        </>

    )
}

export default Booking;