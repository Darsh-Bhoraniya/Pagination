import React, { useState } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  // Dynamically generate 200 users
  const dummyData = Array.from({ length: 200 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    age: 20 + (index % 10),
    email: `user${index + 1}@Temp.com`,
  }));

  const columns = ["ID", "Name", "Age", "Email"];
  const itemsPerPage = 10;
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentData = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">
        <i className="bi bi-table"></i> Dynamic Pagination Table
      </h2>
      <Table data={currentData} columns={columns} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
