import {
  Alert,
  Box,
  Button,
  CardMedia,
  FormControl,
  Input,
  Snackbar,
  Typography,
} from "@mui/material";
import React from "react";
import sample1 from "./../../assets/video/sample1.mp4";
import sample2 from "./../../assets/video/sample2.mp4";
import sample3 from "./../../assets/video/sample3.mp4";
import { useState } from "react";
import "./Approver.css";
const Video = () => {
  const [file, setFile] = useState(undefined);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    let fileUploaded = event.target.files[0];
    let fileType = fileUploaded.name
      .substr(fileUploaded.name.lastIndexOf(".") + 1)
      .toLowerCase();
    if (fileType != "mp4") {
      setOpen(true);
    } else setFile(URL.createObjectURL(fileUploaded));
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-around",
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Box className="movie-box">
          <CardMedia
            component="video"
            image={sample1}
            style={{ height: "170px" }}
            controls
          />
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
          >
            by: Marjan
          </Typography>
        </Box>
        <Box className="movie-box">
          <CardMedia
            component="video"
            image={sample2}
            style={{ height: "170px" }}
            controls
          />
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
          >
            by: Marjan
          </Typography>
        </Box>
        <Box className="movie-box">
          <CardMedia
            component="video"
            image={sample3}
            style={{ height: "170px" }}
            controls
          />
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
          >
            by: Marjan
          </Typography>
        </Box>
        {file && (
          <Box className="movie-box">
            <CardMedia
              component="video"
              image={file}
              style={{ height: "170px" }}
              controls
            />
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
            >
              by: Marjan
            </Typography>
          </Box>
        )}
      </Box>

      <FormControl className="upload-video-form">
        <Input
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleChange}
        />

        <label htmlFor="raised-button-file">
          <Button
            variant="outlined"
            sx={{
              float: "right",
              width: "200px",
              borderColor: "#9c27b0",
              color: "#9c27b0",
              marginBottom: "5px",
            }}
            component="span"
          >
            Upload video
          </Button>
        </label>
      </FormControl>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          FILE FORMAT IS NOT SUPPORTED
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Video;
