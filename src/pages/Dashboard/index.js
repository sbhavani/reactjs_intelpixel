import React, { Fragment, useState, useEffect } from "react";
import "./style.css";
import intelpixel from "../../images/intelpixel.png"; // with import

let Dashboard = (props) => {
  useEffect(() => { }, []);
  const [count, setCount] = useState(true);

  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
          <div className="main-navbar">
            <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
              <a className="navbar-brand w-100 mr-0" href="#">
                <span class="d-table m-auto">
                  <img id="main-logo" className="d-inline-block align-top mr-1" src={intelpixel} />
                  <span className="d-none d-md-inline ml-1"></span>
                </span>
              </a>
              <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                <i className="material-icons">&#xE5C4;</i>
              </a>
            </nav>
          </div>

          <form className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
            <div className="input-group input-group-seamless ml-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"></input>
            </div>
          </form>

          <div className="nav-wrapper">
            <ul className="nav flex-column">

              <li className="nav-item">
                <h3>RATING</h3>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault" checked={count} onChange={(e)=>{
console.log(e.target.value);
setCount(!count);
                  }}></input>
                  <label className="custom-control-label" for="formsCheckboxDefault">Rating</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault1"></input>
                  <label className="custom-control-label" for="formsCheckboxDefault1">Rating</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault2"></input>
                  <label className="custom-control-label" for="formsCheckboxDefault2">Rating</label>
                </div>                
              </li>
              
              <li className="nav-item">
                <h3>GENDER</h3>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Female"></input>
                  <label className="custom-control-label" for="Female">Female</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Male"></input>
                  <label className="custom-control-label" for="Male">Male</label>
                </div>
              </li>

              <li className="nav-item">
                <h3>FINDINGS</h3>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Normal"></input>
                  <label className="custom-control-label" for="Normal">Normal</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Abnormal"></input>
                  <label className="custom-control-label" for="Abnormal">Abnormal</label>
                </div>
              </li>

              <li className="nav-item">
                <h3>MANUFACTURER</h3>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Roche"></input>
                  <label className="custom-control-label" for="Roche">Roche</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Mindray"></input>
                  <label className="custom-control-label" for="Mindray">Mindray</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Siemens"></input>
                  <label className="custom-control-label" for="Siemens">Siemens</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Toshiba"></input>
                  <label className="custom-control-label" for="Toshiba">Toshiba</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="GE"></input>
                  <label className="custom-control-label" for="GE">GE</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Philips"></input>
                  <label className="custom-control-label" for="Philips">Philips</label>
                </div>                
              </li>

              <li className="nav-item">
                <h3>AGE</h3>
                <div className="age-range mb-1">
                  <input type="range"></input>
                </div>
              </li>

              <li className="nav-item">
                <h3>DEMOGRAPHICS</h3>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Malaysia"></input>
                  <label className="custom-control-label" for="Malaysia">Malaysia</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="USA"></input>
                    <label className="custom-control-label" for="USA">USA</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Russia"></input>
                  <label className="custom-control-label" for="Russia">Russia</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="China"></input>
                  <label className="custom-control-label" for="China">China</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="Australia"></input>
                  <label className="custom-control-label" for="Australia">Australia</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" className="custom-control-input" id="India"></input>
                  <label className="custom-control-label" for="India">India</label>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
          <div className="main-navbar sticky-top bg-white">
            
            <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
              <form action="#" className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                <div className="input-group input-group-seamless ml-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                  <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"></input> </div>
              </form>
              <ul className="navbar-nav border-left flex-row header-user-wrap">
              <li>
                  <div className="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">
                      <div className="notification__icon-wrapper">
                        <div className="notification__icon">
                          <i className="material-icons">&#xE6E1;</i>
                        </div>
                      </div>
                      <div className="notification__content">
                        <span className="notification__category">Analytics</span>
                        <p>Your website’s active users count increased by
                          <span className="text-success text-semibold">28%</span> in the last week. Great job!</p>
                      </div>
                    </a>
                    <a className="dropdown-item" href="#">
                      <div className="notification__icon-wrapper">
                        <div className="notification__icon">
                          <i className="material-icons">&#xE8D1;</i>
                        </div>
                      </div>
                      <div className="notification__content">
                        <span className="notification__category">Sales</span>
                        <p>Last week your store’s sales count decreased by
                          <span className="text-danger text-semibold">5.52%</span>. It could have been worse!</p>
                      </div>
                    </a>
                    <a className="dropdown-item notification__all text-center" href="#"> View all Notifications </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <img className="user-avatar rounded-circle mr-2" src={intelpixel} />
                    <span className="d-md-inline-block">Sierra Brooks</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-small">
                    <a className="dropdown-item" href="#">
                      <i className="material-icons">&#xE7FD;</i> Profile</a>
                    
                    
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item text-danger" href="#">
                      <i className="material-icons text-danger">&#xE879;</i> Logout </a>
                  </div>
                </li>
              </ul>
              <nav className="nav">
                <a href="#" className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                  <i className="material-icons">&#xE5D2;</i>
                </a>
              </nav>
            </nav>
          </div>
          
          <div className="main-content-container container-fluid px-4">
          
            <div className="page-header row no-gutters py-4">
             
            </div>
          
            <div className="row mb-2"> 
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">CT</a></li>
                  <li className="breadcrumb-item"><a href="#">Chest</a></li>
                  <li className="breadcrumb-item"><a href="#">India</a></li>
                  <li className="breadcrumb-item"><a href="#">4 Slice</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Information</li>
                </ol>
              </nav>
            </div>

            <div className="row mb-2 top-category-wrap">
                
              <div className="col mb-4">  
              <ul className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <span className="d-md-inline-block">Modality</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-small">
                      <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">CT</label>
                            </div></a>
                    <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">USG</label>
                            </div></a>
                    <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">X-Ray</label>
                            </div></a>
                      <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">MRI</label>
                            </div></a>                 
                  </div>
                </ul>
              </div>
              
              <div className="col mb-4">     
                <ul className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <span className="d-md-inline-block">Disease</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-small">
                      <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Pleural Effusion</label>
                            </div></a>
                    <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Pneumonia</label>
                            </div></a>
                    <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">CPOD</label>
                            </div></a>
                      <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">TB</label>
                            </div></a>                 
                  </div>
                </ul>    
              </div>
              
              <div className="col mb-4">     
                <ul className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">            
                    <span className="d-md-inline-block">Procedure</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-small">
                      <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Removal</label>
                            </div></a>
                    <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Surgery</label>
                            </div></a>
                    <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Transplant</label>
                            </div></a>
                      <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Replacement</label>
                            </div></a>                 
                  </div>
                </ul>    
              </div>

              <div className="col mb-4">     
                <ul className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <span className="d-md-inline-block">Technical Specifications</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-small">
                          <a className="dropdown-item" href="#">
                          <div className="custom-control custom-checkbox mb-1">
                                  <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                                  <label className="custom-control-label" for="formsCheckboxDefault">0.55 Tesla</label>
                                </div></a>
                        <a className="dropdown-item" href="#">
                          <div className="custom-control custom-checkbox mb-1">
                                  <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                                  <label className="custom-control-label" for="formsCheckboxDefault">0.5 Tesla</label>
                                </div></a>
                        <a className="dropdown-item" href="#">
                          <div className="custom-control custom-checkbox mb-1">
                                  <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                                  <label className="custom-control-label" for="formsCheckboxDefault">1.5 Tesla</label>
                                </div></a>
                          <a className="dropdown-item" href="#">
                          <div className="custom-control custom-checkbox mb-1">
                                  <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                                  <label className="custom-control-label" for="formsCheckboxDefault">3 Tesla</label>
                                </div></a>                 
                      </div>
                    </ul>    
                  </div>

              <div className="col mb-4">     
                <ul className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <span className="d-md-inline-block">Bodypart</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-small">
                      <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Abdomen</label>
                            </div></a>
                    <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Brain</label>
                            </div></a>
                    <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Knee</label>
                            </div></a>
                      <a className="dropdown-item" href="#">
                      <div className="custom-control custom-checkbox mb-1">
                              <input type="checkbox" className="custom-control-input" id="formsCheckboxDefault"></input>
                              <label className="custom-control-label" for="formsCheckboxDefault">Chest</label>
                            </div></a>                 
                  </div>
                </ul>    
              </div>

            </div> 

            <div className="row">
              <div className="card card-small card-post card-post--aside card-post--1 search-item-wrap">
                <div className="card-post__image" style={{ backgroundImage: "url(images/content-management/xray.jpg)" }}>
                  <a href="#" className="card-post__category badge badge-pill badge-info">CT</a>
                  
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">500K Abnormal Chest X-rays</a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">Data sourced from hospitals in India and UAE. Indications include pneumonia, TB, cardiomegaly, nodules, atelactasis. Chest X rays are widely used across the globe to test the lungs for anything that has gone wrong in this particular body part</p>
                  
                  <div className="list-tag-wrap">
                    <span className="text-muted"><i className="fa fa-check" aria-hidden="true"></i>age</span>
                    <span className="text-muted"><i className="fas fa-times" aria-hidden="true"></i>gender</span>
                    <span className="text-muted"><i className="fa fa-check" aria-hidden="true"></i>report</span>
                    <span className="text-muted"><i className="fas fa-times" aria-hidden="true"></i>study date</span>
                  </div>
                </div>
              </div>
            </div>   
        
            <div className="row">
              <div className="card card-small card-post card-post--aside card-post--1 search-item-wrap">
                <div className="card-post__image" style={{ backgroundImage: "url(images/content-management/usg.jpeg)" }}>
                  <a href="#" className="card-post__category badge badge-pill badge-info">Ultrasound</a>
                  
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">1000 Fetal US Studies with Measurements</a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">Data sourced from imaging centers in India. Studies include separate image annotations. So this data comes from the Indian sub continent. This lies in the south east asian region. This data is sonography.</p>
                  
                  <div className="list-tag-wrap">
                    <span className="text-muted"><i className="fa fa-check" aria-hidden="true"></i>age</span>
                    <span className="text-muted"><i className="fas fa-times" aria-hidden="true"></i>gender</span>
                    <span className="text-muted"><i className="fa fa-check" aria-hidden="true"></i>report</span>
                    <span className="text-muted"><i className="fas fa-times" aria-hidden="true"></i>study date</span>
                  </div>
                </div>
              </div>
            </div>
        
            <div className="row">
              <div className="card card-small card-post card-post--aside card-post--1 search-item-wrap">
                <div className="card-post__image" style={{ backgroundImage: "url(images/content-management/mri.jpeg)" }}>
                  <a href="#" className="card-post__category badge badge-pill badge-info">MRI</a>
                  
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">50K Brain MRIs with Ischemic Stroke</a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">Data sourced from hospitals in Korea. Studies include T2 and FLAIR series. There could be addtional data just adding data. I want to see more content in these cards , need to evaluate the look with multiple lines. The images are not the most beautiful ones but seem to transmit the intent</p>

                  <div className="list-tag-wrap">
                    <span className="text-muted"><i className="fa fa-check" aria-hidden="true"></i>age</span>
                    <span className="text-muted"><i className="fas fa-times" aria-hidden="true"></i>gender</span>
                    <span className="text-muted"><i className="fa fa-check" aria-hidden="true"></i>report</span>
                    <span className="text-muted"><i className="fas fa-times" aria-hidden="true"></i>study date</span>
                  </div>
                </div>
              </div>
          </div>

            <div className="row">
              <div className="card card-small card-post card-post--aside card-post--1 search-item-wrap">
                <div className="card-post__image" style={{ backgroundImage: "url(images/content-management/ct.png)" }}>
                  <a href="#" className="card-post__category badge badge-pill badge-info">CT</a>
                  
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">200K Chest CTs with nodules</a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">Data sourced from hospitals in the U.S. Nodules are 3 mm and confirmed by pathology reports. Nodules could vary in size. They are indicative of an abnormality in the chest region. One must consult the doctor post finding any nodule in their scan</p>
                  
                  <div className="list-tag-wrap">
                    <span className="text-muted"><i className="fa fa-check" aria-hidden="true"></i>age</span>
                    <span className="text-muted"><i className="fas fa-times" aria-hidden="true"></i>gender</span>
                    <span className="text-muted"><i className="fa fa-check" aria-hidden="true"></i>report</span>
                    <span className="text-muted"><i className="fas fa-times" aria-hidden="true"></i>study date</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Legal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Terms of Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Privacy Policy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">GDPR Policy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
            <span className="copyright ml-auto my-auto mr-2">Copyright © 2018
              <a href="#" rel="nofollow">DesignRevision</a>
            </span>
          </footer>
        
        </main>

      </div>
    </div>
 
 );
};
export default Dashboard;
