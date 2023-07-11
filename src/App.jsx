import Home from "./pages/Home"
import About from "./Pages/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Layout from "./components/Layout"
import UserApi from "./Pages/UserApi"
import ProductApi from "./Pages/ProductApi"
import Useeffectapi from "./Pages/Useeffectapi"

function App() {
    return <>

        <div>
            <Layout>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/users" element={<About />} />
                    <Route path="/user-api" element={<UserApi/>}/>
                    <Route path="/product-api" element={<ProductApi/>}/>
                    <Route path="/useeffect-api" element={<Useeffectapi/>}/>
                </Routes>

            </Layout>

        </div>


        <hr />


    </>
}
export default App