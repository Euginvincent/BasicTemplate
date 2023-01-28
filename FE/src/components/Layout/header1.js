import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { handleLogout } from '@src/libs/userAuth'
import { useAuth } from '@src/libs/context'
import Router, { useRouter } from 'next/router'

const HeaderComponent = props => {
  const [localdata, setlocaldata] = React.useState()
  const [, setAuth] = useAuth()
  const logout = () => {
    setAuth({})
    handleLogout()
  }

  const resetpassword = () =>{
    Router.push('/reset_password')
  }
  const  myprofile = () => {
    Router.push('/my_profile')
  }
  React.useEffect(() => {
    const item = localStorage.getItem('userName')
    setlocaldata(item)
  }, [])

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box text-center">
            <Link href="/dashboard" className="logo logo-dark">
             <a className="logo logo-dark" >
              <span className="logo-sm">
                <img src="../../public/assets/images/logo-new-sm.svg" alt="logo-sm-dark" height="22" />
              </span>
              <span className="logo-lg">
                <img src="../../public/assets//images/logo-new.svg" alt="logo-dark" height="24" />
              </span>
            </a></Link>

            <Link href="/dashboard" className="logo logo-light">
             <a className="logo logo-light" >
              <span className="logo-sm">
                <img src="../../public/assets/images/logo-new-sm.svg" alt="logo-sm-light" height="22" />
              </span>
              <span className="logo-lg">
                <img src="../../public/assets/images/logo-new.svg" className="new-logo" alt="logo-light" height="24" />
              </span>
              {/* <span className="logo-sm">
                <Image src={LogoSMLight} alt="logo-sm-light" height="22" />
              </span>
              <span className="logo-lg">
                <Image src={LogoLGLight} alt="logo-light" height="24" />
              </span> */}
            </a>
            </Link>
          </div>


          <form className="app-search d-none d-lg-block">
            <div className="position-relative clients">
              <input type="text" className="form-control" placeholder="Search..." />
              <span className="ri-search-line"></span>
              {/* <select className="align select-darkgray-dropicon">
                <option value="clients">Corporate</option>
                <option value="clients 1">Lawfirm</option>
                <option value="clients 2">Validator</option>
              </select> */}
            </div>
          </form>
        </div>

        <div className="d-flex">
          <div className="dropdown d-inline-block d-lg-none ms-2">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-search-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="ri-search-line"></i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-search-dropdown"
            >
              <form className="p-3">
                <div className="mb-3 m-0">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search ..." />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="ri-search-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="dropdown d-none d-lg-inline-block ms-1">
            <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
              <i className="ri-fullscreen-line"></i>
            </button>
          </div> */}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-notifications-dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ri-notification-3-line"></i>
              <span className="noti-dot"></span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-notifications-dropdown"
            >
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-0"> Notifications </h6>
                  </div>
                  <div className="col-auto">
                    <a href="#!" className="small">
                      {' '}
                      View All
                    </a>
                  </div>
                </div>
              </div>              
              <div className="p-2 border-top">
                <div className="d-grid">
                  <a className="btn btn-sm btn-link font-size-14 text-center" href="#">
                    <i className="mdi mdi-arrow-right-circle me-1"></i> View More..
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown d-inline-block user-dropdown">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="../../public/assets/images/users/profile.png"
                alt="Header Avatar"
              ></img>
              <span className="d-none d-xl-inline-block ms-1 text-capitalize">{localdata}</span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end user-drop">
              <a className="dropdown-item" href="#" onClick={myprofile}>
              <i className="fas fa-user me-1"></i> My Profile
              </a>
              <a className="dropdown-item" href="#" onClick={resetpassword}>
              <i className="fas fa-key me-1"></i> Change Password
              </a>
              <a className="dropdown-item text-danger" href="#" onClick={logout}>
                <i className="ri-shut-down-line align-middle me-1 text-danger"></i> Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
