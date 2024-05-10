// import Select from "./Select";
// import Date from "./Date";
// import Button from "./Button";
import Seach from "./Search";
import { useState } from "react";
import { ITrip } from "../interfaces/trips";
import { getTrips } from "../api/trips.api";
import { Car } from "./Car";
const SeachBaseDetail = () => {
    const [ trips , setTrips]= useState<ITrip[]>([]);
    const handleSearch = async (query:string)=>{
      console.log(query);
      const { data }= await getTrips(query)
      setTrips (data)
    }
    return <div className="form-seach1">
        <div>
            <div className="hidden sm:block ">
                <div className="border-b border-gray-200 ">
                    <nav className="ml-64 flex gap-6 mt-3" aria-label="Tabs">
                        <a
                            href="#"
                            className="shrink-0 border-b-2 border-sky-500 px-10 pb-1 text-sd font-medium text-blue-600"
                        >
                            <i className="fa-solid fa-bus-simple"></i>&ensp;
                            80K
                        </a>
                        <a
                            href="#"
                            className="shrink-0 border-b-2 border-transparent px-10 pb-4 text-sd font-medium text-black-500 hover:border-blue-300 hover:text-blue-700"
                        >
                            <i className="fa-solid fa-plane"></i>&ensp;
                            <label htmlFor="" className="position-relative">
                                Máy Bay
                                <span className="position-absolute bottom-3 start-90 translate-middle badge rounded-pill bg-danger">
                                    200K
                                </span>
                            </label>
                        </a>
                        <a
                            href="#"
                            className="shrink-0 border-b-2 border-transparent px-10 pb-4 text-sd font-medium text-black-500 hover:border-blue-300 hover:text-blue-700"
                        >
                            <i className="fa-solid fa-train"></i>&ensp;
                            <label htmlFor="" className="position-relative">
                                93K
                                <span className="position-absolute bottom-3 start-90 translate-middle badge rounded-pill bg-danger">
                                    Mới
                                </span>
                            </label>
                        </a>
                    </nav>
                </div>
            </div> <br />
            <div>
                <Seach onSearch={handleSearch}/>
            </div>
            {trips.map(item => <Car key={item.id} />)}
        </div>    {/* <table className="table table-bordered" style={{ display: "flex" }}>
      <tbody>
        <tr >
          <td>
            <i className="fa-solid fa-circle" />&ensp;
            <span>Nơi Xuất Phát</span>
            <select className="mt-1 w-full rounded-lg border-gray-300 text-gray-700 s:text-sm">
              <option value="">Chọn Điểm Đi</option>
              <option value="JM">Hà Nội</option>
              <option value="SRV">Hải Phòng</option>
              <option value="JH">Thái Bình</option>
              <option value="BBK">Bình Dương</option>
              <option value="AK">Lai Châu</option>
              <option value="BG">Sơn La</option>
              <option value="EC">Sài Gòn</option>
            </select>
          </td>
          <td>
            <i className="fa-solid fa-location-dot" />&ensp;
            <span>Nơi Đến</span>
            <select className="mt-1 w-full rounded-lg border-gray-300 text-gray-700 s:text-sm">
              <option value="">Chọn Điểm Đến</option>
              <option value="JM">Hà Nội</option>
              <option value="SRV">Hải Phòng</option>
              <option value="JH">Thái Bình</option>
              <option value="BBK">Bình Dương</option>
<option value="AK">Lai Châu</option>
              <option value="BG">Sơn La</option>
              <option value="EC">Sài Gòn</option>
            </select>
          </td>
          <td>
            <i className="fa-solid fa-calendar-days" /> &ensp;
            <span>Ngày Đi</span>
            <label htmlFor="" style={{ width: "150px" , marginLeft:"20px"}}>T2, 29/03/2024</label>
          </td>
          <td>
            <label htmlFor="" style={{ width: "150px", textAlign: "center", paddingTop: "15px", color: "blue" ,fontSize:"17px" }}>Thêm Ngày Về</label>
          </td>
        </tr>
      </tbody>
      <a href="" style={{ paddingLeft: "10px", paddingTop: "10px" }}>
        <button type="submit" className="btn btn-outline-danger" style={{ width: "120px", background: "#FFD333", height: "50px" }}>Tìm</button>
      </a>
    </table> */}
    </div>
}

export default SeachBaseDetail