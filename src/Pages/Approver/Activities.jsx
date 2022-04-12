import {
  Collapse,
  IconButton,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { getToBeApprovedActivities } from "../../api/fakeApi/ToBeApprovedActivities";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { DataGrid } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert  from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(getToBeApprovedActivities);
  }, []);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function RowItem(props) {
    const { row } = props;
    const [rateVal, setRateVal] = useState(row.rate);
    const hiddenFileInput = useRef(null);
    const handleFileChange = async (event) => {
      let fileUploaded = event.target.files[0];
      let fileName = fileUploaded.name;
      let fileType = fileUploaded.name
        .substr(fileUploaded.name.lastIndexOf(".") + 1)
        .toLowerCase();
      if (fileType != "jpg" || fileType != "png" || fileType != "jpeg") {
        handleClick();
      }
    };
    const handleFileUploadClick = (event) => {
      hiddenFileInput.current.click();
    };
    return (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.palannedNeededTime}</TableCell>
        <TableCell>{row.start}</TableCell>
        <TableCell>{row.end}</TableCell>
        {/* <TableCell>{row.rate}</TableCell> */}
        <TableCell>
          <Rating
            name="simple-controlled"
            value={rateVal}
            onChange={(event, newValue) => {
              // setValue(newValue);
              setRateVal(newValue);
            }}
          />
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            // onClick={() => setOpen(!open)}
            onClick={handleFileUploadClick}
          >
            <AttachFileIcon />
            <input
              type="file"
              ref={hiddenFileInput}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell scope="row">{row.id}</TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.instanceName}</TableCell>
          <TableCell>{row.owner}</TableCell>
          <TableCell>{row.scheduledTime}</TableCell>
          <TableCell>{row.entry}</TableCell>
          <TableCell>{row.exit}</TableCell>
          <TableCell>{row.worker}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Items
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Item Name</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Planned Time</TableCell>
                      <TableCell>Start</TableCell>
                      <TableCell>End</TableCell>
                      <TableCell>Rate</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.items.map((itemRow) => (
                      <RowItem key={itemRow.id} row={itemRow} />
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  // Row.propTypes = {
  //   row: PropTypes.shape({
  //     calories: PropTypes.number.isRequired,
  //     carbs: PropTypes.number.isRequired,
  //     fat: PropTypes.number.isRequired,
  //     history: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         amount: PropTypes.number.isRequired,
  //         customerId: PropTypes.string.isRequired,
  //         date: PropTypes.string.isRequired,
  //       })
  //     ).isRequired,
  //     name: PropTypes.string.isRequired,
  //     price: PropTypes.number.isRequired,
  //     protein: PropTypes.number.isRequired,
  //   }).isRequired,
  // };

  return (
    <div style={{ padding: "8em 10em 1em 10em" }}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Row</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>InstanceName</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>scheduledTime</TableCell>
              <TableCell>Entry</TableCell>
              <TableCell>Exit</TableCell>
              <TableCell>Worker</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
         The file type uor are trying to upload is not supported!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Activities;
