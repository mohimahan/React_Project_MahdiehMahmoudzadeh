import React, { Component } from 'react';
import Navbar from "./Navbar";
import restaurantImg1 from "../images/IMG_6061-scaled.jpg";
import restaurantImg2 from "../images/IMG_4889-scaled.jpg";
import restaurantImg3 from "../images/IMG_9145-scaled.jpg";
import Food from "./Food";
import Footer from './Footer';
import "../styles/myStyle.css"





class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.index = 1;
        this.s = "";

        this.state = {
            img3: "right",
            img2: "left",
            img1: "center",
            foods: [],
            foodsReserved: [],
            transition3: "transition",
            transition2: "transition",
            transition1: "transition"

        }
    }

    t = setInterval(() => {
        this.countDownHandler()
    }
        , 4000)



    moveToRight = () => {
        clearInterval(this.t);
        if (!this.s) {
            clearTimeout(this.s)
        }
        this.countUpHandler()
        this.s = setTimeout(() => {
            this.t = setInterval(() => { this.countDownHandler() }, 4000)

        })
    }


    moveToLeft = () => {
        clearInterval(this.t);
        if (!this.s) {
            clearTimeout(this.s)
        }
        this.countDownHandler()
        this.s = setTimeout(() => {
            this.t = setInterval(() => { this.countDownHandler() }, 4000)

        })
    }

    countUpHandler = () => {

        if (this.index === 1) {
            this.index = 2;
            this.setState(
                {
                    img3: "left",
                    img2: "center",
                    img1: "right",
                    transition2: "transition",
                    transition1: "transition"

                }
            )

        } else if (this.index === 2) {
            this.index = 3;
            this.setState(
                {
                    img3: "center",
                    img2: "right",
                    img1: "left",
                    transition1: "",
                    transition2: "transition"


                }
            )
        } else {
            this.index = 1;
            this.setState(
                {
                    img3: "right",
                    img2: "left",
                    img1: "center",
                    transition1: "transition",
                    transition2: ""


                }
            )
        }


    }

    countDownHandler = () => {

        if (this.index === 1) {
            this.index = 3;
            this.setState(
                {
                    img3: "center",
                    img2: "right",
                    img1: "left",
                    transition2: "",
                    transition1: "transition"

                }
            )
        } else if (this.index === 2) {
            this.index = 1;
            this.setState(
                {
                    img3: "right",
                    img2: "left",
                    img1: "center",
                    transition2: "transition",
                    transition1: "transition"


                }
            )
        } else {
            this.index = 2;
            this.setState(
                {
                    img3: "left",
                    img2: "center",
                    img1: "right",
                    transition1: "",
                    transition2: "transition"


                }
            )

        }

    }


    addToArray = (item) => {

        this.setState({
            foodsReserved: [...this.state.foodsReserved, item]
        })




    }

    removeToArray = (item) => {
        var temp = this.state.foodsReserved
        for (let i = 0; i < this.state.foodsReserved.length; i++) {
            if (this.state.foodsReserved[i][0] === item[0]) {
                temp.splice(i, 1)
                this.setState({
                    foodsReserved: temp
                })


            }
        }


    }


    addFoodsToList = (event) => {
        event.preventDefault();
        const form = event.target;
        const phone = form['phone'].value.trim();


        fetch(`http://localhost:3030/personReserved/${phone}`
            , {

                method: "PATCH",
                body: JSON.stringify({

                    foods: this.state.foodsReserved,

                }),
                Headers: {
                    "content-type": "application/json; charset=UTF-8"
                }

            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(".اطلاعاتی با این شماره موبایل یافت نشد")

            })
            .then((json) => alert("اطلاعات شما ثبت شد. لطفا برای پرداخت و تایید نهایی به بخش رزرواسیون مراجعه نمایید."))
            .catch((error) => { alert(error) })

        event.target.reset();
    }

    componentDidMount() {

        fetch("http://localhost:3030/restaurant")

            .then((response) => response.json())
            .then(json => {

                this.setState({
                    foods: json,

                })
            })


    }





    render() {


        const { img1, img2, img3, foods, transition1, transition2, transition3 } = this.state;

        return (

            <>


                <div style={{ position: "relative" }}>
                    <div className='img-box'>
                        <img src={restaurantImg3} className={`img ${img3} ${transition3}`} alt="" />
                        <img src={restaurantImg2} className={`img ${img2} ${transition2}`} alt="" />
                        <img src={restaurantImg1} className={`img ${img1} ${transition1}`} alt="" />

                        <div className='btn-down' onClick={this.moveToLeft}>
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </div>

                        <div className='btn-up' onClick={this.moveToRight}>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <Navbar />
                </div>


                <div className="restaurant-describetion">
                    <div>* امکانات هتل*</div>
                    <div>ما احساسات شما را با طعم های بی نظیر و غذاهای خلاقانه به اوج میرسانیم</div>
 
                </div>

                <div className='foods-container'>

                    {
                        foods.map((food) => (

                            <Food id={food.id} foodName={food.foodName} foodContent={food.foodContent} price={food.price}
                                foodImg={food.foodImg} addToArray={this.addToArray} removeToArray={this.removeToArray}
                            />
                        ))
                    }

                    <div className="restaurant-description">
                        پس از انتخاب غذا(ها)، شماره موبایلی که در بخش تکمیل اطلاعات وارد نموده اید را در کادر پایین وارد نمایید و با فشردن دکمه، غذاهای خود را ثبت نموده و برای تایید و پرداخت نهایی به بخش رزرواسیون مراجعه نمایید
                    </div>

                    <div className="restaurant-end">
                        <form action="" className="restaurant-form" onSubmit={(event) => this.addFoodsToList(event)}>
                            <button type="submit" className="restaurant-form-btn">ثبت غذا</button>
                            <div>
                                <input style={{ marginRight: "5px", border: "1px solid white", textAlign: "right", paddingRight: "10px", height: "29px", borderRadius: "5px", outline: "none" }} id="phone" required />
                                <span style={{ fontFamily: "shabnam" }}>: شماره موبایل</span>
                            </div>


                        </form>

                    </div>

                </div>

                <Footer />


            </>

        )
    }

}

export default Restaurant;