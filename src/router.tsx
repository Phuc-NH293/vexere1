import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about";
import Detail from "./pages/detail";
import HomePage from "./pages/home";

import { getBusHouses } from './api/busHouse.api';
import { getTripById } from './api/trips.api';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import TripList from './pages/Trips';
import AddTrip from './pages/Trips/add';
import UpdateTrip from './pages/Trips/update';
import NotFound from './pages/notFound';

import UserLogin from './components/login';
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "about",
        element: <AboutPage />,
    },
    {
        path: "detail",
        element: <Detail />,
    },
    {
        path: "login",
        element: <UserLogin/>,
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            { path: "", element: <Dashboard /> },
            { path: "trips", element: <TripList /> },
            {
                path: "trips/add",
                loader: async () => {
                    const { data } = await getBusHouses();
                    return data
                },
                element: <AddTrip />
            },
            {
                path: "trips/:id",
                loader: async ({ params }) => {
                    const { data: busHouses } = await getBusHouses();
                    if (params.id) {
                        const { data: trip } = await getTripById(params.id)
                        return { trip, busHouses }
                    }
                    return { busHouses }
                },
                element: <UpdateTrip />
            },
        ]
    }
    ,
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router