import React from "react";
import RTPContext from "./RTPContext";
import { useState } from "react";

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

  const changeOpenState=(rowId)=>{
    let rows=[...tobeApprovedActivities];
    let index1 = rows.findIndex((i) => i.id === rowId);
    rows[index1].open = !rows[index1].open;
    setTobeApprovedActivities(rows);
  }

  return (
    <RTPContext.Provider
      value={{
        tobeApprovedActivities,
        setToBeApproved,
        ChangeRate,
        selectedItem,
        getSelectedItemInfo,
        changeOpenState,
      }}
    >
      {props.children}
    </RTPContext.Provider>
  );
};

export default GlobalState;
