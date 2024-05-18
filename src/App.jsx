import { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";
import Job from "./components/Job";

import "./App.css";

function App() {
  /* Personal Info Comp State */
  const [personFormData, setPersonFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    tel: "011 1111 111",
    email: "johndoe@emai.com",
    city: "Doeville",
  });

  function handlePersonChange(e) {
    const { name, value } = e.target;

    setPersonFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  /* Education Comp State */
  const [eduFormData, setEduFormData] = useState({
    schoolName: "University of Doe",
    studyName: "Doescience",
    dateOf: "11/11/2006",
  });

  function handleEduChange(e) {
    const { name, value } = e.target;

    setEduFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  /* Work Comp State */
  const [job1, setJob1] = useState({
    companyName: "Doe Industries",
    position: "Doe Worker",
    dateOf: "11/11/2020",
  });

  function handleWorkChange1(e) {
    const { name, value } = e.target;
    setJob1((prevData) => ({ ...prevData, [name]: value }));
  }

  const [job2, setJob2] = useState({
    companyName: "",
    position: "",
    dateOf: "",
  });

  function handleWorkChange2(e) {
    const { name, value } = e.target;
    setJob2((prevData) => ({ ...prevData, [name]: value }));
  }

  const [job3, setJob3] = useState({
    companyName: "",
    position: "",
    dateOf: "",
  });

  function handleWorkChange3(e) {
    const { name, value } = e.target;
    setJob3((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <>
      <h1 className="app-title">CV Maker</h1>
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
        <main className="page">
          <section className="personal-info">
            <div className="name">
              {personFormData.firstName === "" && personFormData.lastName === ""
                ? "Name"
                : personFormData.firstName + " " + personFormData.lastName}
            </div>
            <div className="contact">
              <p>{personFormData.tel}</p>
              <p>{personFormData.email}</p>
              <p>{personFormData.city}</p>
            </div>
          </section>
          <hr />
          <section className="education">
            <div className="head">Education</div>
            <div>
              <h4>School Name: </h4>
              <p>{eduFormData.schoolName}</p>
              <h4>Study Name: </h4>
              <p>{eduFormData.studyName}</p>
              <h4>Date of Completion</h4>
              <p>{eduFormData.dateOf}</p>
            </div>
          </section>
          <hr />
          <section className="work">
            <div className="head">Work Experience</div>
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
                {job2.companyName && (
                  <>
                    <h4>Company Name: </h4> <p>{job2.companyName}</p>
                  </>
                )}
              </div>
              <div>
                {job2.companyName && (
                  <>
                    <h4>Position: </h4> <p>{job2.position}</p>
                  </>
                )}
              </div>
              <div>
                {job2.companyName && (
                  <>
                    <h4>Date of Completion: </h4> <p>{job2.dateOf}</p>
                  </>
                )}
              </div>
            </div>
            <div className="job">
              <div>
                {job3.companyName && (
                  <>
                    <h4>Company Name: </h4> <p>{job3.companyName}</p>
                  </>
                )}
              </div>
              <div>
                {job3.companyName && (
                  <>
                    <h4>Position: </h4> <p>{job3.position}</p>
                  </>
                )}
              </div>
              <div>
                {job3.companyName && (
                  <>
                    <h4>Date of Completion: </h4> <p>{job3.dateOf}</p>
                  </>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
