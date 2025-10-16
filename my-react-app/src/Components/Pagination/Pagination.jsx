import React from "react";
import "./Pagination.css"; // optional for styling

const Pagination = ({ pageNo, setPageNo, totalPages = 10 }) => {
  const handleNext = () => {
    if (pageNo < totalPages) {
      setPageNo(pageNo + 1);
    }
  };

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  // Previous 3 pages (if available)
  const prevPages = Array.from({ length: 3 }, (_, i) => pageNo - 3 + i).filter(
    (num) => num > 0
  );

  // Current page + next 3 pages (within total)
  const nextPages = Array.from({ length: 4 }, (_, i) => pageNo + i).filter(
    (num) => num <= totalPages
  );

  // Merge and remove duplicates
  const paginationArray = [...new Set([...prevPages, ...nextPages])];

  return (
    <div className="pagination-container">
      {pageNo > 1 && (
        <div onClick={handlePrev} className="page-btn">
          {"<"}
        </div>
      )}

      {paginationArray.map((value) => (
        <div
          key={value}
          onClick={() => setPageNo(value)}
          className={`page-btn ${value === pageNo ? "active" : ""}`}
        >
          {value}
        </div>
      ))}

      {pageNo < totalPages && (
        <div onClick={handleNext} className="page-btn">
          {">"}
        </div>
      )}
    </div>
  );
};

export default Pagination;
