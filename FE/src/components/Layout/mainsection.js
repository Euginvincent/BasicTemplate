import React from 'react'

const MainsectionComponent = ({ children }) => {
  return (
    <>
      {/* mainsection */}
      <div className="page-content">
        {children}
      </div>
      {/* <!-- End Page-content --> */}
    </>
  )
}

export default MainsectionComponent
