import React, { useEffect, useState } from 'react'
import HeaderComponent from './header'
import SidebarComponent from './sidebar'
import MainsectionComponent from './mainsection'
import { handleErrorToast } from '@src/libs/handleToast'
import axios from 'axios';
export const InvoiceCountContext = React.createContext(null)

const Layout = props => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [invoiceTypeListCount, setInvoiceTypeListCount] = useState(null)
  const [accountsID, setAccountsID] = useState(null)
  const [userType, setUserType] = useState(null)


  const getInvoiceListTypeCount = async () => {
    try {
      const result = await axios.get(`/api/invoices/getStatusCount`)
      setInvoiceTypeListCount(result?.data?.data)
    } catch (err) {
      handleErrorToast(err)
    }
  }

  useEffect(() => {
    const initialInvoiceListTypeCount = async () => {
      try {
        // const result = await axios.get(`/api/invoices/getStatusCount`)
        // setInvoiceTypeListCount(result?.data?.data)
      } catch (err) {
        handleErrorToast(err)
      }
    }
    setAccountsID(localStorage.getItem('accounts'))
    setUserType(localStorage.getItem('user_type'))
    initialInvoiceListTypeCount()
    
  }, [])

  return (
    <InvoiceCountContext.Provider value={{ invoiceTypeListCount, setInvoiceTypeListCount, getInvoiceListTypeCount }}>
      <>
        {!props.router ?
          <section data-sidebar="dark" className={showSidebar ? 'vertical-collpsed' : 'sidebar-enable'}>
            <div id="layout-wrapper 1">
              <HeaderComponent setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
              <SidebarComponent />
              <div className="main-content">
                <MainsectionComponent {...props} />
              </div>
            </div>
          </section>
          :
          <MainsectionComponent {...props} />
        }
      </>
    </InvoiceCountContext.Provider>
  )
}

export default Layout
