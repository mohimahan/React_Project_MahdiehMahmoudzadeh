import React, { useEffect, useState, useRef } from 'react';
import { Calendar, DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import { Link } from "react-router-dom";
import { round, floor } from 'mathjs';
import '../styles/myStyle.css';





function Search() {

    const [value1, setValue1] = useState(new DateObject({ calendar: persian }));
    const [value2, setValue2] = useState(new DateObject({ calendar: persian }).add(1, "day"));
    const [class1, setClass1] = useState("display1");
    const [class2, setClass2] = useState("display1");
    const inputRef1 = useRef();
    const inputRef2 = useRef();




    var { year: year1, month: month1, day: day1 } = value1;
    var { year: year2, month: month2, day: day2 } = value2;



    if (floor(day1 / 10) == 0) {
        day1 = "0" + day1
    }

    if (floor(month1 / 10) == 0) {
        month1 = "0" + month1
    }


    if (floor(day2 / 10) == 0) {
        day2 = "0" + day2
    }

    if (floor(month2 / 10) == 0) {

        month2 = "0" + month2;

    }



    useEffect(() => {

        setClass1("display1");
        setClass2("display1")

    }, []);




    function checkIn() {
        if (class1 == "display1") {
            
            setClass1("display2");
            setClass2("display1");
            setValue2(new DateObject({date: inputRef2.current.value, calendar: persian }))
            
            

        } else {

            setClass1("display1");
            setValue1(new DateObject({date: inputRef1.current.value, calendar: persian }));
            

        }
    }



    function checkOut() {

        if (class2 == "display1") {
 
            setClass2("display2");
            setClass1("display1");
            setValue1(new DateObject({date: inputRef1.current.value, calendar: persian }))
          

        } else {
            setClass2("display1");
            setValue2(new DateObject({date: inputRef2.current.value, calendar: persian }));
            
        }
    }


    const def = value2 - value1;
    const dayNumber = round(def / (1000 * 3600 * 24));

    return (

        <div dir="rtl" className="search">
            <form className="search-form ">
                <ul>

                    <li className="check-in" onClick={checkIn} >
                        <span>تاریخ ورود</span>
                        <div>
                            <input value={value1.format()} ref={inputRef1}></input>
                        </div>
                    </li>

                    <li className="check-out" onClick={checkOut}>
                        <span>تاریخ خروج</span>
                        <div>
                            <input value={value2.format()}  ref={inputRef2}></input>
                        </div>
                    </li>

                </ul>
                <Link className='search-link' to={`booking/${year1}${month1}${day1}&${year2}${month2}${day2}&${dayNumber}`}>بررسی موجود بودن اتاق</Link>

                <div className={`calendar ${class1}`} >
                    <Calendar calendar={persian} value={value1} onChange={setValue1} />

                </div>
                <div className={`calendar ${class2}`} >
                    <Calendar calendar={persian} value={value2} onChange={setValue2} />
                </div>


            </form>
        </div>
    )
}

export default Search;
