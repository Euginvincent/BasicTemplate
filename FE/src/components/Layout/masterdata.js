import React from 'react'
import Image from 'next/image'
import refreshBtnIcon from '@src/assets/images/refresh-btn.svg'
import dot from '@src/assets/images/dot.svg'

const MainsectionComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-7">
          <div className="clients">
            <div className="invoice mt-4">Invoice Master Data - (Invoice: #6099887766)</div>
            <span className="mx-2 refresh mt-3">
              <Image src={refreshBtnIcon} alt="refresh-btn" />
            </span>
          </div>
          <div className="row mt-3 mx-2">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item list hover" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Invoice{' '}
                  <span className="dot">
                    <Image src={dot} alt="dot" />
                  </span>
                </button>
              </li>
              <li className="nav-item list hover" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Line Items
                </button>
              </li>
              <li className="nav-item list hover" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Violations
                </button>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <div className="clients">
            <div className="summary mt-3">Invoice Summary Details</div>
          </div>
          <table className="mt-2 w-100" style={{ padding: '4px' }}>
            <tr>
              <th></th>
              <th className="co-1 bg-1">TOTAL</th>
              <th className="co-1 bg-1">FEES</th>
              <th className="co-1 bg-1">EXPENSES</th>
              <th className="co-1 bg-1">TAX</th>
            </tr>
            <tr>
              <td className="co-1 bg-1 text">Billed</td>
              <td className="co-2">$ 489.50</td>
              <td className="co-2">$ 489.50</td>
              <td className="co-2">$ 0.00</td>
              <td className="co-2">$ 0.00</td>
            </tr>
            <tr>
              <td className="co-1 bg-1 text">Adjustments</td>
              <td className="co-2">$ 489.50</td>
              <td className="co-2">$ 489.50</td>
              <td className="co-2">$ 0.00</td>
              <td className="co-2">$ 0.00</td>
            </tr>
            <tr>
              <td className="co-1 bg-1 text">Total</td>
              <td className="co-2">$ 489.50</td>
              <td className="co-2">$ 489.50</td>
              <td className="co-2">$ 0.00</td>
              <td className="co-2">$ 0.00</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default MainsectionComponent
