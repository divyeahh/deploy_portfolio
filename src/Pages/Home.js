import React, { useState } from "react";
import "./Home.css";
import { Button, Modal } from "react-bootstrap";
//#766a8a
//rgb(160 154 169)

const Home = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 blah">.</div>
          <div className="col-12 blah">.</div>
          {/* <div className="col-7"> */}
          <div className="col-12 blah">
            <h1 style={{ color: "#c0c0c0" }}>Explore LocalHost:3000:</h1>
          </div>
          <div className="col-12">
            <h1 style={{ color: "#c0c0c0" }}>
              <span style={{ color: "#c895e0" }}>
                Where My Creativity Finds its
              </span>{" "}
              <span style={{ color: "#c895e0" }}>Port</span>(folio)!
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 blah">.</div>
        </div>
        <div className="row">
          <div className="col-12 blah">.</div>
        </div>
        <div className="row">
          <div className="col-12 blah">.</div>
        </div>

        <div className="row" style={{ height: "100px" }}>
          <div className="col-12">.</div>
        </div>

        <div className="row" style={{ height: "80px" }}>
          <div className="col-12 blah">.</div>
        </div>

        <div className="row ">
          <div className="col-4 blah">.</div>
          <div className="col-4 blah">.</div>
          <div
            className="col-4"
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={() => handleModal()}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
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
          </div>
          <div class="modal-dialog modal-dialog-scrollable">...</div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable="yes"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              About the theme
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <svg
                width="139"
                height="50"
                viewBox="0 0 139 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginBottom: "10px" }}
              >
                <rect width="25" height="50" fill="#292925" />
                <rect x="114" width="25" height="50" fill="#D9D9D9" />
                <rect x="38" width="25" height="50" fill="#C895E0" />
                <rect x="76" width="25" height="50" fill="#C0C0C0" />
              </svg>
              <p>
                I carefully curated a combination of black and purple, as they
                evoke an air of mystery and ignite curiosity within users.
                However, I also wanted to infuse a warm and welcoming ambience,
                which led me to temper the purple with a soothing lavender. This
                blend creates an alluring environment that invites users to
                explore and engage.
              </p>
            </div>
            <div>
              <Modal.Title style={{ color: "#c896e0", marginBottom: "5px" }}>
                About the logo
              </Modal.Title>

              <p
                style={{
                  fontWeight: "bold",
                  fontStretch: "extra-expanded",
                  fontSize: "18px",
                }}
              >
                The letter (c):
              </p>
              <svg
                width="91"
                height="30"
                viewBox="0 0 91 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_273_103"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                >
                  <path d="M30 0H0V30H30V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_273_103)">
                  <path
                    d="M15 30C6.75 30 0 23.4625 0 15.4722V14.5278C0 6.53751 6.75 0 15 0C23.25 0 30 6.53751 30 14.5278V15.4722C30 23.4625 23.25 30 15 30Z"
                    fill="#C895E0"
                  />
                  <path
                    d="M14.9678 19.1331L11.1428 15.138L14.9678 11.1428H18.9428L15.1178 15.2106L18.9428 19.2058H14.9678V19.1331Z"
                    fill="#141414"
                  />
                </g>
                <mask
                  id="mask1_273_103"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="61"
                  y="0"
                  width="30"
                  height="30"
                >
                  <path d="M91 0H61V30H91V0Z" fill="white" />
                </mask>
                <g mask="url(#mask1_273_103)">
                  <path
                    d="M76 30C67.75 30 61 23.4625 61 15.4722V14.5278C61 6.53751 67.75 0 76 0C84.25 0 91 6.53751 91 14.5278V15.4722C91 23.4625 84.25 30 76 30Z"
                    fill="#C895E0"
                  />
                </g>
                <path
                  d="M81.4 7.32301V4.80005H73V25.8H81.2923C80.4308 25.7258 79.6769 25.2064 79.6769 24.5386C79.6769 24.1675 79.8923 23.8707 80.2154 23.6481C80.5385 23.4255 80.8615 23.3513 81.2923 23.2771H77.3077V7.32301H81.4Z"
                  fill="#141414"
                />
                <path
                  d="M45.4999 6.92847C46.0916 6.92847 46.5713 7.40816 46.5713 7.9999V14.4285H52.9999C53.5916 14.4285 54.0713 14.9082 54.0713 15.4999C54.0713 16.0916 53.5916 16.5713 52.9999 16.5713H46.5713V22.9999C46.5713 23.5916 46.0916 24.0713 45.4999 24.0713C44.9082 24.0713 44.4285 23.5916 44.4285 22.9999V16.5713H37.9999C37.4082 16.5713 36.9285 16.0916 36.9285 15.4999C36.9285 14.9082 37.4082 14.4285 37.9999 14.4285H44.4285V7.9999C44.4285 7.40816 44.9082 6.92847 45.4999 6.92847Z"
                  fill="black"
                />
              </svg>
              <p style={{ marginTop: "10px" }}>
                The letter (c) represents "creativity" and "coding", embodying
                both the aspects of frontend development.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontStretch: "extra-expanded",
                  fontSize: "18px",
                }}
              >
                The letter (d):
              </p>
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
              <p style={{ marginTop: "10px" }}>
                The c's together depict the letter "d", which also represents
                the first letter of my name Divyashree.
              </p>
              <footer style={{ fontStyle: "italic", fontSize: "10px" }}>
                *The app has been developed with React.js, HTML, CSS, Bootstrap,
                Figma and VS Code.
              </footer>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
