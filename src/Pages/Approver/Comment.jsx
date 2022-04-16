import React, { useContext, useEffect } from "react";
import RTPContext from "../../Context/RTPContext";

const Comment = (props) => {
    const {activityId,activityItemId}=props;
    const ctx=useContext(RTPContext);
    useEffect(() => {
        ctx.loadComments(activityId,activityItemId);
      }, []);
    return (
      <div>
          {ctx.comments.map(c=)}
      </div>
    );
  };
  
  export default Comment;