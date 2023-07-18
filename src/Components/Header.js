import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("active");
  const location = useLocation();

  const handleLinkClick = (link) => {
    // alert(JSON.stringify(link));
    setActiveLink(link);

    if (link === "active") {
      toast.info("-  Explore Themes", {
        position: "bottom-right",
        className: "custom-toast",
        bodyClassName: "custom-toast-body",
        progressClassName: "custom-toast-progress",
        autoClose: 2000,
        hideProgressBar: true,
        icon: (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_266_55"
              // style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="30"
              height="30"
            >
              <path d="M30 0H0V30H30V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_266_55)">
              <path
                d="M15 30C6.75 30 0 23.4625 0 15.4722V14.5278C0 6.53751 6.75 0 15 0C23.25 0 30 6.53751 30 14.5278V15.4722C30 23.4625 23.25 30 15 30Z"
                fill="#C895E0"
              />
              <path
                d="M9.5999 24.4795L5.7749 20.4844L9.5999 16.4893H13.5749L9.7499 20.557L13.5749 24.5522H9.5999V24.4795Z"
                fill="#141414"
              />
              <path
                d="M20.1 6.46485V3.99512H14.25V24.552H20.025C19.425 24.4794 18.9 23.9709 18.9 23.3172C18.9 22.954 19.05 22.6634 19.275 22.4455C19.5 22.2276 19.725 22.1549 20.025 22.0823H17.25V6.46485H20.1Z"
                fill="#141414"
              />
              <path
                d="M21.6 24.4795C20.925 24.4795 20.325 23.8984 20.325 23.2446C20.325 22.5909 20.925 22.0098 21.6 22.0098C22.275 22.0098 22.875 22.5909 22.875 23.2446C22.875 23.971 22.35 24.4795 21.6 24.4795Z"
                fill="#141414"
              />
            </g>
          </svg>
        ),
      });
    }
    // else {
    //   toast.dismiss();
    // }
  };

  useEffect(() => {
    toast.info("-  Explore Themes", {
      position: "bottom-right",
      className: "custom-toast",
      bodyClassName: "custom-toast-body",
      progressClassName: "custom-toast-progress",
      autoClose: 2000,
      hideProgressBar: true,
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_266_55"
            // style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="30"
            height="30"
          >
            <path d="M30 0H0V30H30V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_266_55)">
            <path
              d="M15 30C6.75 30 0 23.4625 0 15.4722V14.5278C0 6.53751 6.75 0 15 0C23.25 0 30 6.53751 30 14.5278V15.4722C30 23.4625 23.25 30 15 30Z"
              fill="#C895E0"
            />
            <path
              d="M9.5999 24.4795L5.7749 20.4844L9.5999 16.4893H13.5749L9.7499 20.557L13.5749 24.5522H9.5999V24.4795Z"
              fill="#141414"
            />
            <path
              d="M20.1 6.46485V3.99512H14.25V24.552H20.025C19.425 24.4794 18.9 23.9709 18.9 23.3172C18.9 22.954 19.05 22.6634 19.275 22.4455C19.5 22.2276 19.725 22.1549 20.025 22.0823H17.25V6.46485H20.1Z"
              fill="#141414"
            />
            <path
              d="M21.6 24.4795C20.925 24.4795 20.325 23.8984 20.325 23.2446C20.325 22.5909 20.925 22.0098 21.6 22.0098C22.275 22.0098 22.875 22.5909 22.875 23.2446C22.875 23.971 22.35 24.4795 21.6 24.4795Z"
              fill="#141414"
            />
          </g>
        </svg>
      ),
    });

    return () => {
      toast.dismiss();
    };
  }, []);

  // const toast = () => {
  //   if (location?.pathname === "/") {
  //     toast.info("-  Explore Themes", {
  //       position: "bottom-right",
  //       className: "custom-toast",
  //       bodyClassName: "custom-toast-body",
  //       progressClassName: "custom-toast-progress",
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       icon: (
  //         <svg
  //           width="30"
  //           height="30"
  //           viewBox="0 0 30 30"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <mask
  //             id="mask0_266_55"
  //             // style="mask-type:luminance"
  //             maskUnits="userSpaceOnUse"
  //             x="0"
  //             y="0"
  //             width="30"
  //             height="30"
  //           >
  //             <path d="M30 0H0V30H30V0Z" fill="white" />
  //           </mask>
  //           <g mask="url(#mask0_266_55)">
  //             <path
  //               d="M15 30C6.75 30 0 23.4625 0 15.4722V14.5278C0 6.53751 6.75 0 15 0C23.25 0 30 6.53751 30 14.5278V15.4722C30 23.4625 23.25 30 15 30Z"
  //               fill="#C895E0"
  //             />
  //             <path
  //               d="M9.5999 24.4795L5.7749 20.4844L9.5999 16.4893H13.5749L9.7499 20.557L13.5749 24.5522H9.5999V24.4795Z"
  //               fill="#141414"
  //             />
  //             <path
  //               d="M20.1 6.46485V3.99512H14.25V24.552H20.025C19.425 24.4794 18.9 23.9709 18.9 23.3172C18.9 22.954 19.05 22.6634 19.275 22.4455C19.5 22.2276 19.725 22.1549 20.025 22.0823H17.25V6.46485H20.1Z"
  //               fill="#141414"
  //             />
  //             <path
  //               d="M21.6 24.4795C20.925 24.4795 20.325 23.8984 20.325 23.2446C20.325 22.5909 20.925 22.0098 21.6 22.0098C22.275 22.0098 22.875 22.5909 22.875 23.2446C22.875 23.971 22.35 24.4795 21.6 24.4795Z"
  //               fill="#141414"
  //             />
  //           </g>
  //         </svg>
  //       ),
  //     });
  //   } else {
  //     toast.dismiss();
  //   }
  // };

  // alert(JSON.stringify(activeLink));

  return (
    <div>
      {/* <div className="container-fluid"> */}
      <nav class="navbar">
        <div class="container">
          <a
            class="navbar-brand"
            href="https://www.linkedin.com/in/divyashree-lochan/"
          >
            <svg
              width="45"
              height="45"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_15_2)">
                <path
                  d="M50 85C30.75 85 15 69.7458 15 51.1017V48.8983C15 30.2542 30.75 15 50 15C69.25 15 85 30.2542 85 48.8983V51.1017C85 69.7458 69.25 85 50 85Z"
                  fill="#C895E0"
                />
                <path
                  d="M37.4 72.1186L28.475 62.7966L37.4 53.4746H46.675L37.75 62.9661L46.675 72.2881H37.4V72.1186Z"
                  fill="#141414"
                />
                <path
                  d="M61.9 30.0847V24.322H48.25V72.2881H61.725C60.325 72.1186 59.1 70.9322 59.1 69.4068C59.1 68.5593 59.45 67.8813 59.975 67.3729C60.5 66.8644 61.025 66.6949 61.725 66.5254H55.25V30.0847H61.9Z"
                  fill="#141414"
                />
                <path
                  d="M65.3999 72.1186C63.8249 72.1186 62.4249 70.7627 62.4249 69.2373C62.4249 67.7119 63.8249 66.3559 65.3999 66.3559C66.9749 66.3559 68.3749 67.7119 68.3749 69.2373C68.3749 70.9322 67.1499 72.1186 65.3999 72.1186Z"
                  fill="#141414"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_2">
                  <rect
                    width="70"
                    height="70"
                    fill="white"
                    transform="translate(15 15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <ul className="nav nav-underline justify-content-end">
            <li
              className={`nav-item ${activeLink === "active" ? "active" : ""}`}
            >
              <Link
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
                onClick={() => handleLinkClick("active")}
                to="/"
              >
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "projects" ? "active" : ""
              }`}
            >
              <Link
                className={
                  location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => handleLinkClick("projects")}
                to="projects"
              >
                Projects
              </Link>
            </li>
            <li
              className={`nav-item ${activeLink === "about" ? "active" : ""}`}
            >
              <Link
                className={
                  location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => handleLinkClick("about")}
                to="about"
              >
                About
              </Link>
            </li>
            <li
              className={`nav-item ${activeLink === "contact" ? "active" : ""}`}
            >
              <Link
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => handleLinkClick("contact")}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* </div> */}
    </div>
  );
};

export default Header;
