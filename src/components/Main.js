import React, { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";

const App = () => {
  const dummyData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Name ${index + 1}`,
    age: 20 + (index % 10),
  }));

  const columns = ["ID", "Name", "Age"];
  const itemsPerPage = 5;
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container my-4">
      <h2>Dynamic Pagination Table</h2>
      <Table data={currentData} columns={columns} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
