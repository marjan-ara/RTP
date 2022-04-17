import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect,useState } from "react";
import RTPContext from "../../Context/RTPContext";

const Comment = (props) => {
  const { activityId, activityItemId } = props;
  const ctx = useContext(RTPContext);
  const [newComment,setNewComment]=useState("");
  useEffect(() => {
    ctx.loadComments(activityId, activityItemId);
  }, []);
  return (
    <div>
      {ctx.comments.map((c) => (
        <div key={c.id} className="comment-div">
          <p style={{ color: "gray" }}>
            <span style={{ color: "#9c27b0", marginRight: "10px" }}>
              {/* <AccessTimeIcon /> */}
              {c.dateTime}
            </span>
            <span style={{ color: "#9c27b0" }}>
              {/* <PersonIcon /> */}
              {c.userName}
            </span>
          </p>
          <p>{c.comment}</p>
        </div>
      ))}
      <form
        className="form-inline justify-content-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          // defaultValue="Leave Your Comment"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
          fullWidth
          sx={{ mt: 2, mb: 1 }}
        />
        <Button
          variant="outlined"
          sx={{
            float: "right",
            width: "100px",
            borderColor: "#9c27b0",
            color: "#9c27b0",
          }}
          type="submit"
          onClick={()=>{ctx.addComment(
            ctx.selectedItem.activityId,
            ctx.selectedItem.activityItemId,
            newComment
          );
          setNewComment("");
        
        }
          }
        >
          send
        </Button>
      </form>
    </div>
  );
};

export default Comment;