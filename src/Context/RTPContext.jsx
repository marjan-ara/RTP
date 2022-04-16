import { createContext } from "react";


const RTPContext = createContext({
  tobeApprovedActivities: [],
  setToBeApproved: () => { },
  ChangeRate: () => { },
  selectedItem: {},
  getSelectedItemInfo: () => { },
  changeOpenState: () => { },
  comments: [],
  loadComments: () => { },
});

export default RTPContext;
