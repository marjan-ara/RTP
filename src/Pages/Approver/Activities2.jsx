import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getToBeApprovedActivities } from "../../api/fakeApi/ToBeApprovedActivities";
import { margin } from "@mui/system";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    setActivities(getToBeApprovedActivities());
  }, []);

  //   const rows = Activities;
  const columns = [
    {
      field: "id",
      headerName: "Row",
      width: 50,
      headerClassName: "grif-header",
    },
    {
      field: "name",
      headerName: "Activity",
      width: 210,
      headerClassName: "grif-header",
    },
    {
      field: "instanceName",
      headerName: "Instance",
      width: 210,
      headerClassName: "grif-header",
    },
    {
      field: "owner",
      headerName: "Owner",
      width: 150,
      headerClassName: "grif-header",
    },
    {
      field: "scheduledTime",
      headerName: "Scheduled Time",
      width: 150,
      filterable: false,
      headerClassName: "grif-header",
    },
    {
      field: "entry",
      headerName: "Entry",
      width: 100,
      filterable: false,
      headerClassName: "grif-header",
    },
    {
      field: "exit",
      headerName: "Exit",
      width: 100,
      filterable: false,
      headerClassName: "grif-header",
    },
    {
      field: "worker",
      headerName: "Worker Name",
      width: 150,
      headerClassName: "grif-header",
    },
  ];

     
  return (
    // <div className="grid-div">
    <div style={{ padding: "8em 10em 1em 10em" }}>

      <DataGrid
        sx={{
          border: "solid",
          borderWidth: "thin",
          margin: "1.5em",
          minHeight: "500px",
          backgroundColor: "white",
        }}
        className="grid-style"
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
