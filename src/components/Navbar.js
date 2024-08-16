import star from '../images/star-60.png';
import { Link } from "react-router-dom";
import '../styles/myStyle.css';



function Navbar() {

  return (

    <div className="navbar-container" >
      <div className="up">
        <ul className="phone-email">
          <li className="phone">
            تلفن تماس
            <br />
            02175675
          </li>
          <li className="email">
            آدرس ایمیل
            <br />
            reservations@ariyahotel.com
          </li>
        </ul>

        <div className="hotel-title">

          <div >Hotel</div>
          <div className="hotel-name">Ariya</div>
          <div className="star-icon">
            <img src={star} className="star-img" alt="" />
            <img src={star} className="star-img" alt="" />
            <img src={star} className="star-img" alt="" />
            <img src={star} className="star-img" alt="" />
            <img src={star} className="star-img" alt="" />
          </div>

        </div>
      </div>

      <nav className="nav">
        <ul dir="rtl">
          <li><Link className='link' to=".." relative='route'>صفحه اصلی</Link></li>
          <li><Link className='link' to="../rooms" relative='route' >اتاق ها و سوییت ها</Link></li>
          <li><Link className='link' to="../restaurant" relative='route'>رستوران</Link></li>
          <li><Link className='link' to="../reservation" relative='route'>رزرواسیون</Link></li>
          <li><Link className='link' to="../manager">مدیریت هتل</Link></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

