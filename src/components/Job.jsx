import { useState } from "react";

function Job({ id, formData, handleWorkChange }) {
  const [show, setShow] = useState(false);

  function toggleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  const [read, setRead] = useState(false);

  function toggleRead(e) {
    e.preventDefault();
    setRead(!read);
  }

  return (
    <div className="job">
      <h4 className="job-title" onClick={toggleShow}>
        Job {id}
      </h4>

      <div className="job-form">
        {show && (
          <form onSubmit={read ? toggleRead : toggleRead}>
            <label>
              Company name:{" "}
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleWorkChange}
                readOnly={read}
              />
            </label>
            <label>
              Position name:{" "}
              <input
                name="position"
                value={formData.position}
                onChange={handleWorkChange}
                readOnly={read}
              />
            </label>
            <label>
              Date of Completion:{" "}
              <input
                name="dateOf"
                type="date"
                value={formData.dateOf}
                onChange={handleWorkChange}
                readOnly={read}
              />
            </label>
            <button type="submit">{read ? "Edit" : "Save"}</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Job;
