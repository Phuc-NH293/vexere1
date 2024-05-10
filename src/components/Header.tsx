import Button from "./Button"
// import Navigation from "./Navigation"

const Header = () => {
    return <header className="bg-[#2474E5]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="/">
                        <span className="sr-only">Home</span>
                        <img width={150} src="/logo.png" alt="" />
                    </a>
                </div>

                <div className="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-white transition hover:text-white/75" href="/detail"> Quản lý đơn hàng </a>
                            </li>

                            <li>
                                <a className="text-white transition hover:text-white/75" href="#"> Mở bán vé trên Vexere </a>
                            </li>

                            <li>
                                <a className="text-white transition hover:text-white/75" href="#"> Trở thành đối tác </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-rgb(13, 46, 89) shadow"
                                href="#"
                            ><i className="fa-solid fa-phone" style={{color:"rgb(13, 46, 89)"}}></i> Hotline 24/7
                            </a>

                            <div className="hidden sm:flex">
                                <a
                                    className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-rgb(13, 46, 89)"
                                    href="#"
                                >
                                    Đăng nhập
                                </a>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Header