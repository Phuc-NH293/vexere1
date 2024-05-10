// import Button from "./Button"
import { Car } from "./Car"
const Mainn = () => {
    return <div className="subContainer flex " >
        <aside >
            <h2>Sắp xếp</h2>

            <form action="">
                <input type="radio" name="gender" value="male" checked title="." /> Mặc định<br />
                <input type="radio" name="gender" value="female" title="." /> Giờ đi sớm nhất<br />
                <input type="radio" name="gender" value="other" title="." /> Giờ đi muộn nhất<br />
                <input type="radio" name="gender" value="male" title="." /> Đánh giá cao nhất<br />
                <input type="radio" name="gender" value="male" title="." /> Giá tăng dần<br />
                <input type="radio" name="gender" value="male" title="." /> Giá giảm dần<br />
            </form>

        </aside>
        <div>
            <Car/>
        </div>
    </div>
}

export default Mainn