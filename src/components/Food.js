import React, { useState, Component } from "react";
import plusIcon from "../images/icons/plus-24.png";
import minusIcon from "../images/icons/minus-32.png"






class Food extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select: "افزودن به یادداشت",
            flag: true,
            buttonclass: "food-box-button",
            num: 1


        };

    }




    countUp = () => {
        this.setState({
            num: this.state.num + 1
        })
    }

    countDown = () => {

        if (this.state.num > 1) {
            this.setState({
                num: this.state.num - 1
            }

            )
        }

    }

    changeButton = () => {

        if (this.state.flag) {
            this.setState({
                select: "حذف از یادداشت",
                flag: false,
                buttonclass: "food-box-button-selected",


            })

            this.props.addToArray([
                this.props.foodName,
                this.state.num,
                this.props.id,
                this.props.foodContent,
                this.props.price
            ])
                
        } else {
            
            this.setState({
                select: "افزودن به یادداشت",
                flag: true,
                buttonclass: "food-box-button",


            })

            this.props.removeToArray([this.props.foodName])

        }

    }

    render() {
        const { id, foodName, foodContent, foodImg, price, addToArray, removeToArray } = this.props;
        return (
            <div className="food-box">

                <div dir="rtl" className="food-box-up">

                    <div className="food-img-box">
                        <img src={foodImg} />
                    </div>

                    <div style={{ margin: "0 20px" }}>
                        <div className="food-box-name">
                            {foodName}<span style={{ color: "rgb(194, 56, 56)", marginRight: "5px" }}>(کد {id}) </span>
                        </div>
                        <div className="food-box-detail">{foodContent.join(", ")}</div>
                        <div className="food-price-number">
                            <div style={{ padding: "0 3px", border: "1px solid #696969", borderRadius: "5px", display: "flex", marginLeft: "10px" }}>
                                <div onClick={this.countUp}>
                                    <img style={{ width: "20px", paddingTop: "3px" }} src={plusIcon} />
                                </div>
                                <div style={{ margin: "0 5px", paddingTop: "3px", color: "#696969" }}>{this.state.num}</div>
                                <div onClick={this.countDown}>
                                    <img style={{ width: "20px", paddingTop: "3px" }} src={minusIcon} />
                                </div>
                            </div>

                            <div style={{ padding: " 4px 10px", backgroundColor: "#ffcba4", border: "1px solid #fca969", borderRadius: "5px" }}>{Number(price.split(",").join("") * this.state.num).toLocaleString()}</div>
                        </div>
                    </div>

                </div>

                <div className="food-box-down">
                    <button className={this.state.buttonclass} onClick={this.changeButton}>
                        {this.state.select}
                    </button>
                </div>
            </div>
        )
    }
}

export default Food;