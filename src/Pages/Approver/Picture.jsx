import {
  Alert,
  Button,
  FormControl,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import RTPContext from "../../Context/RTPContext";


const Item = (props) => {
  const { image, user } = props;
  return (
    <ImageListItem>
      <img
        src={image}
        srcSet={image}
       alt="name"
        style={{ height: "100%" }}
      />
      <ImageListItemBar
        title="image"
        subtitle={<span>by: {user} </span>}
        position="below"
      />
    </ImageListItem>
  );
}



const Picture = () => {
  const [open, setOpen] = React.useState(false);
  const ctx = useContext(RTPContext);

  const activityId = ctx.selectedItem.activityId;
  const activityItemId = ctx.selectedItem.activityItemId;

  useEffect(() => {
    ctx.loadImages(activityId, activityItemId);
  }, []);

  const handleChange = (event) => {
    let fileUploaded = event.target.files[0];
    let fileType = fileUploaded.name
      .substr(fileUploaded.name.lastIndexOf(".") + 1)
      .toLowerCase();
    if (fileType !== "jpg" && fileType !== "jpeg" && fileType !== "png") {
      setOpen(true);
    } else {
      ctx.addImage( ctx.selectedItem.activityId,
        ctx.selectedItem.activityItemId,URL.createObjectURL(fileUploaded));
    };
  };

  return (
    <div style={{ justifyContent: "center" }}>
      <ImageList sx={{ width: "100%", height: 350 }} cols={3} rowHeight={164}>
        {ctx.images.map((im) => (
          <Item key={im.id} image={im.img} user={im.userName} />
        ))
        }
      </ImageList>

      <FormControl className="upload-img-form">
        <Input
          accept="image/*"
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
              width: "200px",
              borderColor: "#9c27b0",
              color: "#9c27b0",
            }}
            component="span"
          >
            Upload Image
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

export default Picture;
