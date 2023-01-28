/* eslint-disable max-len */
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import '@src/assets/libs/simplebar/simplebar.min.js'
import { handleLogout } from '@src/libs/userAuth'
import { useAuth } from '@src/libs/context'
import { useRouter } from 'next/router'
import { InvoiceCountContext } from './index'
import { RoutesPath } from './routesPath'
import { Corporate, Dashboard, Firm, Invoice, Timekeeper, Validator, Matter, Report, Help, Logout } from '@public/assets/icon-components'
import { useIdleTimer } from 'react-idle-timer'
import { toast } from 'react-toastify'
import moment from 'moment'

const SidebarComponent = () => {
  const { invoiceTypeListCount } = useContext(InvoiceCountContext)
  const [, setAuth] = useAuth()
  const [localdata, setlocaldata] = useState()
  const invoiceListCount = invoiceTypeListCount
  const router = useRouter()
  const currentpath = router?.asPath
  const pathname = router?.pathname

  const logout = () => {
    setAuth({})
    handleLogout()
  }

  const handleOnIdle = event => {
    // console.log('user is idle', event)
    logout()
    toast.error(
      <div>
        <strong>***Notification***</strong>
        <br />
        <br />
        Last Active Time:
        <br />
        {moment(getLastActiveTime()).format("MM/DD/YYYY h:mm:ss A")}
      </div>
      , { autoClose: false, allowHtml: true })
    // console.log('last active', getLastActiveTime())
  }

  // const handleOnActive = event => {
  //   console.log('user is active', event)
  //   console.log('time remaining', getRemainingTime())
  // }

  // const handleOnAction = event => {
  //   console.log('user did something', event)
  // }

  // const { getRemainingTime, getLastActiveTime } = useIdleTimer({
  //   timeout: 1000 * process.env.NO_ACTIVITY_TIME,
  //   onIdle: handleOnIdle,
  //   // onActive: handleOnActive,
  //   // onAction: handleOnAction,
  //   debounce: 500
  // })

  React.useEffect(() => {
    const item = localStorage.getItem('userType')
    setlocaldata(item)
  }, [pathname])

  const [menuItem, setMenuItem] = useState({
    dashboard: false,
    corporate: RoutesPath('corporate').includes(pathname) ? true : false,
    lawfirm: RoutesPath('lawfirm').includes(pathname) ? true : false,
    validator: RoutesPath('validator').includes(pathname) ? true : false,
    timekeeper: RoutesPath('timekeeper').includes(pathname) ? true : false,
    invoices: RoutesPath('invoices').includes(pathname) ? true : false,
    matters: RoutesPath('matters').includes(pathname) ? true : false,
    analytics: false,
    reports: false,
    help: false
  })

  const activeMenu = {
    liClass: 'mm-active',
    ulClass: 'mm-show'
  }

  const inactiveClass = 'mm-collapse'
  const handleMenuClick = e => {
    const { id } = e.target
    e.preventDefault()
    const activeStatus = menuItem[id]
    setMenuItem({
      ...menuItem, dashboard: false,
      corporate: false,
      lawfirm: false,
      validator: false,
      timekeeper: false,
      invoices: false,
      firms: false,
      matters: false,
      users: false,
      analytics: false,
      reports: false,
      help: false, [id]: !activeStatus
    })
  }
  const getInvoiceListstatusTypeCount = (statusType) => {
    if (invoiceListCount?.length) {
      let filteredCount = invoiceListCount?.find(data => (data?.status?.includes(statusType)))
      if (statusType === 'Posted') {
        filteredCount = invoiceListCount?.find(data => (data?.status === statusType))
      }
      if (filteredCount) {
        return filteredCount.count
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
  return (
    <div className="vertical-menu">
      <div id="sidebar-menu">
        <div data-simplebar className="h-100">
          {/* <!--- Sidemenu --> */}
          <div>
            {/* <!-- Left Menu Start --> */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className={currentpath === "/dashboard" || menuItem.dashboard ? activeMenu.liClass : ''}>

                <Link href="/dashboard" className="waves-effect single" id="dashboard">
                  <a className="waves-effect single">
                    <Dashboard />
                    <div>
                      <span className="color">Dashboard</span>
                    </div></a>
                </Link>
              </li>

              <li className={currentpath == "/invoice_list" || currentpath == "/upload_invoice" ? activeMenu.liClass : ''}>
                <a href="#" className={`has-arrow waves-effect single ${menuItem.invoices ? activeMenu.ulClass : inactiveClass}`} onClick={handleMenuClick} id="invoices">
                  <Invoice />
                  <span className="color" id="invoices">Invoices</span>
                </a>
                <ul
                  className={`sub-menu ${menuItem.invoices ? activeMenu.ulClass : inactiveClass}`}
                  aria-expanded="false"
                >

                  <li className={currentpath == "/invoice_list?type=all" || router.pathname === '/invoice_informations' ? activeMenu.liClass : ''}>
                    <Link href="/invoice_list?type=all" className="sub">
                      <a className="sub"> Invoice List</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/upload_invoice" ? activeMenu.liClass : ''}>
                    <Link href="/upload_invoice" className="sub">
                      <a className="sub">Upload Invoice</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/invoice_list?type=New" ? activeMenu.liClass : ''}>
                    <Link href="/invoice_list?type=New" className="sub">
                      <a className="sub"> New Files ({getInvoiceListstatusTypeCount('New')})</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/invoice_list?type=Unverified" ? activeMenu.liClass : ''}>
                    <Link href="/invoice_list?type=Unverified" className="sub">
                      <a className="sub"> Unverified ({getInvoiceListstatusTypeCount('Unverified')})</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/invoice_list?type=Verified" ? activeMenu.liClass : ''}>
                    <Link href="/invoice_list?type=Verified" className="sub">
                      <a className="sub"> Verified ({getInvoiceListstatusTypeCount('Verified')})</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/invoice_list?type=In%20progress" ? activeMenu.liClass : ''}>
                    <Link href="/invoice_list?type=In progress" className="sub">
                      <a className="sub">In Progress ({getInvoiceListstatusTypeCount('In progress')})</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/invoice_list?type=Resubmit" ? activeMenu.liClass : ''}>
                    <Link href="/invoice_list?type=Resubmit" className="sub">
                      <a className="sub">Resubmit ({getInvoiceListstatusTypeCount('Resubmit')})</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/invoice_list?type=Posted" ? activeMenu.liClass : ''}>
                    <Link href="/invoice_list?type=Posted" className="sub">
                      <a className="sub"> Posted ({getInvoiceListstatusTypeCount('Posted')})</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/invoice_list?type=Duplicate" ? activeMenu.liClass : ''}>
                    <Link href="/invoice_list?type=Duplicate" className="sub">
                      <a className="sub"> Duplicate ({getInvoiceListstatusTypeCount('Duplicate')})</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/invoice_list?type=Failed" ? activeMenu.liClass : ''}>
                    <Link href="/invoice_list?type=Failed" className="sub">
                      <a className="sub"> Failed ({getInvoiceListstatusTypeCount('Failed')})</a>
                    </Link>
                  </li>
                  <li className={currentpath == "/templates" ? activeMenu.liClass : ''}>
                    <Link href="/templates" className="sub">
                      <a className="sub"> Template</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {localdata === 'admin' || localdata === 'corporates' ?
                <li className={currentpath == "/corporates" || currentpath == "/corporate_offices" || currentpath == "/corporate_users" || currentpath == "/add_lawfirm" || currentpath == "/corporate_users" ? activeMenu.liClass : ''}>
                  <a href="#" className={`has-arrow waves-effect single ${menuItem.corporate ? activeMenu.ulClass : inactiveClass}`} onClick={handleMenuClick} id="corporate">
                    <Corporate />
                    <span className="color" id="corporate">Corporate</span>
                  </a>
                  <ul
                    className={`sub-menu ${menuItem.corporate ? activeMenu.ulClass : inactiveClass}`}
                    aria-expanded="false"
                  >
                    <li className={currentpath == "/corporates" ? activeMenu.liClass : ''}>
                      <Link href={{ pathname: `/corporates` }} className="mr-1">
                        <a className="sub">Corporate List</a>
                      </Link>
                    </li>
                    <li className={currentpath == "/add_lawfirm" ? activeMenu.liClass : ''}>
                      <Link href="/add_lawfirm" className="sub">
                        <a className="sub">Add Firm</a>
                      </Link>
                    </li>
                  </ul>
                </li> : null}
              {localdata === 'admin' || localdata === 'lawfirms' ?
                <li className={currentpath == "/lawfirms" || currentpath == "/lawfirm_offices" || currentpath == "/lawfirms_users" || currentpath == "/add_corporate" || currentpath == "/lawfirm_matters_link" ? activeMenu.liClass : ''}>
                  <a href="#" className={`has-arrow waves-effect single ${menuItem.lawfirm ? activeMenu.ulClass : inactiveClass}`} onClick={handleMenuClick} id="lawfirm">
                    <Firm />
                    <span className="color" id="lawfirm">Firm</span>
                  </a>

                  <ul className={`sub-menu ${menuItem.lawfirm ? activeMenu.ulClass : inactiveClass}`} aria-expanded="false">
                    <li className={currentpath == "/lawfirms" ? activeMenu.liClass : ''}>
                      <Link href="/lawfirms" className="sub">
                        <a className="sub">Firm List</a>
                      </Link>
                    </li>
                    <li className={currentpath == "/add_corporate" ? activeMenu.liClass : ''}>
                      <Link href="/add_corporate" className="sub">
                        <a className="sub">Add Corporate</a>
                      </Link>
                    </li>
                  </ul>
                </li> : null}
              {localdata === 'admin' || localdata === 'validator' ?

                <li className={currentpath == "/validators" || currentpath == "/validator_users" ? activeMenu.liClass : ''}>
                  <a href="#" className={`has-arrow waves-effect single ${menuItem.validator ? activeMenu.ulClass : inactiveClass}`} onClick={handleMenuClick} id="validator">
                    <Validator />
                    <span className="color" id="validator">Validator</span>
                  </a>
                  <ul
                    className={`sub-menu ${menuItem.validator ? activeMenu.ulClass : inactiveClass}`}
                    aria-expanded="false"
                  >
                    <li className={currentpath == "/validators" ? activeMenu.liClass : ''}>
                      <Link href="/validators" className="sub">
                        <a className="sub">Office List</a>
                      </Link>
                    </li>
                  </ul>
                </li> : null}

              <li className={currentpath == "/timekeeper" || currentpath == "/timekeeper" ? activeMenu.liClass : ''}>
                <a href="#" className={`has-arrow waves-effect single ${menuItem.timekeeper ? activeMenu.ulClass : inactiveClass}`} onClick={handleMenuClick} id="timekeeper">
                  <Timekeeper />
                  <span className="color" id="timekeeper">Timekeeper</span>
                </a>
                <ul
                  className={`sub-menu ${menuItem.timekeeper ? activeMenu.ulClass : inactiveClass}`}
                  aria-expanded="false"
                >
                  <li className={currentpath == "/timekeeper" ? activeMenu.liClass : ''}>
                    <Link href="/timekeeper" className="sub">
                      <a className="sub">Timekeeper</a>
                    </Link>
                  </li>

                </ul>
              </li>

              {localdata === 'admin' || localdata === 'corporates' ?
              <li className={currentpath == "/matters" || currentpath == "/matters_link" ? activeMenu.liClass : ''}>
                <a href="#" className={`has-arrow waves-effect single ${menuItem.matters ? activeMenu.ulClass : inactiveClass}`} onClick={handleMenuClick} id="matters">
                  <Matter />
                  <span className="color" id="matters">Matters</span>
                </a>
                <ul className={`sub-menu ${menuItem.matters ? activeMenu.ulClass : inactiveClass}`} aria-expanded="false">
                  <li>
                    <Link href="/matters" className="sub">
                      <a className="sub">Matters</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/matters_link" className="sub">
                      <a className="sub"> Matters Link</a>
                    </Link>
                  </li>
                </ul>
              </li>:null}

              <li className={currentpath == "/reports" || currentpath == "/reports" ? activeMenu.liClass : ''}>
                <Link href="/reports" className="waves-effect single" id="reports">
                  <a className="waves-effect single">
                    <Report />
                    <div>
                      <span className="color">Reports</span>
                    </div>
                  </a></Link>
              </li>

              <li className={currentpath == "/settings" || currentpath == "/settings" ? activeMenu.liClass : ''}>
                <Link href="/settings" className="single">
                  <a className="single">
                    <i className="fas fa-cog"></i>
                    <div>
                      <span className="color">Settings</span>
                    </div>
                  </a></Link>
              </li>

              <li className={currentpath == "#" || currentpath == "#" ? activeMenu.liClass : ''}>
                <Link href="#" className="waves-effect single" onClick={handleMenuClick} id="help">
                  <a className="waves-effect single" href='#'>
                    <Help />
                    <div>
                      <span className="color">Help</span>
                    </div>
                  </a></Link>

              </li>
              <li onClick={logout}>
                <a href="#" className="single">
                  <Logout />
                  <span className="color">Logout</span>
                </a>
              </li>
            </ul>
            <div className="footer-section">
              <p className="copy-rights text-center">Copyright &copy; Qaptur {new Date().getFullYear()}</p>
              <p className="rights text-center">All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarComponent
