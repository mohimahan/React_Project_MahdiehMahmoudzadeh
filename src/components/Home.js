import Header from "./Header";
import Navbar from "./Navbar";
import Search from "./Search";
import Footer from "./Footer";
import img1 from "../images/espinas_palace_about_bg-1.png";
import img2 from "../images/wellness_center.png";
import img6 from "../images/pool.jpg"
import "../styles/myStyle.css"



function Home() {

  return (
    <>
      <div style={{ position: "relative" }}>
        <Header />
        <Navbar />
      </div>

      <Search />

      <div dir="rtl" className="section1">

        <div className="section1-right">
          <div className="sub-title">هتل آریا</div>
          <h2>اوج احساسات</h2>
          <div className="heading">
            هتل آریا که با افتخار در شمال تهران ایستاده است، گوهری پنهان و بهشتی آرام، فضای زیبای یک هتل مجلل واقعی را تابیده است.
            به عنوان یکی از ممتازترین ساختمان‌های تهران با معماری هیجان‌انگیز، کاخ زیبا یک نقطه عطف شهری با ابهت است که دارای لابی باشکوه، فضاهای عمومی چشمگیر و اتاق‌خواب‌های بسیار راحت است.
            هتل آریا هتلی با استعداد در خدمات است.
            اقامت در کاخ، یک زمان خاص برای مهمانان ما است. کاخ دارای تمام امکانات و خدمات یک هتل پنج ستاره لوکس همراه با جاذبه و فضایی منحصر به فرد در خانه است.
          </div>
        </div>


        <div className="section1-left">

          <div>
            <img src={img1} alt="" />
          </div>

        </div>
      </div>

      <div className="section2">
        <div style={{ padding: "25px 0 20px" }}>
          <img src={img2} alt="" />
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <span className="section2-sub-title">حس آرامش و جوانی</span>
          <h2 className="section2-h2">در هتل آریا از سلامتی خود مراقبت کنید</h2>
        </div>

        <div>
          <p>
            مرکز سلامتی هتل آریا با در برداشتن فضای مجزا برای خانم ها و آقایان و بهره مندی از تیم حرفه ای، مجموعه ای کامل از خدمات سلامتی و زیبایی را ارائه می دهد تا تجربه ای بی نظیر و آرامش بخش داشته باشید
          </p>
        </div>

        <div className="section2-icons">

          <div>
            <div className="section2-icon-img img21" ></div>
            <div style={{ color: "white", fontSize: "18px", fontWeight: "700" }}>تناسب اندام</div>
          </div>

          <div>
            <div className="section2-icon-img img22" ></div>
            <div style={{ color: "white", fontSize: "18px", fontWeight: "700" }}>خدمات ماساژ</div>
          </div>

          <div>
            <div className="section2-icon-img img23" ></div>
            <div style={{ color: "white", fontSize: "18px", fontWeight: "700" }}>استخر و سونا</div>
          </div>

        </div>

      </div>

      <div className="section3">

        <div className="section3-right">
          <h2 >مرکز سلامتی هتل اسپیناس پالاس</h2>
          <div className="section3-sub-title">استخر و سونا</div>
          <div dir="rtl" className="heading">
            حس آرامش و جوانی را در مرکز سلامت لوکس ما، که در طبقه ی منفی سه قرار گرفته است، تجربه کنید.
            ساعاتی به دور از شلوغی و آلودگی شهر باشید.
            مرکز سلامتی هتل آریا با در برداشتن فضای اختصاصی مجزا برای خانم ها و آقایان و بهره مندی از تیم حرفه ای، مجموعه ای کامل از خدمات سلامتی و زیبایی را ارائه می دهد.
          </div>
        </div>


        <div className="section3-left">

          <div>
            <img src={img6} alt=""/>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
export default Home;