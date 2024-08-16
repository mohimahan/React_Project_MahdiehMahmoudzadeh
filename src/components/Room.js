import { useState } from "react";
import "../styles/myStyle.css";



function Room(props) {

  const { id, type, meterage, description, roomImg } = props;
  const [over, setOver] = useState("");



  const changeClassOver = () => {
    setOver("room-img-hover")
  }

  const changeClassOut = () => {
    setOver("room-img-out")
  }

  

  return (
    <div className="room" onMouseOver={changeClassOver} onMouseOut={changeClassOut}>
      <div className="image-contain">
        <img src={roomImg} className={`${over}`} />
      </div>

      <div className="room-information">

        <div className="room-info-title">{type} </div>
        <div style={{textAlign: "right", marginTop: "10px", color: "rgb(194, 56, 56)"}}>کد {id}</div>

        <div className="meterage">
          {meterage}
        </div>

        <p dir="rtl">
          {description}
        </p>

      </div>

    </div>
  )
}

export default Room;