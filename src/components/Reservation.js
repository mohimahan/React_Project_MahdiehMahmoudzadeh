
import { useState } from "react";
import img from "../images/icons/multiply-26.png";
import { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';



function Reservation() {

    const [data, setData] = useState("");
    const [temp1, setTemp1] = useState("");
    const [flag, setFlag] = useState(true);
    const [sumRoomPrice, setSumRoomPrice] = useState(0);
    const [sumFoodPrice, setSumFoodPrice] = useState(0);
    const [managerRoomShow, setManagerRoomShow] = useState("displayBlock");
    const [voucherShow, setVoucherShow] = useState("displayNone");





    const getPhoneNumber = (event) => {

        var myData = 0;
        var t = 0;
        var t2 = 0;
        event.preventDefault();
        const form = event.target;
        const phone = form['phone'].value.trim();
        fetch(`http://localhost:3030/personReserved/${phone}`)

            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(".اطلاعاتی با این شماره موبایل یافت نشد")

            })
            .then((json) => myData = json)
            .then(() => {
                myData.personReservedRooms.forEach(element => {
                    t = Number(element[2].split(",").join("")) * Number(myData.numberOfDay) + t;

                });

                myData.foods.forEach(element => {
                    t2 = Number(element[4].split(",").join("") * element[1]) + t2;
                })

                setData(myData);
                setSumRoomPrice(t);
                setSumFoodPrice(t2);

            })
            .catch((error) => { alert(error) })


        setTemp1(phone);



    }

    function deleteRoom(item) {


        for (let i = 0; i < data.personReservedRooms.length; i++) {
            if (data.personReservedRooms[i][1] === item[1]) {
                var temp3 = data.personReservedRooms[i][2];
                setSumRoomPrice(sumRoomPrice - Number(temp3.split(",").join("")) * Number(data.numberOfDay))
                data.personReservedRooms.splice(i, 1);


            }
        }

        fetch(`http://localhost:3030/personReserved/${temp1}`
            , {

                method: "PATCH",
                body: JSON.stringify({

                    personReservedRooms: data.personReservedRooms,

                }),
                Headers: {
                    "content-type": "application/json; charset=UTF-8"
                }

            }
        )


        setFlag(!flag)

    }



    function deleteFood(item) {


        for (let i = 0; i < data.foods.length; i++) {

            if (data.foods[i][0] === item[0]) {

                setSumFoodPrice(sumFoodPrice - Number(data.foods[i][4].split(",").join("")) * data.foods[i][1])

                data.foods.splice(i, 1);

                

            }
        }

        fetch(`http://localhost:3030/personReserved/${temp1}`
            , {

                method: "PATCH",
                body: JSON.stringify({

                    foods: data.foods,

                }),
                Headers: {
                    "content-type": "application/json; charset=UTF-8"
                }

            }
        )

        setFlag(!flag)

    }

    function fun1() {
        setManagerRoomShow("displayNone");
        setVoucherShow("displayBlock")


    }

    return (

        <>

            <div className={managerRoomShow}>

                <div className="fluid" style={{ fontFamily: "shabnam", backgroundColor: "#f2f2f2" }}>
                    <div dir="rtl" style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
                        <div className="p">
                            <div className="num-step"  >1</div>
                            انتخاب اتاق ها

                        </div>

                        <div className="p" >
                            <div className="num-step" >2</div>
                            تکمیل اطلاعات

                        </div>

                        <div className="p1">
                            <div className="num-step" style={{ backgroundColor: "green" }}>3</div>
                            تایید و پرداخت

                        </div>

                        <div className="p">
                            <div className="num-step" >4</div>
                            دریافت واچر

                        </div>

                    </div>
                </div>



                <div className="reservation">

                    <div className="reservation-main-box">

                        <div className="reservation-up">
                            تایید و پرداخت نهایی
                        </div>

                        <form className="reservation-form" onSubmit={(event) => getPhoneNumber(event)}>

                            <div className="reservation-description">شماره موبایلی که در بخش تکمیل اطلاعات وارد نموده اید را در کادر پایین وارد نمایید</div>
                            <div>
                                <button className="reservation-btn">کلیک نمایید</button>
                                <input type="text" className="reservation-input" id="phone" required />

                            </div>

                        </form>

                        <div className="reservation-room-title">
                            اتاق های انتخاب شده
                        </div>

                        <table dir="rtl" className="table-detail">
                            <tr>
                                <th>
                                </th>
                                <th>نوع اتاق</th>
                                <th>تاریخ ورود</th>
                                <th>کد</th>
                                <th>شب</th>
                                <th>قیمت</th>
                                <th>قیمت کل</th>
                            </tr>

                            {data && data.personReservedRooms.map((item) => (
                                <tr>
                                    <td>
                                        <div style={{ display: "flex", alignItems: "center" }} onClick={() => deleteRoom(item)}>
                                            <img src={img} style={{ width: "16px", marginRight: "10px" }} alt=""/>
                                        </div>
                                    </td>
                                    <td style={{ width: "200px" }}>{item[1]}</td>
                                    <td>{data.chekInTime}</td>
                                    <td>{item[0]}</td>
                                    <td>{data.numberOfDay}</td>
                                    <td>{item[2]}</td>
                                    <td>{(Number(item[2].split(",").join("")) * Number(data.numberOfDay)).toLocaleString()}</td>
                                </tr>

                            ))

                            }


                            <tr >
                                <td style={{ backgroundColor: "#e0d9d9" }}></td>
                                <td colSpan="" style={{ backgroundColor: "#e0d9d9" }}>
                                    جمع
                                </td>

                                <td colSpan="4" style={{ backgroundColor: "#e0d9d9" }}></td>

                                <td style={{ backgroundColor: "#e0d9d9" }}>
                                    {sumRoomPrice.toLocaleString()}
                                </td>
                                
                            </tr>
                        </table>

                        <div className="reservation-food-title">
                            غذاهای انتخاب شده
                        </div>

                        <table dir="rtl" className="table-detail">
                            <tr>
                                <th></th>
                                <th>نام</th>
                                <th>کد غذا</th>
                                <th>تعداد</th>
                                <th>قیمت</th>
                                <th>قیمت کل</th>

                              
                            </tr>

                            {data && data.foods.map((item) => (
                                <tr>
                                    <td>
                                        <div style={{ display: "flex", alignItems: "center" }} onClick={() => deleteFood(item)}>
                                            <img src={img} style={{ width: "16px", marginRight: "10px" }} alt=""/>
                                        </div>
                                    </td>
                                    <td style={{ width: "200px" }}>{item[0]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[4]}</td>
                                    <td style={{ width: "107px" }}>{(Number(item[4].split(",").join("")) * item[1]).toLocaleString()}</td>
                                  
                                </tr>

                            ))

                            }

                            <tr >
                                <td style={{ backgroundColor: "#e0d9d9" }}></td>
                                <td colSpan="" style={{ backgroundColor: "#e0d9d9" }}>
                                    جمع
                                </td>

                                <td colSpan="3" style={{ backgroundColor: "#e0d9d9" }}></td>
                        
                                <td style={{ backgroundColor: "#e0d9d9" }}>
                                    {sumFoodPrice.toLocaleString()}
                                </td>
                                <td colSpan="3" style={{ backgroundColor: "#e0d9d9" }}></td>
                            </tr>

                        </table>

                        <div className="reservation-bill-title">
                            صورتحساب
                        </div>

                        <table dir="rtl" className="table-detail">
                            <tr>
                              
                                <td style={{ width: "160px" }}>صورتحساب اتاق</td>
                                <td ></td>
                                <td style={{ width: "107px" }}>{sumRoomPrice.toLocaleString()}</td>
                            </tr>
                            <tr>
                               
                                <td style={{ width: "160px" }}>صورتحساب غذا</td>
                                <td ></td>
                                <td style={{ width: "107px" }}>{sumFoodPrice.toLocaleString()}</td>
                            </tr>
                            <tr style={{ backgroundColor: "#e0d9d9" }}>
                               
                                <td style={{ width: "160px" }}>
                                    صورتحساب کل
                                </td>
                                <td></td>
                              
                                <td style={{ backgroundColor: "#f8d648", color: "#4d4646", width: "107px" }}>{(sumRoomPrice + sumFoodPrice).toLocaleString()}</td>
                            </tr>

                        </table>

                        <button className="reservation-bill-btn" onClick={() => { alert("پرداخت و تایید نهایی انجام شد. برای دریافت واچرِ، روی دکمه دریافت واچر کلیک نمایید") }}>پرداخت و تایید</button>
                        <button className="reservation-voucher-btn" onClick={fun1}>دریافت واچر</button>

                    </div>

                </div>
            </div>


            <div className={`voucher ${voucherShow}`}>

                <div className="fluid">
                    <div dir="rtl" style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
                        <div className="p">
                            <div className="num-step"  >1</div>
                            انتخاب اتاق ها

                        </div>

                        <div className="p" >
                            <div className="num-step" >2</div>
                            تکمیل اطلاعات

                        </div>

                        <div className="p">
                            <div className="num-step" >3</div>
                            تایید و پرداخت

                        </div>

                        <div className="p1">
                            <div className="num-step" style={{ backgroundColor: "green" }}>4</div>
                            دریافت واچر

                        </div>

                    </div>
                </div>

                <div className="voucher-container" >

                    <div className="voucher-main">

                        <div className="voucher-title">
                            <div style={{ position: "absolute", top: "32px", fontSize: "14px", color: "#807676" }}>تاریخ خرید : {new DateObject({ calendar: persian }).toString()}</div>
                            (Voucher)واچر
                        </div>


                        <div style={{ marginBottom: "30px" }}>
                            <div className="voucher-hotel-detail">
                                <div className="hotel-detail-title">مشخصات هتل</div>

                            </div>

                            <table dir="rtl" className="table-detail">
                                <tr>
                                    <th>نام هتل</th>
                                    <th>درجه هتل</th>
                                    <th>تلفن</th>
                                </tr>

                                <tr>
                                    <td>آریا</td>
                                    <td>5 ستاره</td>
                                    <td>02175675</td>
                                </tr>

                                <tr >
                                    <td colSpan="3" style={{ fontSize: "14px", backgroundColor: "#e0d9d9" }}>
                                        تهران، سعادت آباد، ميدان بهرود، خیابان عابدی، خيابان 33، هتل آریا
                                    </td>
                                </tr>
                            </table>

                        </div>


                        <div style={{ marginBottom: "30px" }}>
                            <div className="voucher-hotel-detail">
                                <div className="hotel-detail-title">مشخصات رزرو</div>

                            </div>

                            <table dir="rtl" className="table-detail">
                                <tr>
                                    <th>تاریخ ورود</th>
                                    <th>تاریخ خروج</th>
                                    <th>تعداد شب اقامت</th>
                                </tr>

                                <tr>
                                    <td>{data && data.chekInTime}</td>
                                    <td>{data && data.chekOutTime}</td>
                                    <td>{data.numberOfDay}</td>
                                </tr>

                            </table>
                        </div>

                        <div style={{ marginBottom: "30px" }}>
                            <div className="voucher-hotel-detail">
                                <div className="hotel-detail-title">لیست اتاق ها</div>

                            </div>

                            <table dir="rtl" className="table-detail">
                                <tr>
                                    <th>ظرفیت اتاق</th>
                                    <th>مشخصات اتاق</th>
                                    <th>تعداد اتاق</th>
                                </tr>

                                {
                                    data && data.personReservedRooms.map((item) => (
                                        <tr>
                                            <td>{item[3]}</td>
                                            <td>{item[1]}</td>
                                            <td>1</td>
                                        </tr>

                                    ))
                                }



                            </table>
                        </div>


                        <div style={{ marginBottom: "30px" }}>
                            <div className="voucher-hotel-detail">
                                <div className="hotel-detail-title">لیست غذاها</div>

                            </div>

                            <table dir="rtl" className="table-detail">
                                <tr>
                                    <th>نام غذا</th>

                                    <th>کد  غذا</th>
                                    <th>تعداد غذا</th>
                                </tr>

                                {
                                    data && data.foods.map((item) => (
                                        <tr>
                                            <td>{item[0]}</td>
                                            <td>{item[2]}</td>
                                            <td>{item[1]}</td>
                                        </tr>

                                    ))
                                }


                            </table>
                        </div>


                        <div style={{ marginBottom: "30px" }}>
                            <div className="voucher-hotel-detail">
                                <div className="hotel-detail-title">مشخصات سرپرست</div>

                            </div>

                            <table dir="rtl" className="table-detail">
                                <tr>
                                    <th>نام سرپرست</th>
                                    <th>شماره موبایل</th>
                                    <th>کد ملی</th>
                                </tr>

                                <tr>
                                    <td>{data && data.name + " " + data.lastName}</td>
                                    <td>{data && data.id}</td>
                                    <td>{data && data.nationalId}</td>
                                </tr>

                            </table>
                        </div>


                    </div>



                </div>
            </div>
        </>
    )
}
export default Reservation