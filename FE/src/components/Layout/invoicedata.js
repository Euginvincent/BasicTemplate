import React from 'react'
import Image from 'next/image'
import dot from '@src/assets/images/dot.svg'
import verifyIcon from '@src/assets/images/verify-icon.svg'
import view from '@src/assets/images/view.svg'
import post from '@src/assets/images/post.svg'
import cancel from '@src/assets/images/cancel.svg'
import save from '@src/assets/images/save.svg'
import language from '@src/assets/images/language.svg'
import dollar from '@src/assets/images/dollar.svg'
import hide from '@src/assets/images/hide.svg'
import error from '@src/assets/images/error.svg'
import add from '@src/assets/images/add.svg'
import billing from '@src/assets/images/billing.svg'
import filter from '@src/assets/images/filter.svg'
import eMail from '@src/assets/images/e-mail.svg'

const MainsectionComponent = () => {
  return (
    <>
      <div className="tab-content" id="myTabContent">
        {/* <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> */}
        <div className="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="clients mt-3">
            <button className="button-size">
              <span style={{ width: '25px', marginLeft: '-15px' }}>
                <Image src={verifyIcon} alt="verify-icon" />
              </span>{' '}
              Click to Verify
            </button>
            <div className="position">
              <span className="image-position">
                <Image src={view} alt="view" />
              </span>{' '}
              {/* <img src="assets/images/view.svg" className="image-position" /> */}
              <select className="button-size text-center">
                <option value="View LEDES">View LEDES</option>
                <option value="View LEDES 1"> &nbsp; View LEDES1</option>
                <option value="View LEDES 2"> &nbsp; View LEDES2</option>
              </select>
            </div>
            <div className="position">
              <span className="image-position">
                <Image src={post} alt="post" />
              </span>{' '}
              {/* <img src="assets/images/post.svg" className="image-position" /> */}
              <select className="button-size-disabled text-center">
                <option value="Post to LT">Post to LT</option>
                <option value="Post to LT 1">Post to LT 1</option>
                <option value="Post to LT 2">Post to LT 2</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              {/* <span className="letter mt-4">
                      <iframe src={letter} alt="letter" />
                    </span> */}
              <iframe src="assets/images/letter.pdf" className="letter mt-4"></iframe>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
              <div className="invoice-head mt-2">Invoice</div>
              <div className="scroll">
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form">
                      <div className="heading-form">
                        Invoice Number <span className="star">*</span>
                      </div>
                      <input type="text" placeholder="6099887766" className="box-active mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">
                        Invoice Start Date<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="01/12/2021" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">
                        Invoice Description<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="For Professional Services Rendered and..." className="box mt-2" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form">
                      <div className="heading-form">
                        Invoice Date<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="03/11/2021" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">
                        Invoice End Date<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="01/12/2021" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">PO Number</div>
                      <input type="text" placeholder="N/A" className="box mt-2" />
                    </div>
                  </div>
                </div>

                <div className="invoice-head mt-3">Law Firm</div>
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form">
                      <div className="heading-form">
                        Name<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="Kingston & Buttler LLP" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">
                        Tax ID<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="N/A" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">
                        Matter Name<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="PROJECT APOLLO" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">Address 1</div>
                      <input type="text" placeholder="103 NEAL ST" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">City</div>
                      <input type="text" placeholder="LONDON" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">Postal Code</div>
                      <input type="text" placeholder="EC2 1VC" className="box mt-2" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form">
                      <div className="heading-form">
                        Office<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="Madrid" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">
                        Law Firm ID<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="GB 987645342" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">
                        Law Firm Matter ID<span className="star">*</span>
                      </div>
                      <input type="text" placeholder="9992000" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">Address 2</div>
                      <input type="text" placeholder="N/A" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">State or Region</div>
                      <input type="text" placeholder="N/A" className="box mt-2" />
                    </div>
                    <div className="form">
                      <div className="heading-form mt-3">Country</div>
                      <input type="text" placeholder="GBR" className="box mt-2" />
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <div className="clients float-end mt-2">
                <button className="button-size-footer">
                  <span className="w-25">
                    <Image src={cancel} alt="cancel" />
                  </span>
                  {/* <img src="assets/images/cancel.svg" style={{ width: '25px' }} /> */}
                  &nbsp;Cancel
                </button>
                <button className="w-25">
                  <span className="image-position">
                    <Image src={save} alt="save" />
                  </span>
                  {/* <img src="assets/images/save.svg" style={{ width: '25px' }} />  */}
                  &nbsp;Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> */}
          <div className="row">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item mt-4">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed acc-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <i className="fas fa-caret-down"></i>&nbsp; INVOICE ANALYSIS
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body"></div>
                </div>
              </div>
            </div>
            {/* <!--second accordian--> */}
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item mt-4">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed acc-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <i className="fas fa-caret-down"></i>&nbsp; INVOICE DETAILS
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body bg-2">
                    <div className="row">
                      <div className="col-lg-8 col-md-8">
                        <div className="clients mt-3">
                          <button className="button-size">
                            <span className="w-25" style={{ marginLeft: '-15px' }}>
                              <Image src={verifyIcon} alt="verify-icon" />
                            </span>
                            {/* <img
                                    src="assets/images/verify-icon.svg"
                                    style={{ width: '25px', marginLeft: '-15px' }}
                                  /> */}
                            Click to Verify
                          </button>
                          <div className="position">
                            <span className="image-position">
                              <Image src={view} alt="view" />
                            </span>
                            {/* <img src="assets/images/view.svg" className="image-position" /> */}
                            <select className="button-size text-center">
                              <option value="View LEDES">View LEDES</option>
                              <option value="View LEDES 1"> &nbsp; View LEDES1</option>
                              <option value="View LEDES 2"> &nbsp; View LEDES2</option>
                            </select>
                          </div>
                          <div className="position">
                            <span className="image-position">
                              <Image src={post} alt="post" />
                            </span>
                            {/* <img src="assets/images/post.svg" className="image-position" /> */}
                            <select className="button-size-disabled text-center">
                              <option value="Post to LT">Post to LT</option>
                              <option value="Post to LT 1">Post to LT 1</option>
                              <option value="Post to LT 2">Post to LT 2</option>
                            </select>
                          </div>
                          <button className="button-size">
                            <span className="w-25" style={{ marginLeft: '-5px' }}>
                              <Image src={language} alt="language" />
                            </span>
                            {/* <img src="assets/images/language.svg" /> */}
                            &nbsp;Translate
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 mt-3">
                        <button className="alter">
                          <span className="w-25" style={{ marginLeft: '-5px' }}>
                            <Image src={dollar} alt="dollar" />
                          </span>
                          {/* <img src="assets/images/dollar.svg" style={{ width: '25px', marginLeft: '-5px' }} /> */}
                          &nbsp;Total adjustment amount - 0.00
                        </button>
                        <input type="checkbox" />
                        <label>Fees</label>
                        <input type="checkbox" />
                        <label>Expenses</label>
                      </div>
                    </div>
                    <div className="row mt-5 mx-1">
                      <div className="clients">
                        <div className="line-items-heading">Fee Line</div>
                        <button className="button-size-items">
                          <span className="w 15" style={{ marginLeft: '-3px' }}>
                            <Image src={hide} alt="hide" />
                          </span>
                          {/* <img src="assets/images/hide.svg" style={{ width: '15px', marginLeft: '-3px' }} />{' '} */}
                          &nbsp;Hide Narratives
                        </button>
                      </div>
                    </div>
                    {/* <!--table--> */}
                    <div className="table-responsive mt-2">
                      <table className="table caption-top">
                        <thead>
                          <tr>
                            <th scope="col" className="sticky-col first-col text-center">
                              <i className="fas fa-trash-alt"></i>
                            </th>
                            <th scope="col" className="sticky-col fourth-col text-center"></th>
                            <th scope="col" className="sticky-col fifth-col">
                              Date
                            </th>
                            <th scope="col">TK Name</th>
                            <th scope="col">TK Clasification</th>
                            <th scope="col">Units</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Net Total</th>
                            <th scope="col">Tax Tate</th>
                            <th scope="col">Tax Total</th>
                            <th scope="col">Total</th>
                            <th scope="col">Activity Code</th>
                            <th scope="col">Activity Code Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" className="sticky-col first-col text-center">
                              <input type="checkbox" />
                            </th>
                            <td className="sticky-col fourth-col text-center">
                              <span>
                                <Image src={error} alt="error" />
                              </span>
                              {/* <img src="assets/images/error.svg" /> */}
                            </td>
                            <td className="sticky-col fifth-col">
                              <input type="text" placeholder="01/04/21" />
                            </td>
                            <td>
                              <input type="text" placeholder="Taylor, Brian" />
                            </td>
                            <td>
                              <input type="text" placeholder="AS" />
                            </td>
                            <td>
                              <input type="text" placeholder="1.30" />
                            </td>
                            <td>
                              <input type="text" placeholder="375.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="487.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="0.20" />
                            </td>
                            <td>
                              <input type="text" placeholder="97.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="585.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="A105" />
                            </td>
                            <td>
                              <input type="text" placeholder="Communicate (internally within..." />
                            </td>
                          </tr>

                          <tr>
                            <th scope="row" className="sticky-col first-col text-center">
                              <input type="checkbox" />
                            </th>
                            <td className="sticky-col fourth-col text-center"></td>
                            <td className="sticky-col fifth-col">
                              <input type="text" placeholder="01/04/21" />
                            </td>
                            <td>
                              <input type="text" placeholder="Taylor, Brian" />
                            </td>
                            <td>
                              <input type="text" placeholder="AS" />
                            </td>
                            <td>
                              <input type="text" placeholder="1.30" />
                            </td>
                            <td>
                              <input type="text" placeholder="375.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="487.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="0.20" />
                            </td>
                            <td>
                              <input type="text" placeholder="97.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="585.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="A105" />
                            </td>
                            <td>
                              <input type="text" placeholder="Communicate (internally within..." />
                            </td>
                          </tr>

                          <tr>
                            <th scope="row" className="sticky-col first-col text-center">
                              <input type="checkbox" />
                            </th>
                            <td className="sticky-col fourth-col text-center">
                              <span>
                                <Image src={error} alt="error" />
                              </span>
                              {/* <img src="assets/images/error.svg" /> */}
                            </td>
                            <td className="sticky-col fifth-col">
                              <input type="text" placeholder="01/04/21" />
                            </td>
                            <td>
                              <input type="text" placeholder="Taylor, Brian" />
                            </td>
                            <td>
                              <input type="text" placeholder="AS" />
                            </td>
                            <td>
                              <input type="text" placeholder="1.30" />
                            </td>
                            <td>
                              <input type="text" placeholder="375.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="487.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="0.20" />
                            </td>
                            <td>
                              <input type="text" placeholder="97.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="585.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="A105" />
                            </td>
                            <td>
                              <input type="text" placeholder="Communicate (internally within..." />
                            </td>
                          </tr>

                          <tr>
                            <th scope="row" className="sticky-col first-col text-center">
                              <input type="checkbox" />
                            </th>
                            <td className="sticky-col fourth-col text-center">
                              <span>
                                <Image src={error} alt="error" />
                              </span>
                              {/* <img src="assets/images/error.svg" /> */}
                            </td>
                            <td className="sticky-col fifth-col">
                              <input type="text" placeholder="01/04/21" />
                            </td>
                            <td>
                              <input type="text" placeholder="Taylor, Brian" />
                            </td>
                            <td>
                              <input type="text" placeholder="AS" />
                            </td>
                            <td>
                              <input type="text" placeholder="1.30" />
                            </td>
                            <td>
                              <input type="text" placeholder="375.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="487.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="0.20" />
                            </td>
                            <td>
                              <input type="text" placeholder="97.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="585.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="A105" />
                            </td>
                            <td>
                              <input type="text" placeholder="Communicate (internally within..." />
                            </td>
                          </tr>

                          <tr>
                            <th scope="row" className="sticky-col first-col text-center">
                              <input type="checkbox" />
                            </th>
                            <td className="sticky-col fourth-col text-center"></td>
                            <td className="sticky-col fifth-col">
                              <input type="text" placeholder="01/04/21" />
                            </td>
                            <td>
                              <input type="text" placeholder="Taylor, Brian" />
                            </td>
                            <td>
                              <input type="text" placeholder="AS" />
                            </td>
                            <td>
                              <input type="text" placeholder="1.30" />
                            </td>
                            <td>
                              <input type="text" placeholder="375.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="487.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="0.20" />
                            </td>
                            <td>
                              <input type="text" placeholder="97.50" />
                            </td>
                            <td>
                              <input type="text" placeholder="585.00" />
                            </td>
                            <td>
                              <input type="text" placeholder="A105" />
                            </td>
                            <td>
                              <input type="text" placeholder="Communicate (internally within..." />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-3">
                      <button className="button-size mt-1">
                        <span style={{ width: '15px', marginLeft: '0px' }}>
                          <Image src={add} alt="add" />
                        </span>
                        {/* <img src="assets/images/add.svg" style={{ width: '15px', marginLeft: '0px' }} /> */}
                        &nbsp; Add a Line Item
                      </button>
                      <button className="button-size-danger mt-1">
                        <span style={{ width: '25px', marginLeft: '-3px' }}>
                          <Image src={error} alt="error" />
                        </span>
                        {/* <img src="assets/images/error.svg" style={{ width: '25px', marginLeft: '-3px' }} />  */}
                        Show Violations
                      </button>
                      <button className="button-size-footer button-active float-end mt-2">
                        <span style={{ width: '25px' }}>
                          <Image src={save} alt="save" />
                        </span>
                        {/* <img src="assets/images/save.svg" style={{ width: '25px' }} /> */}
                        &nbsp;Save
                      </button>
                      <button className="button-size-footer float-end mt-2">
                        <span style={{ width: '25px' }}>
                          <Image src={cancel} alt="cancel" />
                        </span>
                        {/* <img src="assets/images/cancel.svg" style={{ width: '25px' }} /> */}
                        &nbsp;Cancel
                      </button>
                    </div>

                    {/* <!--second table--> */}
                    <div className="row mt-5 mx-1">
                      <div className="clients">
                        <div className="line-items-heading">Expense Line</div>
                        <button className="button-size-items">
                          <span style={{ width: '15px', marginLeft: '-3px' }}>
                            <Image src={hide} alt="hide" />
                          </span>
                          {/* <img src="assets/images/hide.svg" style={{ width: '15px', marginLeft: '-3px' }} />{' '} */}
                          &nbsp;Hide Narratives
                        </button>
                      </div>
                    </div>

                    <div className="table-responsive mt-3">
                      <div className="view">
                        <div className="wrapper">
                          <table className="table caption-top">
                            <thead>
                              <tr>
                                <th scope="col" className="sticky-col first-col text-center">
                                  <i className="fas fa-trash-alt"></i>
                                </th>
                                <th scope="col" className="sticky-col fourth-col text-center"></th>
                                <th scope="col" className="sticky-col fifth-col">
                                  Date
                                </th>
                                <th scope="col">Units</th>
                                <th scope="col">Rate</th>
                                <th scope="col">Net Total</th>
                                <th scope="col">Tax Rate</th>
                                <th scope="col">Tax Total</th>
                                <th scope="col">Total</th>
                                <th scope="col">Code</th>
                                <th scope="col">Code Description</th>
                                <th scope="col">Adjustment Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row" className="sticky-col first-col text-center">
                                  <input type="checkbox" />
                                </th>
                                <td className="sticky-col fourth-col text-center">
                                  <span>
                                    <Image src={error} alt="error" />
                                  </span>
                                  {/* <img src="assets/images/error.svg" /> */}
                                </td>
                                <td className="sticky-col fifth-col">
                                  <input type="text" placeholder="01/04/21" />
                                </td>
                                <td>
                                  <input type="text" placeholder="0.1" />
                                </td>
                                <td>
                                  <input type="text" placeholder="24.30" />
                                </td>
                                <td>
                                  <input type="text" placeholder="49.65" />
                                </td>
                                <td>
                                  <input type="text" placeholder="0.20" />
                                </td>
                                <td>
                                  <input type="text" placeholder="4.86" />
                                </td>
                                <td>
                                  <input type="text" placeholder="29.50" />
                                </td>
                                <td>
                                  <input type="text" placeholder="E123" />
                                </td>
                                <td>
                                  <input type="text" placeholder="Other Professionals" />
                                </td>
                                <td>
                                  <input type="text" placeholder="0.00" />
                                </td>
                              </tr>

                              <tr>
                                <th scope="row" className="sticky-col first-col text-center">
                                  <input type="checkbox" />
                                </th>
                                <td className="sticky-col fourth-col text-center"></td>
                                <td className="sticky-col fifth-col">
                                  <input type="text" placeholder="01/04/21" />
                                </td>
                                <td>
                                  <input type="text" placeholder="0.1" />
                                </td>
                                <td>
                                  <input type="text" placeholder="24.30" />
                                </td>
                                <td>
                                  <input type="text" placeholder="49.65" />
                                </td>
                                <td>
                                  <input type="text" placeholder="0.20" />
                                </td>
                                <td>
                                  <input type="text" placeholder="4.86" />
                                </td>
                                <td>
                                  <input type="text" placeholder="29.50" />
                                </td>
                                <td>
                                  <input type="text" placeholder="E123" />
                                </td>
                                <td>
                                  <input type="text" placeholder="Other Professionals" />
                                </td>
                                <td>
                                  <input type="text" placeholder="0.00" />
                                </td>
                              </tr>

                              <tr>
                                <th scope="row" className="sticky-col first-col text-center">
                                  <input type="checkbox" />
                                </th>
                                <td className="sticky-col fourth-col text-center">
                                  <span>
                                    <Image src={error} alt="error" />
                                  </span>
                                  {/* <img src="assets/images/error.svg" /> */}
                                </td>
                                <td className="sticky-col fifth-col">
                                  <input type="text" placeholder="01/04/21" />
                                </td>
                                <td>
                                  <input type="text" placeholder="0.1" />
                                </td>
                                <td>
                                  <input type="text" placeholder="24.30" />
                                </td>
                                <td>
                                  <input type="text" placeholder="49.65" />
                                </td>
                                <td>
                                  <input type="text" placeholder="0.20" />
                                </td>
                                <td>
                                  <input type="text" placeholder="4.86" />
                                </td>
                                <td>
                                  <input type="text" placeholder="29.50" />
                                </td>
                                <td>
                                  <input type="text" placeholder="E123" />
                                </td>
                                <td>
                                  <input type="text" placeholder="Other Professionals" />
                                </td>
                                <td>
                                  <input type="text" placeholder="0.00" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <button className="button-size mt-1">
                        <span style={{ width: '15px', marginLeft: '0px' }}>
                          <Image src={add} alt="add" />
                        </span>
                        {/* <img src="assets/images/add.svg" style={{ width: '15px', marginLeft: '0px' }} /> */}
                        &nbsp; Add a Line Item
                      </button>
                      <button className="button-size-danger mt-1">
                        <span style={{ width: '25px', marginLeft: '-3px' }}>
                          <Image src={error} alt="error" />
                        </span>
                        {/* <img src="assets/images/error.svg" style={{ width: '25px', marginLeft: '-3px' }} /> Show */}
                        Violations
                      </button>
                      <button className="button-size-footer button-active float-end mt-2">
                        <span style={{ width: '25px' }}>
                          <Image src={save} alt="save" />
                        </span>
                        {/* <img src="assets/images/save.svg" style={{ width: '25px' }} /> */}
                        &nbsp;Save
                      </button>
                      <button className="button-size-footer float-end mt-2">
                        <span style={{ width: '25px' }}>
                          <Image src={cancel} alt="cancel" />
                        </span>
                        {/* <img src="assets/images/cancel.svg" style={{ width: '25px' }} /> */}
                        &nbsp;Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"> */}
          <div className="row">
            <div className="col-lg-9 col-md-9 division">
              <div className="clients mt-3">
                <button className="button-size">
                  <span className="w-25" style={{ marginLeft: '-15px' }}>
                    <Image src={verifyIcon} alt="verify-icon" />
                  </span>{' '}
                  {/* <img src="assets/images/verify-icon.svg" style={{ width: '25px', marginLeft: '-15px' }} /> */}
                  Click to Verify
                </button>
                <div className="position">
                  <span className="image-position">
                    <Image src={view} alt="view" />
                  </span>{' '}
                  {/* <img src="assets/images/view.svg" className="image-position" /> */}
                  <select className="button-size text-center">
                    <option value="View LEDES">View LEDES</option>
                    <option value="View LEDES 1"> &nbsp; View LEDES1</option>
                    <option value="View LEDES 2"> &nbsp; View LEDES2</option>
                  </select>
                </div>
                <div className="position">
                  <span className="image-position">
                    <Image src={post} alt="post" />
                  </span>{' '}
                  {/* <img src="assets/images/post.svg" className="image-position" /> */}
                  <select className="button-size-disabled text-center">
                    <option value="Post to LT">Post to LT</option>
                    <option value="Post to LT 1">Post to LT 1</option>
                    <option value="Post to LT 2">Post to LT 2</option>
                  </select>
                </div>
                <button className="button-size">
                  <span className="w-25" style={{ marginLeft: '-5px' }}>
                    <Image src={language} alt="language" />
                  </span>{' '}
                  {/* <img src="assets/images/language.svg" style={{ width: '25px', marginLeft: '-5px' }} /> */}
                  &nbsp;Translate
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3"></div>
          </div>
          <div className="row bill-content">
            <div className="col-lg-2 col-md-2 line">
              <div className="clients">
                <span>
                  <Image src={billing} alt="billing" />
                </span>{' '}
                {/* <img src="assets/images/billing.svg" /> */}
                <div className="billing">Block Billing Violations</div>
              </div>
              <h1 className="bill-amount">585.00</h1>
              <div className="billing-total">
                <span className="percentage">6%</span> of total Invoice amount
              </div>
            </div>

            <div className="col-lg-2 col-md-2 line">
              <div className="clients">
                <span>
                  <Image src={billing} alt="billing" />
                </span>{' '}
                {/* <img src="assets/images/billing.svg" /> */}
                <div className="billing">Block Billing Violations</div>
              </div>
              <h1 className="bill-amount">1,155.60</h1>
              <div className="billing-total">
                <span className="percentage">11%</span> of total Invoice amount
              </div>
            </div>

            <div className="col-lg-2 col-md-2 line">
              <div className="clients">
                <span>
                  <Image src={billing} alt="billing" />
                </span>{' '}
                {/* <img src="assets/images/billing.svg" /> */}
                <div className="billing">Duplicates </div>
              </div>
              <h1 className="bill-amount">231.12</h1>
              <div className="billing-total">
                <span className="percentage">2%</span> of total Invoice amount
              </div>
            </div>

            <div className="col-lg-2 col-md-2 line">
              <div className="clients">
                <span>
                  <Image src={billing} alt="billing" />
                </span>{' '}
                {/* <img src="assets/images/billing.svg" /> */}
                <div className="billing">Excess Call Violations</div>
              </div>
              <h1 className="bill-amount">231.12</h1>
              <div className="billing-total">
                <span className="percentage">2%</span> of total Invoice amount
              </div>
            </div>

            <div className="col-lg-2 col-md-2">
              <div className="clients">
                <span>
                  <Image src={billing} alt="billing" />
                </span>{' '}
                {/* <img src="assets/images/billing.svg" /> */}
                <div className="billing">Excess Research</div>
              </div>
              <h1 className="bill-amount">539.28</h1>
              <div className="billing-total">
                <span className="percentage">5.5%</span> of total Invoice amount
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row mt-5 mx-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item list hover" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      All Violations (10)
                      <span className="dot">
                        <Image src={dot} alt="dot" />
                      </span>{' '}
                      {/* <img src="assets/images/dot.svg" className="dot" /> */}
                    </button>
                  </li>
                  <li className="nav-item list hover" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {' '}
                      Fee Violations (7)
                    </button>
                  </li>
                  <li className="nav-item list hover" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Expense Violations (3)
                    </button>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="clients mt-4">
                <div className="position">
                  <span className="image-position-bill">
                    <Image src={filter} alt="filter" />
                  </span>{' '}
                  {/* <img src="assets/images/filter.svg" className="image-position-bill" /> */}
                  <select className="button-size-disabled text-center" style={{ color: '#72777A' }}>
                    <option value="Post to LT">Filter</option>
                    <option value="Post to LT 1">Filter 1</option>
                    <option value="Post to LT 2">Filter 2</option>
                  </select>
                </div>
                <button className="button-size">
                  <span className="w 15" style={{ marginLeft: '0px' }}>
                    <Image src={hide} alt="hide" />
                  </span>{' '}
                  {/* <img src="assets/images/hide.svg" style={{ width: '15px', marginLeft: '0px' }} /> */}
                  &nbsp; Hide Narratives{' '}
                </button>
                <button className="button-size">
                  <span className="w 20" style={{ marginLeft: '-5px' }}>
                    <Image src={eMail} alt="eMail" />
                  </span>{' '}
                  {/* <img src="assets/images/e-mail.svg" style={{ width: '20px', marginLeft: '-5px' }} /> */}
                  &nbsp; Send Email
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-5"></div>
          </div>
          <div className="table-responsive mt-5">
            <div className="view">
              <div className="wrapper">
                <table className="table caption-top">
                  <thead>
                    <tr>
                      <th scope="col" className="sticky-col first-col text-center">
                        <i className="fas fa-trash-alt"></i>
                      </th>
                      <th className="sticky-col second-col" scope="col">
                        Category
                      </th>
                      <th className="sticky-col third-col" scope="col">
                        Date
                      </th>
                      <th scope="col">TK Name</th>
                      <th scope="col">TK Clasification</th>
                      <th scope="col">Units</th>
                      <th scope="col">Rate</th>
                      <th scope="col">Net Total</th>
                      <th scope="col">Tax Tate</th>
                      <th scope="col">Tax Total</th>
                      <th scope="col">Total</th>
                      <th scope="col">Activity Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="sticky-col first-col text-center">
                        <input type="checkbox" />
                      </th>
                      <td className="sticky-col second-col">
                        <input type="text" placeholder="Blockbilling violation" />
                      </td>
                      <td className="sticky-col third-col">
                        <input type="text" placeholder="01/04/21" />
                      </td>
                      <td>
                        <input type="text" placeholder="Taylor, Brian" />
                      </td>
                      <td>
                        <input type="text" placeholder="AS" />
                      </td>
                      <td>
                        <input type="text" placeholder="1.30" />
                      </td>
                      <td>
                        <input type="text" placeholder="375.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="487.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.20" />
                      </td>
                      <td>
                        <input type="text" placeholder="97.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="585.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="A105" />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="sticky-col first-col text-center">
                        <input type="checkbox" />
                      </th>
                      <td className="sticky-col second-col">
                        <input type="text" placeholder="Blockbilling violation" />
                      </td>
                      <td className="sticky-col third-col">
                        <input type="text" placeholder="01/04/21" />
                      </td>
                      <td>
                        <input type="text" placeholder="Taylor, Brian" />
                      </td>
                      <td>
                        <input type="text" placeholder="AS" />
                      </td>
                      <td>
                        <input type="text" placeholder="1.30" />
                      </td>
                      <td>
                        <input type="text" placeholder="375.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="487.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.20" />
                      </td>
                      <td>
                        <input type="text" placeholder="97.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="585.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="A105" />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="sticky-col first-col text-center">
                        <input type="checkbox" />
                      </th>
                      <td className="sticky-col second-col">
                        <input type="text" placeholder="Blockbilling violation" />
                      </td>
                      <td className="sticky-col third-col">
                        <input type="text" placeholder="01/04/21" />
                      </td>
                      <td>
                        <input type="text" placeholder="Taylor, Brian" />
                      </td>
                      <td>
                        <input type="text" placeholder="AS" />
                      </td>
                      <td>
                        <input type="text" placeholder="1.30" />
                      </td>
                      <td>
                        <input type="text" placeholder="375.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="487.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.20" />
                      </td>
                      <td>
                        <input type="text" placeholder="97.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="585.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="A105" />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="sticky-col first-col text-center">
                        <input type="checkbox" />
                      </th>
                      <td className="sticky-col second-col">
                        <input type="text" placeholder="Blockbilling violation" />
                      </td>
                      <td className="sticky-col third-col">
                        <input type="text" placeholder="01/04/21" />
                      </td>
                      <td>
                        <input type="text" placeholder="Taylor, Brian" />
                      </td>
                      <td>
                        <input type="text" placeholder="AS" />
                      </td>
                      <td>
                        <input type="text" placeholder="1.30" />
                      </td>
                      <td>
                        <input type="text" placeholder="375.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="487.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.20" />
                      </td>
                      <td>
                        <input type="text" placeholder="97.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="585.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="A105" />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="sticky-col first-col text-center">
                        <input type="checkbox" />
                      </th>
                      <td className="sticky-col second-col">
                        <input type="text" placeholder="Blockbilling violation" />
                      </td>
                      <td className="sticky-col third-col">
                        <input type="text" placeholder="01/04/21" />
                      </td>
                      <td>
                        <input type="text" placeholder="Taylor, Brian" />
                      </td>
                      <td>
                        <input type="text" placeholder="AS" />
                      </td>
                      <td>
                        <input type="text" placeholder="1.30" />
                      </td>
                      <td>
                        <input type="text" placeholder="375.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="487.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="0.20" />
                      </td>
                      <td>
                        <input type="text" placeholder="97.50" />
                      </td>
                      <td>
                        <input type="text" placeholder="585.00" />
                      </td>
                      <td>
                        <input type="text" placeholder="A105" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainsectionComponent
