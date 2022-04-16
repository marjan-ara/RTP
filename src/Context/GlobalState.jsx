import React from "react";
import RTPContext from "./RTPContext";
import { useState } from "react";
import { GetComments } from "../api/fakeApi/GetComments";

const GlobalState = (props) => {
  const [tobeApprovedActivities, setTobeApprovedActivities] = useState([]);
  const setToBeApproved = (activityList) => {
    setTobeApprovedActivities(activityList);
  };
  const ChangeRate = (activityId, itemId, rate) => {
    let activityLst = [...tobeApprovedActivities];
    const index1 = activityLst.findIndex((i) => i.id === activityId);
    const index2 = activityLst[index1].items.findIndex((j) => j.id === itemId);
    activityLst[index1].items[index2].rate = rate;
    setTobeApprovedActivities(activityLst);
  };

  const [selectedItem, setselectedItem] = useState({});
  const getSelectedItemInfo = (activityId, itemId) => {
    console.log("context : ", activityId, itemId);
    let index1 = tobeApprovedActivities.findIndex((i) => i.id === activityId);
    let activity = tobeApprovedActivities[index1];
    let index2 = tobeApprovedActivities[index1].items.findIndex(
      (i) => i.id === itemId
    );
    let activityItem = activity.items[index2];
    let selectedItemInfo = {
      activityId: activityId,
      activityItemId: itemId,
      activityName: activity.name,
      instanceName: activity.instanceName,
      owner: activity.owner,
      scheduledTime: activity.scheduledTime,
      itemName: activityItem.name,
      itemStatus: activityItem.status,
      palannedNeededTime: activityItem.palannedNeededTime,
      itemStart: activityItem.start,
      itemEnd: activityItem.end,
    };
    setselectedItem(selectedItemInfo);
  };

  const changeOpenState = (rowId) => {
    let rows = [...tobeApprovedActivities];
    let index1 = rows.findIndex((i) => i.id === rowId);
    rows[index1].open = !rows[index1].open;
    setTobeApprovedActivities(rows);
  };

  const [comments, setComments] = useState([]);
  const loadComments = (activityId, activityItemId) => {
    let commentList = GetComments();
    commentList = commentList.filter(
      (c) => c.rowId === activityId && c.rowItemId === activityItemId
    );
    setComments(commentList);
  };

  const addComment = (activityId, activityItemId, comment) => {
    let commentList = [...comments];
    let newId = commentList.length + 1;
    let datetime = new Date();

    let newComment = {
      id: newId,
      rowId: activityId,
      rowItemId: activityItemId,
      comment: comment,
      userName: "Marjan",
      dateTime: datetime.toDateString(),
    };

    console.log(commentList);
    commentList.push(newComment);
    console.log(commentList);
     setComments(commentList);
    
  };

  return (
    <RTPContext.Provider
      value={{
        tobeApprovedActivities,
        setToBeApproved,
        ChangeRate,
        selectedItem,
        getSelectedItemInfo,
        changeOpenState,
        comments,
        loadComments,
        addComment,
      }}
    >
      {props.children}
    </RTPContext.Provider>
  );
};

export default GlobalState;
