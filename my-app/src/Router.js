import { BrowserRouter,Route,Routes } from "react-router-dom";
import { AboutUsPage } from "./page/index";
import {Dashboard} from "./page/index"
import {Header} from "./modules/index"
import {Basicform} from "./components/form/index"

const RouterPage =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/about" element={<AboutUsPage/>}/>
            <Route path="/Dasboard" element={<Dashboard/>}/>
            <Route path="/header" element={<Header/>}/>
            <Route path="/Basicform" element={<Basicform/>}/>

            </Routes>
        </BrowserRouter>
        
    );
}
export default RouterPage;