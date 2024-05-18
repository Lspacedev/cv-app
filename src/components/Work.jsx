import { useState } from "react";

function Work({ children }) {
  const [show, setShow] = useState(false);

  function toggleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  /*const [num, setNum] = useState(false);

  const children = [];
  for (var i = 0; i < num; i += 1) {
    children.push(
      <Job
        key={i}
        id={i}
        show={show}
        read={read}
        toggleRead={toggleRead}
        handleJobs={handleJobs}
        handleJobArr={handleJobArr}
      />,
    );
  }

  const addChild = () => {
    setNum(num + 1);
    handleJobs(`Job ${num + 1}`);
  };*/

  return (
    <section>
      <h2 className="section-title" onClick={toggleShow}>
        Work
      </h2>

      {show && (
        <div className="dropdown-menu">
          <div className="jobs">{children}</div>
        </div>
      )}
    </section>
  );
}

export default Work;
