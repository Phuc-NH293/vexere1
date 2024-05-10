import { Outlet } from "react-router-dom"
import HeaderAdmin from "./Header"
import Sidebar from "./Sidebar"

const AdminLayout = () => {
    return <div>
        <Sidebar>
            <Outlet />
        </Sidebar>
    </div>
}

export default AdminLayout