import { useState } from "react";

function Education({ formData, onChange }) {
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
    <section>
      <h2 className="section-title" onClick={toggleShow}>
        Education
      </h2>

      {show && (
        <div className="dropdown-menu">
          <form onSubmit={read ? toggleRead : toggleRead}>
            <label>
              School name:{" "}
              <input
                name="schoolName"
                value={formData.schoolName}
                onChange={onChange}
                readOnly={read}
              />
            </label>
            <label>
              Study name:{" "}
              <input
                name="studyName"
                value={formData.studyName}
                onChange={onChange}
                readOnly={read}
              />
            </label>
            <label>
              Date of Completion:{" "}
              <input
                name="dateOf"
                type="date"
                value={formData.dateOf}
                onChange={onChange}
                readOnly={read}
              />
            </label>
            <button type="submit">{read ? "Edit" : "Save"}</button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Education;
