import React from "react";
import Navbar from "./Navbar";
import img from "../images/pres_(1)_27873.jpg";
import Room from "./Room";
import "../styles/myStyle.css";
import Footer from "./Footer"
import { useGetRoomsQuery } from "../app/services/RoomsApi";


function Rooms() {

  const { data: rooms } = useGetRoomsQuery();


  return (
    <>
      <div style={{position: "relative"}}>
        
        <div className="img-contain">
          <img src={img} className="room-img" alt=""/>
        </div>
        <Navbar />

      </div>
      
      <div className="room-describetion">
        <div>* هتل آریا *</div>
        <div>اوج احساسات</div>
        <p dir="rtl">

          هتل اسپیناس پالاس که با افتخار در شمال تهران ایستاده است،
          گوهری پنهان و بهشتی آرام، فضای زیبای یک هتل مجلل واقعی را تابیده است.
          کاخ اسپیناس بهترین و بهترین راحتی مدرن معاصر را با طعمی تماشایی برای گذشته ترکیب می کند. به عنوان یکی
          از ممتازترین ساختمان‌های تهران با معماری هیجان‌انگیز، کاخ زیبا یک نقطه عطف شهری با ابهت است که دارای لابی باشکوه، فضاهای عمومی چشمگیر و اتاق‌خواب‌های بسیار راحت است. هتل اسپیناس پالاس هتلی با استعداد در خدمات است. اقامت در کاخ همیشه یک زمان خاص برای مهمانان ما است.
          کاخ دارای تمام امکانات و خدمات یک هتل پنج ستاره لوکس همراه با جاذبه و فضایی منحصر به فرد در خانه است.

        </p>
      </div>

      <div className="room-info">

        <div className="room-title">
          <div className="line">
            <div></div>
          </div>
          <div>اتاق ها و سوییت ها</div>
          <div className="line">
            <div></div>
          </div>
        </div>

        <div className="all-rooms">
          {
            rooms && rooms.map((room) => ( 
                
              <Room  id={room.id} type={room.type} meterage={room.meterage} description={room.description} roomImg={room.roomImg}/>
            ))
          }

        </div>

        <Footer />

      </div>
    </>
  )
   

}
export default Rooms;