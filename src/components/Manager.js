
import { useGetRoomsQuery, useDeleteRoomMutation, useCreateRoomMutation } from "../app/services/RoomsApi";
import { useDeleteFoodMutation, useCreateFoodMutation, useGetRestaurantQuery} from "../app/services/RestaurantApi";
import {useGetPersonReservedQuery, useDeletePersonReservedMutation} from "../app/services/PersonReservedApi";
import "../styles/myStyle.css";






function Manager() {
    const { data: rooms } = useGetRoomsQuery();
    const {data: persons} = useGetPersonReservedQuery();
    const {data: foods} = useGetRestaurantQuery();
    const [deleteRoom] = useDeleteRoomMutation();
    const [createRoom] = useCreateRoomMutation();
    const [deleteFood] = useDeleteFoodMutation();
    const [createFood] = useCreateFoodMutation();
    const [deletePerson] = useDeletePersonReservedMutation();
   

    var number = 0;
    var numberFood = 0;
    var numberPerson = 0;


    
    function addRoomToList(event) {

        event.preventDefault();
        const form = event.target;
        const type = form['type'].value.trim();
        const code = form['code'].value.trim();
        const bed = form['bed'].value.trim();
        const price = form['price'].value.trim();
        const meterage = form['meterage'].value.trim();
        const description = form['description'].value.trim();
        const img = form['img'].value.trim();

        createRoom([code, type, meterage, description, img, price, bed]);
        event.target.reset()

    }

    function addFoodToList(event) {

        event.preventDefault();
        const form = event.target;
        const foodCode = form['foodCode'].value.trim();
        const foodName = form['foodName'].value.trim();
        const foodContent = form['foodContent'].value.trim().split(' ');
        const foodImg = form['foodImg'].value.trim();
        const foodPrice = form['foodPrice'].value.trim();

        createFood([foodCode, foodName, foodContent, foodImg, foodPrice]);
        event.target.reset()
    }






    return (

        <div className="manager">
            <div className="manager-main-box">

                <div className="manager-title">
                    مدیریت هتل
                </div>

                <div className="table-room-container">

                    <div className="manager-room-list-title">لیست اتاق های هتل</div>
                    <table className="room-table">
                        <tr>
                            <th>شماره</th>
                            <th>قیمت</th>
                            <th>تعداد تخت</th>
                            <th>کد اتاق</th>
                            <th>نوع اتاق</th>

                        </tr>
                        {

                            rooms && rooms.map((room) => (
                                <tr className="manager-text-center">
                                    <td >{++number}</td>
                                    <td>{room.price}</td>
                                    <td>{room.bed}</td>
                                    <td>{room.id}</td>
                                    <td>{room.type}</td>
                                    <td>
                                        <button className="manager-delete-btn" onClick={() => { deleteRoom(room.id) }}>حذف</button>
                                    </td>

                                </tr>
                            ))

                        }

                    </table>

                    <div dir='rtl' className="addRoom">

                        <form action="" onSubmit={(event) => addRoomToList(event)}>
                            نوع اتاق : <input style={{ marginRight: "30px" }} type="text" id="type" required></input><br /><br />
                            کد اتاق : <input style={{ marginRight: "35px" }} type="text" id="code" required></input><br /><br />
                            تعداد تخت : <input style={{ marginRight: "10px" }} type="text" id="bed" required></input><br /><br />
                            قیمت : <input style={{ marginRight: "45px" }} type="text" id="price" required></input><br /><br />
                            متراژ : <input style={{ marginRight: "50px" }} type="text" id="meterage" required></input><br /><br />
                            توضیحات : <input style={{ marginRight: "20px" }} type="text" id="description" required></input><br /><br />
                            آدرس عکس : <input style={{ marginRight: "5px" }} type="text" id="img"></input><br /><br />


                            <button type="submit" className="manager-add-room-btn">افزودن اتاق</button>

                        </form>

                    </div>

                </div>


                <div className="table-food-container">

                    <div className="manager-food-list-title">لیست غذاهای رستوران</div>
                    <table className="food-table">
                        <tr>
                            <th>شماره</th>
                            <th>قیمت</th>
                            <th>محتویات</th>
                            <th>کد غذا</th>
                            <th>نام غذا</th>

                        </tr>
                        {

                            foods && foods.map((food) => (
                                <tr className="manager-text-center">
                                    <td >{++numberFood}</td>
                                    <td>{food.price}</td>
                                    <td style={{ fontSize: "10px" }}>{food.foodContent.join(", ")}</td>
                                    <td>{food.id}</td>
                                    <td>{food.foodName}</td>
                                    <td>
                                        <button className="manager-delete-btn" onClick={() => { deleteFood(food.id) }}>حذف</button>
                                    </td>

                                </tr>
                            ))

                        }

                    </table>

                    <div dir='rtl' className="addFood">

                        <form action="" onSubmit={(event) => addFoodToList(event)}>
                            نام غذا : <input style={{ marginRight: "32px" }} type="text" id="foodName" required></input><br /><br />
                            کد غذا : <input style={{ marginRight: "35px" }} type="text" id="foodCode" required></input><br /><br />
                            محتویات : <input style={{ marginRight: "20px" }} type="text" id="foodContent" required></input><br /><br />
                            قیمت : <input style={{ marginRight: "40px" }} type="text" id="foodPrice" required></input><br /><br />
                            آدرس عکس : <input style={{ marginRight: "0px" }} type="text" id="foodImg" required></input><br /><br />

                            <button type="submit" className="manager-add-food-btn">افزودن غذا</button>

                        </form>

                    </div>

                </div>


                <div className="table-person-container">

                    <div className="manager-person-list-title">لیست رزرو کنندگان اتاق</div>
                    <table className="person-table">
                        <tr>
                            <th>شماره</th>
                            <th>تعداد شب</th>
                            <th>تاریخ ورود</th>
                            <th>کد ملی</th>
                            <th>شماره موبایل</th>
                            <th>نام</th>

                        </tr>
                        {

                            persons && persons.map((person) => (
                                <tr className="manager-text-center">
                                    <td >{++numberPerson}</td>
                                    <td>{person.numberOfDay}</td>
                                    <td>{person.chekInTime}</td>
                                    <td>{person.nationalId}</td>
                                    <td>{person.id}</td>
                                    <td>{person.name} {person.lastName}</td>
                                    <td>
                                        <button className="manager-delete-btn" onClick={() => { deletePerson(person.id) }}>حذف</button>
                                    </td>

                                </tr>
                            ))

                        }

                    </table>



                </div>

            </div>
        </div>
    )

}

export default Manager;