import { TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import RTPContext from "../../Context/RTPContext";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

const Comment = (props) => {
  const { activityId, activityItemId } = props;
  const ctx = useContext(RTPContext);
  useEffect(() => {
    ctx.loadComments(activityId, activityItemId);
    console.log(ctx.comments);
  }, []);
  return (
    <div>
      {ctx.comments.map(c => (
        <div key={c.id} className="comment-div">
          <p style={{ color: "gray" }}><span><AccessTimeIcon />{c.dateTime}
            <PersonIcon />{c.userName}</span></p>
          <p>{c.comment}</p>
        </div>
      ))}
      <TextField
        id="outlined-multiline-static"
        label="Comment"
        multiline
        rows={4}
        // defaultValue="Leave Your Comment"
        fullWidth
        sx={{ mt: 2}} 
      />
    </div>
  );
};

export default Comment;