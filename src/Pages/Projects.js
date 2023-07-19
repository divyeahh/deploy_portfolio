import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import project1 from "../assets/Screenshot (42).png";
import project2 from "../assets/Screenshot (46).png";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12">.</div>
          <div className="col-12">.</div>
          <div className="col-12">.</div>
          <div className="col-12">.</div>
          {/* <div className="col-12">aaaa</div> */}
          {/* <div className="col-12">aaaa</div> */}
          <div className="col-6">
            <div
              class="card mx-auto"
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() =>
                navigate("/detailedProject", { state: { item: 1 } })
              }
            >
              <img src={project1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-text" style={{ color: "#c0c0c0" }}>
                  CMS - OTT Platform
                </h5>

                <p class="card-text" style={{ color: "#c0c0c0" }}>
                  Migration of an entire CMS from Angular to React.js with
                  additional implementations.
                </p>
                <a
                  href=""
                  class="btn btn-secondary"
                  onClick={() =>
                    navigate("/detailedProject", { state: { item: 1 } })
                  }
                >
                  ...
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              class="card mx-auto"
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() =>
                navigate("/detailedProject", { state: { item: 2 } })
              }
            >
              <img src={project2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#c0c0c0" }}>
                  News Application - (MVP)
                </h5>
                <p class="card-text" style={{ color: "#c0c0c0" }}>
                  Gathering requirements for a news application and developing a
                  CMS accordingly.
                </p>
                <a
                  href=""
                  class="btn btn-secondary"
                  onClick={() =>
                    navigate("/detailedProject", { state: { item: 2 } })
                  }
                >
                  ...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
