import Banner from "../components/Banner"
import Card from "../components/Card"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageLink from "../components/PageLink"

const HomePage = () => {
    return <div>
        <Header />
        <Banner />
        <div className="flex gap-4">
            <Card />
            {/* <Card />
            <Card />
            <Card /> */}
        </div>
        <div>
            <PageLink/>
        </div>
        <div>
            <Footer/>
        </div>
        
    </div>
}

export default HomePage