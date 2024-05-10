// export interface ITrip {
//     busHouseId: string,
//     fromStation: string,
//     id: string,
//     isBooked?: number,
//     station: string,
//     price: number,
//     startTime: string,
//     seats: number
//     toStation: string,
//     busHouse?: IBusHouse
// }

// export interface IBusHouse {
//     id: string,
//     name: string,
//     adress: string,
//     phone: string
// }
export interface ITrip {
    busHouseId: string,
    startTime: string,
    fromStation: string,
    station: string,
    id?: string,
    isBooked?: number,
    price: number,
    seats: number
    toStation: string,
    busHouse?: IBusHouse
}

export interface IBusHouse {
    id: string,
    name: string,
    adress: string,
    phone: string
}