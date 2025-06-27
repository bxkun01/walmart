import { Outlet, useLocation } from "react-router-dom";
import Nav from '../Components/Nav';
import Sidebar from "../Components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Footer from '../Components/Footer';
import Feedback from '../Components/Feedback';
import ScrollToTop from '../Components/ScrollToTop'; 

const Layout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef= useRef();

  useEffect(() => {
    const handleClickOutside= (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Sidebar visible={sidebarVisible} ref={sidebarRef} />
      <div className={`transition-all duration-300 overflow-hidden ${sidebarVisible ? 'ml-72' : 'ml-0'}`}>
        <Nav toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
        <Outlet />
      </div>
      <Feedback />
      <Footer />
    </>
  );
};

export default Layout;
