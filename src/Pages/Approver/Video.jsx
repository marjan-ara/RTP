import { Alert, Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, FormControl, IconButton, ImageList, ImageListItem, ImageListItemBar, Input, Snackbar, Typography } from "@mui/material";
import React from "react";
import sample1 from './../../assets/video/sample1.mp4'
import sample2 from './../../assets/video/sample2.mp4'
import sample3 from './../../assets/video/sample3.mp4'
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
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

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => {
                    setOpen(false);
                }}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-around',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >

                <Box className="movie-box">
                    <CardMedia
                        component='video'
                        // className={classes.media}
                        image={sample1}
                        //autoPlay
                        style={{ height: "170px" }}
                        controls
                    />
                    <Typography variant="body2" color="textPrimary"
                        component="p"
                        // className={classes.timer}
                        >
                        by: Marjan
                    </Typography>
                </Box>
                <Box className="movie-box">
                    <CardMedia
                        component='video'
                        // className={classes.media}
                        image={sample2}
                        //autoPlay
                        style={{ height: "170px" }}
                        controls
                    />
                    <Typography variant="body2" color="textPrimary"
                        component="p"
                        // className={classes.timer}
                        >
                        by: Marjan
                    </Typography>
                </Box>
                <Box className="movie-box">
                    <CardMedia
                        component='video'
                        // className={classes.media}
                        image={sample3}
                        //autoPlay
                        style={{ height: "170px" }}
                        controls
                    />
                    <Typography variant="body2" color="textPrimary"
                        component="p"
                        // className={classes.timer}
                        >
                        by: Marjan
                    </Typography>
                </Box>
                {file && (
                    <Box className="movie-box">
                        <CardMedia
                            component='video'
                            image={file}
                            //autoPlay
                            style={{ height: "170px" }}
                            controls
                        />
                        <Typography variant="body2" color="textPrimary"
                            component="p"
                            // className={classes.timer}
                            >
                            by: Marjan
                        </Typography>
                    </Box>)}
            </Box>

            {/* <ImageList sx={{ width: "100%", height: 350 }} cols={3} rowHeight={164}>
                <ImageListItem style={{ marginBottom: "10px" }}>
                    <CardMedia
                        component='video'
                        // className={classes.media}
                        image={sample1}
                        //autoPlay
                        style={{ height: "100%" }}
                        controls
                    />
                    <ImageListItem
                        Bar
                        title="video1"
                        subtitle={<span>by: Marjan </span>}
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem style={{ marginBottom: "10px" }}>
                    <CardMedia
                        component='video'
                        // className={classes.media}
                        image={sample1}
                        //autoPlay
                        style={{ height: "100%" }}
                        controls
                    />
                    <ImageListItemBar
                        title="video2"
                        subtitle={<span>by: Marjan </span>}
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem style={{ marginBottom: "10px" }}>
                    <CardMedia
                        component='video'
                        // className={classes.media}
                        image={sample1}
                        //autoPlay
                        style={{ height: "100%" }}
                        controls
                    />
                    <ImageListItemBar
                        title="video3"
                        subtitle={<span>by: Siavash </span>}
                        position="below"
                    />
                </ImageListItem>
                {file && (
                    <ImageListItem style={{ marginBottom: "10px" }}>
                        <CardMedia
                            component='video'
                            image={file}
                            //autoPlay
                            style={{ height: "100%" }}
                            controls
                        />
                        <ImageListItemBar
                            title="file"
                            subtitle={<span>by: Marjan </span>}
                            position="below"
                        />
                    </ImageListItem>
                )}
            </ImageList> */}
            

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
}

export default Video;