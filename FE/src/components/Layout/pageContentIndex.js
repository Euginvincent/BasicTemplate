import React, { useState } from 'react'
import HeaderComponent from './header'
import SidebarComponent from './sidebar'
import MainsectionComponent from './mainsection'
// import RightbarComponent from './rightbar'

const PageContentLayout = ({children}) => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <>
      <section data-sidebar="dark" className={showSidebar ? 'vertical-collpsed' : 'sidebar-enable'}>
        <div id="layout-wrapper">
          <HeaderComponent setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
          <SidebarComponent />
          <div className="main-content">
            {children}
          </div>
        </div>
        {/* <RightbarComponent /> */}
      </section>
    </>
  )
}

export default PageContentLayout
