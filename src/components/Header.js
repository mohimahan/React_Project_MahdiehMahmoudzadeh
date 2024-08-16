import React, { Component } from 'react';
import HomePage1 from '../images/HomePage1.jpg';
import HomePage2 from '../images/HomePage2.png';
import HomePage3 from '../images/HomePage3.jpg';
import '../styles/myStyle.css';



class Header extends Component {

    constructor() {
        super();
        this.index = 0;


        this.state = {
            img2: "opacity0",
            img1: "opacity0",
            img0: "opacity1",
            transition2: "header-transition",
            transition1: "header-transition",
            transition0: "header-transition"

        }
    }



    t = setInterval(() => {

        this.countUpHandler();
        clearInterval(this.t);

        this.t = setInterval(() => { this.countUpHandler(); }, 8000)
    }, 5000)
        



    countUpHandlerI = () => {
        clearInterval(this.t);
        this.countUpHandler()
        this.s = setTimeout(() => {
            this.t = setInterval(() => { this.countUpHandler() }, 8000)

        })
    }

    countDownHandlerP = () => {
        clearInterval(this.t);
        this.countDownHandler()
        this.s = setTimeout(() => {
            this.t = setInterval(() => { this.countUpHandler() }, 8000)

        })
    }

    countUpHandler = () => { 

        if (this.index === 0) {
            this.index = 1;
            this.setState(
                {
                    img2: "opacity0",
                    img1: "opacity1",
                    img0: "opacity0",
                    transition1: "header-transition",
                    transition0: "header-transition"

                }
            )

        } else if (this.index === 1) {
            this.index = 2;
            this.setState(
                {
                
                    img2: "opacity1",
                    img1: "opacity0",
                    img0: "opacity0",
                    transition1: "header-transition",
                    transition2: "header-transition"


                }
            )
        } else {
            this.index = 0;
            this.setState(
                {
                   
                    img2: "opacity0",
                    img1: "opacity0",
                    img0: "opacity1",
                    transition0: "header-transition",
                    transition2: "header-transition"


                }
            )
        }


    }

    countDownHandler = () => {

        if (this.index === 0) {
            this.index = 2;
            this.setState(
                {
                
                    img2: "opacity1",
                    img1: "opacity0",
                    img0: "opacity0",
                    transition0: "header-transition",
                    transition2: "header-transition"



                }
            )
        } else if (this.index === 1) {
            this.index = 0;
            this.setState(
                {
    
                    img2: "opacity0",
                    img1: "opacity0",
                    img0: "opacity1",
                    transition0: "header-transition",
                    transition1: "header-transition"


                }
            )
        } else {
            this.index = 1;
            this.setState(
                {
                
                    img2: "opacity0",
                    img1: "opacity1",
                    img0: "opacity0",
                    transition1: "header-transition",
                    transition2: "header-transition"


                }
            )

        }

    }


    render() {

        const {  img0, img1, img2, transition0, transition1, transition2 } = this.state;

        return (
            <div className='img-box'>
             
                <img src={HomePage2} className={`img ${img2} ${transition2}`} alt="" />
                <img src={HomePage3} className={`img ${img1} ${transition1}`} alt="" />
                <img src={HomePage1} className={`img ${img0} ${transition0}`} alt="" />


                <div className='btn-down' onClick={this.countDownHandlerP}>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </div>

                <div className='btn-up' onClick={this.countUpHandlerI}>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Header; 



