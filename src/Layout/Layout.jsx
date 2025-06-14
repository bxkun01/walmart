import { Outlet } from "react-router-dom"
import Nav from '../Components/Nav'
import Sidebar from "../Components/Sidebar"
import { useEffect, useRef, useState } from "react"
import Footer from '../Components/Footer'
import Feedback from '../Components/Feedback'


const Layout = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false)
    const sidebarRef= useRef();

    useEffect(()=>{
        const handleClickOutside= (event)=>{
            if(sidebarRef.current && !sidebarRef.current.contains(event.target)){
                setSidebarVisible(false)
            }
        }
        document.addEventListener('click',handleClickOutside)

        return ()=> document.removeEventListener('click',handleClickOutside)
 


    },[])
    return(
        <>
      <Sidebar visible={sidebarVisible}/>
      <div className={`transition-all duration-300 overflow-hidden ${sidebarVisible ? 'ml-72' : 'ml-0'}`}>
        <Nav toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
        <Outlet />
      </div>
      <Feedback />
      <Footer />

    </>
    )

}

export default Layout;