import React from 'react'
import { useState } from 'react';
import Home from '../../pages/Home/Home'
import { AiOutlineDoubleLeft ,AiOutlineDoubleRight } from "react-icons/ai";
import './Layout.css';
import { Menu } from '../Menu/Menu';
import About from '../../pages/about/About';



const Layout = ()=>
{
    const [toggle,setToggle] = useState(false);

    const handleToggle = ()=>
    {
        setToggle(!toggle);
    };
    return(
        <>
          
          <div className='sidebar-section'>
            <div className={toggle?("sidebar"):("sidebar-toggle sidebar")}>
                <div className='sidebar-toggle-icons'>
                    
                    <p onClick={handleToggle}>
                        {
                            toggle?( <AiOutlineDoubleRight size={20}/>):( <AiOutlineDoubleLeft size={20}/>)
                        }
                    
                    </p>
                   
                </div>
                <Menu toggle={toggle} />
            </div>
            <div className='container'>
               <Home/>
            </div>
          </div>

        </>
    )
}
export default Layout;