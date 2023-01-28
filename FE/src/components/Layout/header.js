import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../img/logo.png';
import '../../App.css';


const Header = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
        <>
    
        <div className="container-fluidd">
           <header className="header-nav">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src={logo} alt="logo" /> 
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>

                    {/* ///////////Master/////////// */}
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Master <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/RoomTypeList`}> Room Type </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/RoomCategoryList`}> Room Category </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/RoomBoy`}> Room Boy </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/LaundryMaster`}> Laundry Master </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/OtherCharges`}> Other Charges </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Damages`}> Damages </NavLink> </li>
                        </ul>
                    </li>

                    {/* ///////////Reservations/////////// */}
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Reservations <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/CheckIn`}> Check In </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/CheckOut`}> Check Out </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/GuestAdvanceRecepit`}> Guest Advance Recepit </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ExtraPersonPosting`}> Extra Person Posting </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/LaundryBill`}> Laundry Bill </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/CashPayment`}> Cash Payment </NavLink> </li>
                        </ul>
                    </li>

                    {/* ///////////Reports/////////// */}
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Reports <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online1`}> Online Shop1 </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline1`}> Offline Shop1 </NavLink> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Restaruants </NavLink> </li>

                    </ul>
                    </nav>     
                </div>         
        
            </div>
       </header>
       
	 </div>
     
    </>
    )
}

export default Header
