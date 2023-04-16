import React from "react";
import "../styles/Table.css" ; 



function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Vendor Name</th>
          <th>Pick Up Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order) => (
          <tr key={order.orderId}>
            <td>{order.orderid}</td>
            <td>{order.Vendorname}</td>
            <td>{order.pickupdate}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;