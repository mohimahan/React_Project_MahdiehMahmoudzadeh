import img1 from "../images/icons/instagram-icon-1.png";
import img2 from "../images/icons/linkdin-icon-1.png";
import img3 from "../images/icons/whatsapp-icon-1.png"

function Footer() {

    return (
        <>
            <div dir="rtl" className="footer-up">
                <div dir="rtl" className="footer-up-text">
                    برای دریافت اخبار و پیشنهادات ویژه ما در خبرنامه ما ثبت نام کنید.
                </div>
            </div>

            <div dir="rtl" className="footer-main">

                <div dir="rtl" className="footer-down">

                    <div className="footer-down-info info-box1" >
                        <div className="footer-down-info-up">در ارتباط باشید</div>
                        <div className="footer-down-info-down">ما را در شبکه های اجتماعی دنبال کنید</div>
                        <div className="footer-icons-box">
                            <img src={img3} />
                            <img src={img2} />
                            <img src={img1} />

                        </div>
                    </div>

                    <div className="footer-down-info info-box2" >
                        <div className="footer-down-info-up">واحد فروش، مارکتینگ و رزرواسیون</div>
                        <div className="footer-down-info-down">atena.ghorbanzadeh@ariyahotel.com</div>
                        <div className="footer-down-info-down">reservations.center@ariyahotel.com</div>
                        <div className="footer-down-info-down">sales@ariyahotel.com</div>


                    </div>

                    <div className="footer-down-info info-box3" >
                        <div className="footer-down-info-up">آدرس</div>
                        <div className="footer-down-info-down" style={{ width: "80%" }}>تهران، سعادت آباد، ميدان بهرود، خیابان عابدی، خيابان 33، هتل آریا</div>
                    </div>

                    <div className="footer-down-info info-box4" style={{ border: "none" }}>
                        <div className="footer-down-info-up">تماس با ما</div>
                        <div className="footer-down-info-down">
                            تلفن: 02175675
                        </div>
                        <div className="footer-down-info-down">نمابر: 02175675365</div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;