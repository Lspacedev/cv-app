import { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";
import Job from "./components/Job";

import "./App.css";

function App() {
  /* Personal Info Comp State */
  const [personFormData, setPersonFormData] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    city: "",
  });

  function handlePersonChange(e) {
    const { name, value } = e.target;

    setPersonFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  /* Education Comp State */
  const [eduFormData, setEduFormData] = useState({
    schoolName: "",
    studyName: "",
    dateOf: "",
  });

  function handleEduChange(e) {
    const { name, value } = e.target;

    setEduFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  /* Work Comp State */
  const [job1, setJob1] = useState({
    companyName: "",
    studyName: "",
    dateOf: "",
  });

  function handleWorkChange1(e) {
    const { name, value } = e.target;
    setJob1((prevData) => ({ ...prevData, [name]: value }));
  }

  const [job2, setJob2] = useState({
    companyName: "",
    studyName: "",
    dateOf: "",
  });

  function handleWorkChange2(e) {
    const { name, value } = e.target;
    setJob2((prevData) => ({ ...prevData, [name]: value }));
  }

  const [job3, setJob3] = useState({
    companyName: "",
    studyName: "",
    dateOf: "",
  });

  function handleWorkChange3(e) {
    const { name, value } = e.target;
    setJob3((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <>
      <h1 className="app-title">Cv Maker</h1>
      <div className="container">
        <div className="information">
          <Personal
            formData={personFormData}
            onChange={handlePersonChange}
          ></Personal>
          <Education
            formData={eduFormData}
            onChange={handleEduChange}
          ></Education>
          <Work>
            <Job
              id={1}
              formData={job1}
              handleWorkChange={handleWorkChange1}
            ></Job>
            <Job
              id={2}
              formData={job2}
              handleWorkChange={handleWorkChange2}
            ></Job>
            <Job
              id={3}
              formData={job3}
              handleWorkChange={handleWorkChange3}
            ></Job>
          </Work>
        </div>
        <div className="page">
          <section className="personal-info">
            <h2>
              {personFormData.firstName === "" && personFormData.lastName === ""
                ? "Name"
                : personFormData.firstName + " " + personFormData.lastName}
            </h2>
            <div className="contact">
              <p>{personFormData.tel}</p>
              <p>{personFormData.email}</p>
              <p>{personFormData.city}</p>
            </div>
          </section>

          <section className="education">
            <h2>Education</h2>
            <div>
              <p>{eduFormData.schoolName}</p>
              <p>{eduFormData.studyName}</p>
              <p>{eduFormData.dateOf}</p>
            </div>
          </section>
          <section className="work">
            <div className="job">
              <h3>{job1.companyName && "Job 1"}</h3>
              <div>
                <h4>Company Name: </h4> <p>{job1.companyName}</p>
              </div>
              <div>
                <h4>Position: </h4> <p>{job1.position}</p>
              </div>
              <div>
                <h4>Date of Completion: </h4> <p>{job1.dateOf}</p>
              </div>
            </div>
            <div className="job">
              <h3>{job2.companyName && "Job 2"}</h3>
              <div>
                <h4>Company Name: </h4> <p>{job2.companyName}</p>
              </div>
              <div>
                <h4>Position: </h4> <p>{job2.position}</p>
              </div>
              <div>
                <h4>Date of Completion: </h4> <p>{job2.dateOf}</p>
              </div>
            </div>
            <div className="job">
              <h3>{job3.companyName && "Job 3"}</h3>
              <div>
                <h4>Company Name: </h4> <p>{job3.companyName}</p>
              </div>
              <div>
                <h4>Position: </h4> <p>{job3.position}</p>
              </div>
              <div>
                <h4>Date of Completion: </h4> <p>{job3.dateOf}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
