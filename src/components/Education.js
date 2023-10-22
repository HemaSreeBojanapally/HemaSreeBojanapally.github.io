import React from "react";
import NEULogo from "../assets/images/education/nulogo.png";
import CVRLogo from "../assets/images/education/cvrlogo.png";
import "../assets/css/education.css";
import Fade from "react-reveal/Fade";

const Education = (props) => {
    return (
        <React.Fragment>
            <div className="educationSection">
                <div className="container sectionTitleContainer">
                    <b className="sectionTitle">Education</b>
                </div>
                <div className="container">
                    <Fade bottom>
                        <div className="row p-2 m-2">
                            <div className="col-1 sectionImage">
                                <a href={"https://www.northeastern.edu/"} target={"_blank"} rel="noopener noreferrer">
                                    <img
                                        src={NEULogo}
                                        alt={"Northeastern"}
                                        height={40}
                                    />
                                </a>
                            </div>
                            <section className="col school">
                                <b> Northeastern University, Boston</b>
                                <br />
                                <div className="major">
                                    <i>
                                        Master of Science in Information Systems
                                    </i>
                                    <br /> <br />
                                    <b>Course work:</b> Application Development, Object Oriented Design, Web Design and User Experience Engineering, User Experience Design and Testing, Program Structures and Algorithms, Data Science Engineering Methods
                                    <br /><br />
                                    <a href="https://drive.google.com/file/d/1PgmfIVqL_BpqXVuEtATlU_p-tXIAF5Ve/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        See transcript
                                    </a>
                                </div>
                            </section>
                            <section className="col-2">
                                May, 2024
                            </section>
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className="row p-2 m-2">
                            <div className="col-1 sectionImage">
                                <a
                                    href="https://cvr.ac.in/home4/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={CVRLogo}
                                        alt={"Cvr College"}
                                        height={40}
                                    />
                                </a>
                            </div>
                            <section className="col school">
                                <b>CVR College of Engineering, Hyderabad</b>
                                <br />
                                <div className="major">
                                    <i>Bachelor of Technology, Electronics and Insturmentation Engineering</i>
                                    <br /> <br />
                                    <b>Course work:</b> Data Structures and Algorithms, Object Oriented Programming in Java, Computer Organization and Architecture
                                    <br /><br />
                                    <a href="https://drive.google.com/file/d/1V9mDGv3i-eHZG9ooOcav8j55SFS0AMDQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        See transcript
                                    </a>
                                </div>
                            </section>
                            <section className="col-2">
                                May, 2018
                            </section>
                        </div>
                    </Fade>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Education;
