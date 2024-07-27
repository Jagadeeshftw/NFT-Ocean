"use client";
import { initProvider } from "@/lib";
import { allUsers } from "@/lib/formactions";
// Theme
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
// React Grid Logic

import React, { useEffect, useMemo, useState } from "react";

// Row Data Interface
interface IRow {
  address: string;
  name: string;
  email: string;
  nftCreated: number; // New field for number of NFTs created
  soldNftCount: number; // New field for number of sold NFTs
  ownedNftCount: number; // New field for number of owned NFTs
}
interface userType {
  id: number;
  address: string;
  name: string;
  email: string;

}
type Item = {
  price: string;
  tokenId: string;
  seller: string;
  owner: string;
  sold: boolean;
  image: string;
  name: string;
  desc: string;
};

// Create new GridExample component
const Page = () => {
  const [rowData, setRowData] = useState<IRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await allUsers();
        // Fetch all items created
        const { allItemsCreated } = await initProvider();

        // Create a map to count NFTs created, sold, and owned by each address
        const nftCountMap: { [address: string]: { created: number, sold: number, owned: number } } = {};
        allItemsCreated.forEach((item: Item) => {
          // Count created NFTs
          if (!nftCountMap[item.seller]) {
            nftCountMap[item.seller] = { created: 0, sold: 0, owned: 0 };
          }
          nftCountMap[item.seller].created++;

          // Count sold NFTs
          if (item.sold) {
            nftCountMap[item.seller].sold++;
          }

          // Count owned NFTs
          if (!nftCountMap[item.owner]) {
            nftCountMap[item.owner] = { created: 0, sold: 0, owned: 0 };
          }
          nftCountMap[item.owner].owned++;
        });

        // Add nftCreated, soldNftCount, and ownedNftCount fields to each user
        const updatedUsers = users.map((user: userType) => ({
          ...user,
          nftCreated: nftCountMap[user.address]?.created || 0,
          soldNftCount: nftCountMap[user.address]?.sold || 0,
          ownedNftCount: nftCountMap[user.address]?.owned || 0,
        }));

        setRowData(updatedUsers);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "address" },
    { field: "name" },
    { field: "email" },
    { field: "nftCreated", headerName: "NFTs Created" }, // New column for NFTs created
    { field: "soldNftCount", headerName: "Sold NFTs" }, // New column for Sold NFTs
    { field: "ownedNftCount", headerName: "Owned NFTs" }, // New column for Owned NFTs
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
