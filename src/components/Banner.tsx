import Button from "./Button";
import Select from "./Select";
import Date from "./Date";

const Banner = () => {
    return <>
        <section className="relative bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat h-96">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
                <div className="w-full text-center ">
                    <div className="form-text text-white text-2xl">
                        <h2>Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</h2>
                    </div>
                    <div className="form-seach">
                        <ul>
                            <li>
                                
                                <a href="" className="action"><i className="fa-solid fa-bus-simple"></i> Xe Khách</a>
                            </li>

                            <li>
                                
                                <a href=""> <i className="fa-solid fa-plane-up"></i> Máy Bay</a>
                            </li>
                            <li>
                                
                                <a href=""> <i className="fa-solid fa-train"></i> Tàu Hỏa</a>
                            </li>
                            <li>
                                
                                <a href=""> <i className="fa-solid fa-caravan"></i>Thuê Xe</a>
                            </li>
                        </ul>
                        <form action="" className="bg-white p-4 flex gap-4 rounded-lg border-gray-900">
                            <i className="fa-solid fa-circle" /><Select title="Nơi xuất phát" />
                            <i className="fa-solid fa-location-dot" />  <Select title="Nơi đến" />
                            <i className="fa-solid fa-calendar-days" />  <Date title="Ngày đi" />
                            <i className="fa-solid fa-plus" style={{color:" #4688f4;"}}></i>  <Date title="Thêm ngày về" />
                            <Button title="Tìm kiếm" />
                        </form>
                    </div>
                    <div className="conten ">
                        <th>
                            <i className="fa-regular fa-circle-check"></i> 
                            <span>Chắc Chắn Có Chỗ</span>
                        </th>&emsp;&emsp;
                        <th>
                            <i className="fa-solid fa-phone"></i> 
                            <span>Hỗ Trợ 24/7</span>
                        </th>&emsp;&emsp;
                        <th>
                            <i className="fa-solid fa-scroll"></i> 
                            <span>Nhiều Ưu Đãi</span>
                        </th>&emsp;&emsp;
                        <th>
                        <i className="fa-solid fa-dollar-sign" style={{color:"bg-[#FFD333]", border: "2px solid bg-[#FFD333]"}}></i> 
                            <span>Thanh Toán Đa Dạng</span>
                        </th>
                    </div>


                </div>
            </div>
        </section>
    </>
}

export default Banner;