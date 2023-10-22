import React from "react";
//import { SiOracle } from "react-icons/si";
//import SAClogo from "../assets/images/work/saclogo.jpeg";
import DXClogo from "../assets/images/work/dxc.png";
import Accenturelogo from "../assets/images/work/accenture.png";
import "../assets/css/work.css";
import Fade from "react-reveal/Fade";

const Work = (props) => {
  return (
    <React.Fragment>
      <div className="container-fluid workSection">
        <div className="container sectionTitleContainer">
          <b className="sectionTitle">Work</b>
        </div>
        <div className="container">
          <Fade bottom>
            <div className="row p-2 m-2">
              <div className="col-1 sectionImage">
                <img
                  src={Accenturelogo}
                  alt={"Accenture"}
                  height={30}
                  style={{ borderRadius: "5px", paddingTop: "10px" }}
                />
              </div>
              <section className="col col-sm col-md role">
                <b> Application Development Analyst</b>
                <br />
                <div className="org">
                  <i>Accenture</i>
                  <br /> <br />
                  <div className="work">
                    <ul>
                      <li>
                      Configured Validation Rules, Workflows, Process Builders, Flows and Email alerts using the Salesforce CRM.
                      </li>
                      <li>
                      Streamlined Salesforce workflows using Data Loader, and VS Code with Extension Pack for optimizing data migrations, ensuring seamless transfers, minimizing downtime, and enhancing productivity.
                      </li>
                      <li>
                      Implemented Case Assignment, Auto Response and Escalation Rules using Service Cloud for Case management.
                      </li>
                      <li>
                      Worked on the visual studio for creating the Pull Requests and deployed the code to higher environments.
                      </li>
                      <li>
                      Refactored Warranty case management where the customers were able to directly create cases.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="col-2 col-sm-2 col-md-2">
                June, 2021 - August, 2022
              </section>
            </div>
          </Fade>
          <Fade bottom>
            <div className="row p-2 m-2">
              <div className="col-1 sectionImage">
                <img
                  src={DXClogo}
                  alt={"DXC"}
                  height={40}
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <section className="col col-sm col-md role">
                <b> Associate Application Developer</b>
                <br />
                <div className="org">
                  <i>DXC Technology</i>
                  <br /> <br />
                  <div className="work">
                    <ul>
                      <li>
                      Developed Apex triggers and Apex Test classes for various functional needs in the Application using Force.com IDE.
                      </li>
                      <li>
                      Experienced in creating Profile Assignment, Permission Set Assignment, Queue Assignment, Users and Sharing rules, Reports and Dashboards through Salesforce CRM to fulfill the needs of the organization.
                      </li>
                      <li>
                      Developed APIs to integrate CRM application with third party applications.
                      </li>
                      <li>
                      Accomplished queue based Omni channel routing model where cases would be routed to user based on the availability.
                      </li>
                      <li>
                      Involved in the Service Cloud implementation and reduced the average case resolution time by 2 days.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="col-2 col-sm-2 col-md-2">
                July, 2018 - June, 2021
              </section>
            </div>
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
