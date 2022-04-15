import React, { useContext, useState, useEffect } from "react";
import { Box } from "@mui/system";
import RTPContext from "../../Context/RTPContext";
import { Grid, TextField } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

const ItemDetailPanel = () => {
  const ctx = useContext(RTPContext);
//   const [item, setItem] = useState({});
  useEffect(() => {
    console.log("ctx.selectedItem : ", ctx.selectedItem);
    // setItem();
  }, []);

  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        borderRadius: 1,
      }}
    >
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <TextField
            id="standard-read-only-input"
            label="Activity Name"
            defaultValue={ctx.selectedItem.activityName}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: "#9c27b0",
                [`&.${inputLabelClasses.shrink}`]: {
                  // set the color of the label when shrinked (usually when the TextField is focused)
                  color: "#9c27b0",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <TextField
            id="standard-read-only-input"
            label="Instance Name"
            defaultValue={ctx.selectedItem.instanceName}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            InputLabelProps={{
              sx: {
                color: "#9c27b0",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "#9c27b0",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <TextField
            id="standard-read-only-input"
            label="Owner"
            defaultValue={ctx.selectedItem.owner}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            InputLabelProps={{
              sx: {
                color: "#9c27b0",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "#9c27b0",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <TextField
            id="standard-read-only-input"
            label="Scheduled Time"
            defaultValue={ctx.selectedItem.scheduledTime}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            InputLabelProps={{
              sx: {
                color: "#9c27b0",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "#9c27b0",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <TextField
            id="standard-read-only-input"
            label="Item Name"
            defaultValue={ctx.selectedItem.itemName}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            InputLabelProps={{
              sx: {
                color: "#9c27b0",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "#9c27b0",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <TextField
            id="standard-read-only-input"
            label="Item Status"
            defaultValue={ctx.selectedItem.itemStatus}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            InputLabelProps={{
              sx: {
                color: "#9c27b0",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "#9c27b0",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <TextField
            id="standard-read-only-input"
            label="Palanned Needed Time"
            defaultValue={ctx.selectedItem.palannedNeededTime}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            InputLabelProps={{
              sx: {
                color: "#9c27b0",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "#9c27b0",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <TextField
            id="standard-read-only-input"
            label="Start"
            defaultValue={ctx.selectedItem.itemStart}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            InputLabelProps={{
              sx: {
                color: "#9c27b0",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "#9c27b0",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <TextField
            id="standard-read-only-input"
            label="End"
            defaultValue={ctx.selectedItem.itemEnd}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            InputLabelProps={{
              sx: {
                color: "#9c27b0",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "#9c27b0",
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetailPanel;
