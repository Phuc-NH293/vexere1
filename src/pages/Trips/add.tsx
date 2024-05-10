import { useLoaderData, useNavigate } from "react-router-dom"
import { IBusHouse } from "../../interfaces/trips";
import { useForm, SubmitHandler } from "react-hook-form"
import { postTrip } from "../../api/trips.api";

type AddTripForm = {
    busHouseId: string
    startTime: string
    fromStation: string,
    toStation: string,
    station: string,
    seats: number,
    price: number
}

const AddTrip = () => {
    const navigate = useNavigate()
    const busHouses = useLoaderData() as IBusHouse[];
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<AddTripForm>()
    const onSubmit: SubmitHandler<AddTripForm> = async (data) => {
        try {
            await postTrip(data)
            navigate("/admin/trips")
        } catch {
            alert("Thêm mới chuyến đi thất bại")
        }
    }

    return <form action="#" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-bold">Thêm mới chuyến đi</h1>
        <div>
            <label className="sr-only" htmlFor="name">
                Nhà xe
            </label>
            <select {...register("busHouseId", { required: "Dữ liệu bắt buộc" })} className="p-2 rounded">
                {busHouses && busHouses.map(item => <option value={item.id}>{item.name}</option>)}
            </select>
            <p className="text-red-500 text-sm italic">{errors.busHouseId?.message}</p>
        </div>
        <div>
            <label className="sr-only" htmlFor="name">
                Thời gian khởi hành
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Thời gian khởi hành"
                type="datetime-local"
                {...register("startTime", { required: "Dữ liệu bắt buộc" })}
            />
            <p className="text-red-500 text-sm italic">{errors.startTime?.message}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <label className="sr-only" htmlFor="email">
                    Điểm đi
                </label>
                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Điểm đi"
                    type="text"
                    {...register("fromStation", { required: "Diểm đi còn trống" })}
                />
                <p className="text-red-500 text-sm italic">{errors.fromStation?.message}</p>
            </div>
            <div>
                <label className="sr-only" htmlFor="phone">
                    Điểm đến
                </label>
                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Điểm đến"
                    type="text"
                    {...register("toStation", { required: "Điểm đến còn trống!!!" })}
                />
                <p className="text-red-500 text-sm italic">{errors.toStation?.message}</p>
            </div>
        </div>

        <div>
            <label className="sr-only" htmlFor="phone">
                Bến xe
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Bến xe"
                type="text"
                {...register("station", { required: "Bến xe còn trống!!!" })}
            />
             <p className="text-red-500 text-sm italic">{errors.station?.message}</p>
        </div>
        <div>
            <label className="sr-only" htmlFor="phone">
                Số ghế
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Số ghế"
                type="number"
                {...register("seats", { required: "Số ghế còn trống!!!" })}
            />
             <p className="text-red-500 text-sm italic">{errors.seats?.message}</p>
        </div>
        <div>
            <label className="sr-only" htmlFor="phone">
                Giá
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Giá"
                type="number"
                {...register("price", { required: "Giá không đươc để trống!!!" })}
            />
             <p className="text-red-500 text-sm italic">{errors.price?.message}</p>
        </div>
        <div className="mt-4">
            <button
                type="submit"
                className="inline-block w-full rounded-lg bg-gray-500 px-5 py-3 font-medium text-white sm:w-auto"
            >
                Thêm mới chuyến xe
            </button>
        </div>
    </form>

}

export default AddTrip