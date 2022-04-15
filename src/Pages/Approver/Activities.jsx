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
import React, { useContext, useRef } from "react";
import { useEffect, useState } from "react";
import { getToBeApprovedActivities } from "../../api/fakeApi/ToBeApprovedActivities";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { DataGrid } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import RTPContext from "./../../Context/RTPContext";
import ActivityItemDetails from "./ActivityItemDetails";
import { Link } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Activities = () => {
  const ctx = useContext(RTPContext);
  // const [activities, setActivities] = useState([]);

  useEffect(() => {
    ctx.setToBeApproved(getToBeApprovedActivities());
  }, []);

  function RowItem(props) {
    const { row, rowId } = props;
    const [rateVal, setRateVal] = useState(row.rate);

    return (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.palannedNeededTime}</TableCell>
        <TableCell>{row.start}</TableCell>
        <TableCell>{row.end}</TableCell>
        <TableCell>
          <Rating
            name="simple-controlled"
            value={rateVal}
            onChange={(event, newValue) => {
              ctx.ChangeRate(rowId, row.id, newValue);
            }}
          />
        </TableCell>
        <TableCell>
          <Link
            to="/ActivityItemDetails"
            className="btn btn-primary"
            onClick={() => ctx.getSelectedItemInfo(rowId, row.id)}
          >
            <ReadMoreIcon />
          </Link>
          {/* <IconButton
            aria-label="expand row"
            size="small"
            onClick={handleFileUploadClick}
          > */}

          {/* </IconButton> */}
        </TableCell>
      </TableRow>
    );
  }

  function Row(props) {
    const { row } = props;
    //  const [open, setOpen] = useState(false);
    const open = row.open;
    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => ctx.changeOpenState(row.id)}
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
                      <RowItem key={itemRow.id} rowId={row.id} row={itemRow} />
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
              <TableCell></TableCell>
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
            {ctx.tobeApprovedActivities.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
    </div>
  );
};

export default Activities;
