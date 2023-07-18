import React from "react";
import project from "./Project.json";
import { useLocation, useNavigate } from "react-router-dom";

const DetaileProjectView = () => {
  const location = useLocation();
  const clickedItem = location?.state?.item;
  const navigate = useNavigate();
  // alert(JSON.stringify(clickedItem));

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* <div className="col-12 blah">.</div> */}
          <div className="col-12 blah">.</div>
          <div className="col-2">.</div>
          <div className="col-8">
            <h2
              style={{
                color: "white",

                display: "flex",
                justifyContent: "initial",
                // marginLeft: "15px",
              }}
            >
              {/* c895e0 */}
              {clickedItem === 1 ? (
                <span>
                  <span
                    style={{
                      color: "#c0c0c0",
                      fontWeight: "lighter",
                    }}
                  >
                    0
                  </span>
                  <span
                    style={{
                      color: "#c0c0c0",
                      marginRight: "5px",
                    }}
                  >
                    1.
                  </span>
                  <span style={{ color: "#c895e0" }}>CMS - </span>
                  <span style={{ color: "#c895e0", fontWeight: "lighter" }}>
                    OTT Platform
                  </span>
                </span>
              ) : (
                <span>
                  <span
                    style={{
                      color: "#c0c0c0",
                      fontWeight: "lighter",
                    }}
                  >
                    0
                  </span>
                  <span
                    style={{
                      color: "#c0c0c0",
                      marginRight: "5px",
                    }}
                  >
                    2.
                  </span>
                  <span style={{ color: "#c895e0" }}>News Application - </span>
                  <span style={{ color: "#c895e0", fontWeight: "lighter" }}>
                    MVP
                  </span>
                </span>
              )}
            </h2>
          </div>
          {/* <div className="col-2">.</div> */}
        </div>
        <div className="row">
          {/* <div className="col-12">.</div> */}
          <div className="col-12">.</div>
          {/* <div className="col-2">.</div> */}
          <div className="container-fluid">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="col-12 col-sm-8">
                <div
                  style={{
                    width: 700,
                    height: 350,
                    top: 250,
                    // display: "flex",
                    // justifyContent: "center",
                    backgroundColor: "transparent",
                    borderRadius: 5,
                    boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.25)",
                    borderWidth: "1px",
                    borderStyle: "groove",
                    borderColor: "#c895e0",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        {project
                          ?.filter((item) => item?.id === clickedItem)
                          .map((item) => {
                            return (
                              <ul style={{ color: "#c0c0c0" }}>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                    marginTop: "10px",
                                  }}
                                >
                                  {item?.description1}
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                  {item?.description2}
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                  {item?.description3}
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                  {item?.description4}
                                </li>
                                <li>{item?.description5}</li>
                              </ul>
                            );
                          })}
                      </div>
                      <div
                        className="col-12"
                        style={{
                          display: "flex",
                          justifyContent: "end",
                          // marginRight: "10px",
                        }}
                      >
                        <footer
                          style={{
                            color: "#c0c0c0",
                            fontStyle: "italic",
                            fontSize: "10px",
                          }}
                        >
                          *Cannot add pictures due to confidentiality.
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="col-8"
            style={{ display: "flex", justifyContent: "initial" }}
          >
            <div
              style={{
                width: 1000,
                height: 250,
                // left: 430,
                top: 250,
                // position: "absolute",
                backgroundColor: "transparent",
                borderRadius: 5,
                boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.25)",
                borderWidth: "1px",
                borderStyle: "groove",
                borderColor: "#c895e0",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">.</div>

                  <div className="col-12">
                    {project
                      ?.filter((item) => item?.id === clickedItem)
                      .map((item) => {
                        return (
                          <ul style={{ color: "#c0c0c0" }}>
                            <li
                              style={{ color: "#c0c0c0", marginBottom: "10px" }}
                            >
                              {item?.description1}
                            </li>
                            <li
                              style={{ color: "#c0c0c0", marginBottom: "10px" }}
                            >
                              {item?.description2}
                            </li>
                            <li style={{ color: "#c0c0c0" }}>
                              {item?.description3}
                            </li>
                          </ul>
                        );
                      })}
                    <footer
                      style={{
                        color: "#c0c0c0",
                        fontStyle: "italic",
                        fontSize: "10px",
                      }}
                    >
                      Cannot add pictures due to confidentiality
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-2">.</div>
        </div>
        <div className="row">
          <div className="col-2">.</div>
          <div className="col-8" style={{ cursor: "pointer" }}>
            <svg
              width="35"
              height="35"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => navigate("/projects")}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.875 25C46.875 24.1371 46.1754 23.4375 45.3125 23.4375H8.45971L18.2924 13.6049C18.9026 12.9947 18.9026 12.0053 18.2924 11.3951C17.6822 10.7849 16.6928 10.7849 16.0826 11.3951L3.58264 23.8951C2.97245 24.5053 2.97245 25.4947 3.58264 26.1049L16.0826 38.6049C16.6928 39.215 17.6822 39.215 18.2924 38.6049C18.9026 37.9947 18.9026 37.0053 18.2924 36.3951L8.45971 26.5625H45.3125C46.1754 26.5625 46.875 25.8629 46.875 25Z"
                fill="#C0C0C0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetaileProjectView;

//    <div>{project?.filter((item) => item?.id === clickedItem).map((item) => {
//   return (
//     <span style={{color: "white"}}>{item?.description}</span>
//   )
// })}</div>
