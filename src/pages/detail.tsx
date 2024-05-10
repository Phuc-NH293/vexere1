// import Banner from "../components/Banner"
// import Card from "../components/Card"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageLink from "../components/PageLink"
import SeachBaseDetail from "../components/SeachBaseDetail"
import Mainn from "../components/Mainn"
import { useState } from "react";
import { ITrip } from "../interfaces/trips";
import { getTrips } from "../api/trips.api";

const Detail = () => {
    // const [ trips , setTrips]= useState<ITrip[]>([]);
    // const handleSearch = async (query:string)=>{
    //   console.log(query);
    //   const { data }= await getTrips(query)
    //   setTrips (data)
    // }
    return <div>
        <div>
            <Header />
        </div>
        <div>
            <div className=" h-full border-spacing-24">
                <SeachBaseDetail />
            </div>
        </div>
        <div className="container">
            <Mainn/>
        </div>
        <div>
            <PageLink />
        </div>
        <div>
            <Footer />
        </div>

    </div>
}

export default Detail