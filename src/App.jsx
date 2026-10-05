import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const totalPages = Math.ceil(students.length / dataPerPage);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;

  const currentData = students.slice(firstIndex, lastIndex);

  const handleRows = (e) => {
    setDataPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Student Data Table</h2>

      <div className="d-flex justify-content-end mb-3">
        <select
          className="form-select w-auto"
          value={dataPerPage}
          onChange={handleRows}
        >
          <option value="5">5 Rows</option>
          <option value="10">10 Rows</option>
          <option value="20">20 Rows</option>
        </select>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>MATHS</th>
              <th>DSA</th>
              <th>NETWORKING</th>
              <th>DBMS</th>
              <th>TOTAL MARKS</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.maths}</td>
                <td>{student.dsa}</td>
                <td>{student.networking}</td>
                <td>{student.dbms}</td>
                <td>{student.totalMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-5">
        <div>
          Page {currentPage} of {totalPages}
        </div>

        <div>
          <button
            className="btn btn-secondary me-2"
            disabled={currentPage === 1}
            onClick={handlePrevious}
          >
            Previous
          </button>

          <button
            className="btn btn-secondary"
            disabled={currentPage === totalPages}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;