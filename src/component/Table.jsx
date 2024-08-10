import React from "react";

function Table() {
  return (
    <>
     <>
  ... ... ...
  <table className="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">image</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>akash</td>
      <td></td>
      <td>2673498</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>arpit</td>
      <td> <img src="/public/download (1).png" className="d-block w-100" alt="..." /></td>
      <td>368499</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>ashirwad</td>
      <td>368338</td>
    </tr>
  </tbody>
</table>

</>

    </>
  );
}

export default Table;
