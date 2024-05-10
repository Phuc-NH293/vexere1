import { useForm, SubmitHandler } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import moment from 'moment'

type SearchForm = {
    toStation: string,
    fromStation: string,
    startTime_gte: string
}
const Seach = (props: { onSearch: (query: string) => void }) => {
    const [ SearchParams , setSearchParams ] = useSearchParams();
    // props.title = "Thay doi title"
    const { register, formState: { errors }, handleSubmit } = useForm<SearchForm>()

    const onSubmit: SubmitHandler<SearchForm> = (data) => {
        // console.log(data)
        const query = new URLSearchParams(data)
        props.onSearch(query.toString())
    }
    return <div >
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <table className="table table-bordered" style={{ display: "flex" }} >
                <tbody>
                    <tr >
                        <td>
                            <i className="fa-solid fa-circle" />&ensp;
                            <span>Nơi Xuất Phát</span>
                            <input required {...register("fromStation")} className="p-1 outline-none border-none" type="text" id="username" />
                            {/* <select className="mt-1 w-full rounded-lg border-gray-300 text-gray-700 s:text-sm" required{...register("fromStation")}>
                                <option value="" >Chọn Điểm Đi</option>
                                <option value="JM">Hà Nội</option>
                                <option value="SRV">Hải Phòng</option>
                                <option value="JH">Thái Bình</option>
                                <option value="BBK">Bình Dương</option>
                                <option value="AK">Lai Châu</option>
                                <option value="BG">Sơn La</option>
                                <option value="EC">Sài Gòn</option>
                            </select> */}
                        </td>
                        <td>
                            <i className="fa-solid fa-location-dot" />&ensp;
                            <span>Nơi Đến</span>
                            <input {...register("toStation")} className="p-1 outline-none border-none" type="text" id="username" />
                            {/* <select className="mt-1 w-full rounded-lg border-gray-300 text-gray-700 s:text-sm" required{...register("toStation")}>
                                <option value="" >Chọn Điểm Đến</option>
                                <option value="JM">Hà Nội</option>
                                <option value="SRV">Hải Phòng</option>
                                <option value="JH">Thái Bình</option>
                                <option value="BBK">Bình Dương</option>
                                <option value="AK">Lai Châu</option>
                                <option value="BG">Sơn La</option>
                                <option value="EC">Sài Gòn</option>
                            </select> */}
                        </td>
                        <td>
                            <i className="fa-solid fa-calendar-days" /> &ensp;
                            <span>Ngày Đi</span>
                            <input type="date" className="ml-4"{...register("startTime_gte")} min={moment().format("YYYY-MM-DD")} defaultValue={moment().format("YYYY-MM-DD")} />
                        </td>
                        <td>
                            <label htmlFor="" style={{ width: "150px", textAlign: "center", paddingTop: "15px", color: "blue", fontSize: "17px" }}>Thêm Ngày Về</label>
                        </td>
                    </tr>
                </tbody>
                {/* <a href="" style={{ paddingLeft: "10px", paddingTop: "10px" }}> */}
                    <button type="submit" className="btn btn-outline-danger" style={{ width: "120px", background: "#FFD333", height: "50px" }}>Tìm</button>
                {/* </a> */}
            </table>
        </form>
    </div>
}

export default Seach