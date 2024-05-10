// import { defaultFormat } from "moment"
import Button from "./Button"

const Cars = ()=>{
    return <div>
        <Car/>
    </div>
}

export default Cars

export const Car = () => {
    return <div>
        <article className="m-3 rounded-md bg-neutral-100" >          
                <div className="card mb-3 flex bg-white p-3 rounded-md " >
                    <div className="row g-0 flex">
                        <div className="col-md-4">
                            <img src="/image4.png" className=" object-cover h-48 w-56 mt-3 ml-1 rounded-md" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <h5 className="m-4 font-medium">Hải Phòng Travle(Đất Cảng)</h5>
                            <div className="card-body mt-8 p-3">
                                <p className="card-text"><i className="fa-solid fa-circle" /> 19:00 <small className="text-sm"> Hà Nội </small> </p>
                                <i className="fa-solid fa-arrow-down"><small className="text-muted"> &emsp;  1h30</small></i>
                                <p className="card-text"><i className="fa-solid fa-location-dot" /> 20:30 <small className="text-sm">Hải Phòng</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="m-1 p-2 ">
                        <div className="mb-8">
                            <h2 className="mt-1 ml-40">Từ 230.000đ</h2> 
                            <i className="fa-solid fa-ticket-simple ml-56" style={{color: "#63E6BE;"}}></i>
                        </div>
                        <div>
                            <p><small className="text-sm ml-36">Còn 11 chỗ trống</small></p>
                           &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<Button title="Chọn chuyến" />
                            {/* <button className="">Chọn chuyến</button> */}
                            &emsp;&emsp;&emsp;&emsp;<p className=" font-bold ml-8">Không cần thanh toán trước</p>
                        </div>
                       
                    </div>
                </div>
                
                
        </article>
    </div>
}