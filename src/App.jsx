import { useState } from "react";

import "./App.css";

function Education({
  show,
  toggleShow,
  formData,
  onChange,
  toggleRead,
  readBool,
}) {
  return (
    <section>
      <h2 className="section-title" onClick={toggleShow}>
        Education
      </h2>

      {show && (
        <div className="dropdown-menu">
          <form onSubmit={readBool ? toggleRead : toggleRead}>
            <label>
              First name:{" "}
              <input
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                readOnly={readBool}
              />
            </label>
            <label>
              Last name:{" "}
              <input
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                readOnly={readBool}
              />
            </label>
            <label>
              Tel:{" "}
              <input
                name="tel"
                value={formData.tel}
                onChange={onChange}
                readOnly={readBool}
              />
            </label>

            <label>
              Email:{" "}
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={onChange}
                readOnly={readBool}
              />
            </label>
            <label>
              City:{" "}
              <input
                name="city"
                type="city"
                value={formData.city}
                onChange={onChange}
                readOnly={readBool}
              />
            </label>
            <button type="submit">{readBool ? "Edit" : "Save"}</button>
          </form>
        </div>
      )}
    </section>
  );
}

function App() {
  /* Education Comp State */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    city: "",
  });

  const [read, setRead] = useState(false);
  const [show, setShow] = useState(false);

  function toggleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function toggleRead(e) {
    e.preventDefault();
    setRead(!read);
  }

  return (
    <>
      <h1 className="app-title">Cv Maker</h1>
      <div className="container">
        <div className="information">
          <Education
            show={show}
            toggleShow={toggleShow}
            formData={formData}
            onChange={handleChange}
            toggleRead={toggleRead}
            readBool={read}
          ></Education>
        </div>
        <div className="page">
          <section className="personal-info">
            <h2>
              {formData.firstName} {formData.lastName}
            </h2>
            <div className="contact">
              <p>{formData.tel}</p>
              <p>{formData.email}</p>
              <p>{formData.city}</p>
            </div>
            <h3></h3>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
