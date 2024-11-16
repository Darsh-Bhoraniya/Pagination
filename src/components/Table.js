import React from "react";

const Table = ({ data, columns }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">User Data Table</h5>
      </div>
      <div className="card-body p-0">
        <table className="table table-bordered table-hover table-striped mb-0">
          <thead className="bg-light">
            <tr>
              {columns.map((col) => (
                <th key={col} className="text-center">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-center">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
