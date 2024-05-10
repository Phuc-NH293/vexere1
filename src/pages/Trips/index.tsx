import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteTrip } from '../../api/trips.api'
import { ITrip } from '../../interfaces/trips'

const TripList = () => {
    const [trips, setTrips] = useState<ITrip[]>([])
    const getTrips = async () => {
        const { data } = await axios.get("http://localhost:3000/trips?_expand=busHouse")
        setTrips(data)
    }
    useEffect(() => {
        getTrips()
    }, [])

    console.log(trips);
    
    return <div>
        <h1 className='text-2xl mb-3 font-bold'>Danh sách chuyến đi</h1>
        <Link className=' bg-green-600  text-white p-2 m-2 rounded hover:bg-green-700' to="/admin/trips/add">
            Thêm mới chuyến đi
        </Link>
        {trips.map((trip) => <Trip key={trip.id} data={trip} />)}
    </div>
}

const Trip = (props: { data: ITrip }) => {
    // xoa
    const handleDelete = async (id?: number | string) =>{
        try {
            if(id){
                deleteTrip(id);
                alert("Xóa thành công");
                window.location.reload()
            }
            
        } catch (error) {
            alert("Xóa thất bại")
        }
    }
    // 
    
    return <article className="rounded-xl border-2 border-gray-100 bg-white mt-3">

        <div className='flex justify-between gap-4 p-4 sm:p-6 lg:p-8'>
            <div className="flex  gap-4 p-4 sm:p-6 lg:p-8">
                <a href="#" className="block shrink-0 ">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        className="size-14 rounded-lg object-cover w-20 h-20"
                    />
                </a>
            </div>
            <div >
                <div>
                    <h3 className="font-medium sm:text-lg">
                        <Link to={"/admin/trips/" + props.data.id} className="hover:underline">{props.data.busHouse?.name}</Link>
                    </h3>

                    <p className="line-clamp-2  text-gray-600 font-light text-1xl ">
                        Giá: {props.data.price}đ
                    </p>

                    <div className="mt-2  sm:items-center sm:gap-2">
                        <div className="flex items-center gap-1 font-medium ">
                            Số ghế còn trống:<p className='text-gray-500'> {props.data.seats}</p>
                        </div>

                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                        <p className=" sm:block  sm:text-gray-500 text-xl ">
                            Khởi hành: <a href="#" className="font-medium underline hover:text-gray-700"> {props.data.startTime} </a>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-1 font-medium mb-4">
                    <i className="fa-solid fa-circle" />  Điểm đi:<p className='text-gray-500'> {props.data.fromStation}</p>
                </div>
                <i className="fa-solid fa-arrow-down"><small className="text-muted"> &emsp;  1h30</small></i>
                <div className="flex items-center gap-1 font-medium mt-4 ">
                    <i className="fa-solid fa-location-dot" /> Điểm đến:<p className='text-gray-500'> {props.data.toStation}</p>
                </div>
                <p className=" sm:block  sm:text-gray-500 text-xl ">
                    Bến xe: <a href="#" className="font-medium underline hover:text-gray-700"> {props.data.station} </a>
                </p>
            </div>
            <div className=' flex items-center '>
                {/* <button onClick={ () => handleDelete(props.data.id)} className='p-2  bg-green-600 hover:bg-red-500 text-white m-2 w-24 rounded' ><i className="fa-solid fa-trash-can"></i></button>  */}
                {/* <Link to={"/admin/trips/" + props.data.id} className="hover:underline"><button className='p-2 bg-green-600 hover:bg-red-500  text-white m-2 w-24 rounded'>Sửa</button></Link> */}
                <Link to={"/admin/trips/" + props.data.id} className="hover:underline"><i className="fa-solid fa-pen-to-square"></i></Link>
                <button onClick={ () => handleDelete(props.data.id)} className='p-2  m-2 w-24 rounded' ><i className="fa-solid fa-trash-can"></i></button> 
               
            </div>
        </div>
    </article>
}


export default TripList