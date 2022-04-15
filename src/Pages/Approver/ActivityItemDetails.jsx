import React from "react";
import { Box } from "@mui/system";
import { Card, Tabs, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import ItemDetailPanel from "./ItemDetailPanel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Card sx={{ p: 3 }}>
         {children}
        </Card>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ActivityItemDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ padding: "8em 10em 1em 10em" }}>
      <div
        style={{
          width: "80%",
          borderColor: "#bdbbbb",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "5px",
          marginTop: "4em",
          padding: "1em",
        }}
      >
        {/* <Box sx={{ width: "100%", borderColor: "red" }}> */}
        <Box sx={{ borderBottom: 1, borderColor: "#bdbbbb" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="Item Details" {...a11yProps(0)} />
            <Tab label="Comment" {...a11yProps(1)} />
            <Tab label="Picture" {...a11yProps(2)} />
            <Tab label="Video" {...a11yProps(3)} />
            <Tab label="Voice" {...a11yProps(4)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <ItemDetailPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        {/* </Box> */}
      </div>
    </div>
  );
};

export default ActivityItemDetails;
