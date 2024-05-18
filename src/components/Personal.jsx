import { useState } from "react";

function Personal({ formData, onChange }) {
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
        Personal Information
      </h2>

      {show && (
        <div className="dropdown-menu">
          <form onSubmit={read ? toggleRead : toggleRead}>
            <label>
              First name:{" "}
              <input
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                readOnly={read}
              />
            </label>
            <label>
              Last name:{" "}
              <input
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                readOnly={read}
              />
            </label>
            <label>
              Tel:{" "}
              <input
                name="tel"
                value={formData.tel}
                onChange={onChange}
                readOnly={read}
              />
            </label>

            <label>
              Email:{" "}
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={onChange}
                readOnly={read}
              />
            </label>
            <label>
              City:{" "}
              <input
                name="city"
                type="city"
                value={formData.city}
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

export default Personal;
