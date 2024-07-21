"use client";
// Theme
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
// React Grid Logic

import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
// Row Data Interface
interface IRow {
  Name: string;
  Address: string;
  Owned_NFTs: number;
  Created_NFTs: number;
}

// Create new GridExample component
const Page = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([
    {
      Name: "Tesla",
      Address: "0xadfad23423",
      Owned_NFTs: 64950,
      Created_NFTs: 20,
    },
    {
      Name: "Ford",
      Address: "0xsafaa45sfs",
      Owned_NFTs: 33850,
      Created_NFTs: 20,
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "Name" },
    { field: "Address" },
    { field: "Owned_NFTs" },
    { field: "Created_NFTs" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);
  // Container: Defines the grid's theme & dimensions.
  return (
    <div>
      <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Users List
      </h1>
      <div
        className={"ag-theme-quartz"}
        style={{ width: "100%", height: "100%" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          suppressRowClickSelection={true}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 25, 50]}
        />
      </div>
    </div>
  );
};

export default Page;
