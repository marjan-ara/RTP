import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getToBeApprovedActivities } from "./../../api/fakeApi/ToBeApprovedActivities";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    setActivities(getToBeApprovedActivities());
  }, []);

  //   const rows = Activities;
  const columns = [
    { field: "id", headerName: "Row", width: 50 },
    { field: "name", headerName: "Activity", width: 300 },
    { field: "instanceName", headerName: "Instance", width: 300 },
    { field: "owner", headerName: "Owner", width: 150 },
    {
      field: "scheduledTime",
      headerName: "Scheduled Time",
      width: 150,
      filterable: false,
    },
    { field: "entry", headerName: "Entry", width: 100, filterable: false },
    { field: "exit", headerName: "Exit", width: 100, filterable: false },
    { field: "worker", headerName: "Worker Name", width: 150 },
  ];

     
  return (
    <div className="grid-div">
      <DataGrid
        rows={activities}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div>
  );
};

export default Activities;
