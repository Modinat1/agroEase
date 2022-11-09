import React from "react";
import "./FarmerTable.css";
import { FarmerTableRow } from "./FarmerTableRow";

export const FarmerTable = () => {
  return (
    <>
      {/* Farmers product table */}
      <section className="farmers_product_table_wrapper">
        <table className="farmer_product_table">
          {/* table row head */}
          <tbody>
            <tr className="farmer_product_table_header">
              <th className="farmer_product_th">
                <input type="checkbox" name="checkbox" defaultChecked id />
                <span>ID</span>
              </th>
              <th className="farmer_product_th">Name of Product</th>
              <th className="farmer_product_th">Type of Product</th>
              <th className="farmer_product_th">Default Unit</th>
              <th className="farmer_product_th">Product Description</th>
              <th className="farmer_product_th">Unit cost/item</th>
              <th className="farmer_product_th">Action</th>
            </tr>
            {/* table row 1 */}
            <FarmerTableRow />
            <FarmerTableRow />
            <FarmerTableRow />
            <FarmerTableRow />
            <FarmerTableRow />
          </tbody>
        </table>
      </section>
    </>
  );
};
