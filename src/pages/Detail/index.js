import React, { Fragment, useState, useEffect } from "react";
import "./style.css";
import intelpixel from "../../images/intelpixel.png"; // with import
import xray from "../../images/xray.jpg";
import avatar from "../../images/0.jpg";
import queryString from "query-string";
import NotFound from "../../components/notFound";
import { getDetailApi, inquireApi } from "../../services/api";
import { urlEndPoint } from "../../services/axiosInstance";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
var elasticsearch = require('elasticsearch');

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
let Detail = (props) => {
  const id = queryString.parse(props.location.search)._id;
  const [data, setData] = useState();
  const [popup, setPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resMessage, setResMessage] = useState("");
  const [resType, setResType] = useState("");
  var client = new elasticsearch.Client({
    host: 'https://intelpixel:JRm35eN5SisT!@search-dmi-rvb7nuse6jtq4qu6hp3zggcgt4.us-east-1.es.amazonaws.com' 
    // http://localhost:9200/ 
    // http://root:12345@localhost:9200/ 
    // If you have set username and password
});
  var settings = {
    dots: false,
    infinite: false,
    vertical: false,
    speed: 500,
    slidesToShow: 4, swipeToSlide: true
  };
  const sendMessage = () => {
    inquireApi({
      inquire: {
        email: email,
        message: message
      }
    })
      .then((res) => {
        console.log(res);
        if (res.status) {
          setPopup(false);
          setResType("success");
        }
        else {
          setResType("error");
        }
        setResMessage(res.message);
      })
      .catch((e) => {
        console.log("ERROR");
        console.log(e);
      });
  }
  useEffect(() => {
    if (id) {
      client.get({
        index: "dmi1", // Your index name for example crud
        type: "_doc",
        id: id,
        // body: {
        //   "_source": ["modality", "procedure", "report", "instances"],
        // } // Your index name for example doc    
      }).then(function (resp) {
        setData(resp['_source']);
        // setArrElasticSearch(resp.hits.hits);
        console.log(resp);
      }, function (err) {
        console.log(err.message);
      });
      // getDetailApi(id)
      //   .then((res) => {
      //     if (res.status) {
      //       setData(res.data);
      //     }
      //   })
      //   .catch((e) => {
      //     console.log("ERROR");
      //     console.log(e);
      //   });
    }
  }, []);
  if (!id) return <NotFound />;
  if (!data) return <div />;
  return (
    <div className="container-fluid detailPage">
      <div className="row">
        <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
          <div className="main-navbar sticky-top bg-white">
            <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
              <a className="navbar-brand mr-0" href="#">
                <span className="d-table m-auto">
                  <img
                    id="main-logo"
                    className="d-inline-block align-top mr-1"
                    src={intelpixel}
                  />
                  <span className="d-none d-md-inline ml-1"></span>
                </span>
              </a>

              <form
                action="#"
                className="main-navbar__search w-100 d-none d-md-flex d-lg-flex"
              >
                <div className="input-group input-group-seamless ml-3">
                  {/* <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                  <input
                    className="navbar-search form-control"
                    type="text"
                    placeholder="Search for something..."
                    aria-label="Search"
                  ></input>{" "} */}
                </div>
              </form>
              <ul className="navbar-nav border-left flex-row header-user-wrap">
                <li>
                  <div
                    className="dropdown-menu dropdown-menu-small"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      <div className="notification__icon-wrapper">
                        <div className="notification__icon">
                          <i className="material-icons">&#xE6E1;</i>
                        </div>
                      </div>
                      <div className="notification__content">
                        <span className="notification__category">
                          Analytics
                        </span>
                        <p>
                          Your website’s active users count increased by
                          <span className="text-success text-semibold">
                            28%
                          </span>{" "}
                          in the last week. Great job!
                        </p>
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
                        <p>
                          Last week your store’s sales count decreased by
                          <span className="text-danger text-semibold">
                            5.52%
                          </span>
                          . It could have been worse!
                        </p>
                      </div>
                    </a>
                    <a
                      className="dropdown-item notification__all text-center"
                      href="#"
                    >
                      {" "}
                      View all Notifications{" "}
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-nowrap px-3"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="user-avatar rounded-circle mr-2"
                      src={avatar}
                    />
                    <span className="d-md-inline-block">Sierra Brooks</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-small">
                    <a className="dropdown-item" href="#">
                      <i className="material-icons">&#xE7FD;</i> Profile
                    </a>

                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item text-danger" href="#">
                      <i className="material-icons text-danger">&#xE879;</i>{" "}
                      Logout{" "}
                    </a>
                  </div>
                </li>
              </ul>
              <nav className="nav">
                <a
                  href="#"
                  className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-none text-center border-left"
                  data-toggle="collapse"
                  data-target=".header-navbar"
                  aria-expanded="false"
                  aria-controls="header-navbar"
                >
                  <i className="material-icons">&#xE5D2;</i>
                </a>
              </nav>
            </nav>
          </div>

          <div className="main-content-container container-fluid px-4">
            <div className="page-header row no-gutters py-4"></div>

            <div className="row mb-2">
              <div className="col">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            {/* <div className="row mb-2 top-category-wrap">
                
              <div className="col-lg-12 col-md-12 col-sm-12 mb-4">  
                <div className="search-date-input">
                  <input className="form-control" type="date"></input>
                </div>  
              </div>
              
            </div>  */}

            <div className="row mb-30 detail-info-wrap">
              <div className="col">
                <div className="card card-small card-post card-post--aside card-post--1">
                  {/* <img className="card-img-top" src="images/content-management/display.png" alt="Card image cap"> */}
                  {/* <div className="detail-image-box">
                    <div className="detail-big-img mb-1">
                      <img src={xray} />
                      <a href="#" className="card-post__category badge badge-pill badge-info">
                        {(data["tag"] ?? "").toUpperCase()}
                      </a>
                    </div>
                    <Slider {...settings}>
                      {[
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                      ].map(() => {
                        return (
                          <div className="slider-btm-img">
                            <img src={xray} />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                 */}
                  <div className="card-body">
                    <h2 className="card-title">
                      <a className="text-fiord-blue" href="#">
                        {data["modality"] ?? ""}
                      </a>
                    </h2>
                    <div className="search-detail-info">
                      <p>{data["report"] ?? ""}</p>
                    </div>

                    <div className="list-tag-wrap">
                      <span className="text-muted">
                        <i
                          className={
                            ((data["instances"] ?? {})["patient_age"] != null && (data["instances"] ?? {})["patient_age"].trim() != "")
                              ? "fa fa-check"
                              : "fas fa-times"
                          }
                          aria-hidden="true"
                        ></i>
                        age
                      </span>

                      <span className="text-muted">
                        <i
                          className={
                            ((data["instances"] ?? {})["patient_sex"] != null && (data["instances"] ?? {})["patient_sex"].trim() != "")
                              ? "fa fa-check"
                              : "fas fa-times"
                          }
                          aria-hidden="true"
                        ></i>
                        gender
                      </span>
                      <span className="text-muted">
                        <i
                          className={
                            (data["report"] != null && data["report"].trim() != "")
                              ? "fa fa-check"
                              : "fas fa-times"
                          }
                          aria-hidden="true"
                        ></i>
                        report
                      </span>
                      <span className="text-muted">
                        <i
                          className={
                            ((data["instances"] ?? {})["study_date"] != null && (data["instances"] ?? {})["study_date"].trim() != "")
                              ? "fa fa-check"
                              : "fas fa-times"
                          }
                          aria-hidden="true"
                        ></i>
                        study date
                      </span>
                    </div>

                    <div className="icon-list-wrap">
                      <ul>
                        <li>
                          <span className="text-muted">
                            <img src={"https://img.icons8.com/nolan/24/doctors-bag.png"} />
                            {(data["instances"] ?? {})["manufacturer"] ?? ""}
                          </span>
                        </li>
                        <li>
                          <span className="text-muted">
                            <img src={"https://img.icons8.com/nolan/24/calendar.png"} />
                            {`Study Date is around ${(data["instances"] ?? {})["study_date"] ?? ""}`}
                          </span>
                        </li>
                        <li>
                          <span className="text-muted">
                            <img src={"https://img.icons8.com/nolan/24/information.png"} />
                            {data["procedure"] ?? ""}
                          </span>
                        </li>
                        <li>
                          <span className="text-muted">
                            <img src={"https://img.icons8.com/wired/24/4a90e2/electrical.png"} />
                            {(data["instances"] ?? {})["manufacturer_model_name"] ?? ""}
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="rating-list">
                    <img src="https://img.icons8.com/emoji/32/000000/star-emoji.png"/>
              <img src="https://img.icons8.com/emoji/32/000000/star-emoji.png"/>
              <img src="https://img.icons8.com/emoji/32/000000/star-emoji.png"/>
              <img src="https://img.icons8.com/emoji/32/000000/star-emoji.png"/>
              <img src="https://img.icons8.com/emoji/32/000000/star-emoji.png"/>
                    </div> */}

                    <div className="detail-btn-wrap">
                      {/* <a href={`${urlEndPoint}/api/v1/download/report/file?_id=${id}`} rel="noopener noreferrer" download> */}

                        <button type="button" className="btn btn-sm btn-primary">
                          Download Report
                      </button>
                      {/* </a>
                      <a href={`${urlEndPoint}/api/v1/download/dicom/file?_id=${id}`} rel="noopener noreferrer" download> */}

                        <button type="button" className="btn btn-sm btn-primary">
                          Download DICOM
                      </button>
                      {/* </a> */}
                      <button type="button" className="btn btn-sm btn-primary" onClick={() => {
                        setPopup(true);
                      }}>
                        Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row similar-data-wrap">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2>SIMILAR DATA SETS</h2>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card card-small card-post h-10">
                  <div
                    className="card-post__image"
                    style={{
                      backgroundImage: `url(${xray})`,

                    }}
                  ></div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a className="text-fiord-blue" href="#">
                        100k Chest MRI Images
                      </a>
                    </h5>
                    <p className="card-text">
                      Good quality Chest MRI images from east Europe
                    </p>
                  </div>
                  <div className="card-footer text-muted border-top py-3">
                    <span className="d-inline-block">
                      Manufacturer{" "}
                      <a className="text-fiord-blue" href="#">
                        Philips
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card card-small card-post h-10">
                  <div
                    className="card-post__image"
                    style={{
                      backgroundImage: `url(${xray})`,

                    }}
                  ></div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a className="text-fiord-blue" href="#">
                        500 Chest X Ray
                      </a>
                    </h5>
                    <p className="card-text">
                      Chest Xray images with pneumonia and plueral effusion
                    </p>
                  </div>
                  <div className="card-footer text-muted border-top py-3">
                    <span className="d-inline-block">
                      Manufacturer{" "}
                      <a className="text-fiord-blue" href="#">
                        Siemens
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card card-small card-post h-10">
                  <div
                    className="card-post__image"
                    style={{
                      backgroundImage: `url(${xray})`,

                    }}
                  ></div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a className="text-fiord-blue" href="#">
                        250K Chest Xray with TB markings
                      </a>
                    </h5>
                    <p className="card-text">Chest X ray images with TB </p>
                  </div>
                  <div className="card-footer text-muted border-top py-3">
                    <span className="d-inline-block">
                      Manufacturer{" "}
                      <a className="text-fiord-blue" href="#">
                        GE
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card card-small card-post h-10">
                  <div
                    className="card-post__image"
                    style={{
                      backgroundImage: `url(${xray})`,

                    }}
                  ></div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a className="text-fiord-blue" href="#">
                        Chest Xray with Nodules
                      </a>
                    </h5>
                    <p className="card-text">
                      Chest X ray images with nodules available to download
                      today
                    </p>
                  </div>
                  <div className="card-footer text-muted border-top py-3">
                    <span className="d-inline-block">
                      Manufacturer{" "}
                      <a className="text-fiord-blue" href="#">
                        Toshiba
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Legal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Terms of Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  GDPR Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <span className="copyright ml-auto my-auto mr-2">
              Copyright © 2018
              <a href="#" rel="nofollow">
                DesignRevision
              </a>
            </span>
          </footer>
        </main>
      </div>
      {popup && <div className="promo-popup animated bounceIn">
        <div className="promo-close" onClick={() => { setPopup(false); }}><i className="fas fa-times"></i></div>
        <div className="pp-inner-content">
          <h2>Intelpixel</h2>
          <div className="form-group">
            <label htmlFor="feFirstName">Email</label>
            <input type="text" className="form-control" id="feFirstName" placeholder="abc@example.com" value={email} onChange={(e) => {
              setEmail(e.target.value);
            }}></input>
          </div>
          <div className="form-group">
            <label htmlFor="feDescription">Message</label>
            <textarea className="form-control" name="feDescription" rows="5" placeholder="Something on your mind? Tell us" value={message} onChange={(e) => {
              setMessage(e.target.value);

            }}></textarea>
          </div>
          <button type="submit" className="btn btn-accent" onClick={() => {
            sendMessage();
          }}>Send</button>
        </div>
      </div>
      }
      <Snackbar open={resMessage != ""} autoHideDuration={3000} onClose={() => {
        setResMessage("");
        setResType("");
      }}>
        <Alert onClose={() => {
          setResMessage("");
          setResType("");
        }} severity={resType}>
          {resMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Detail;
