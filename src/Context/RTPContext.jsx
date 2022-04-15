import { createContext } from "react";


const RTPContext = createContext({
  tobeApprovedActivities: [],
  setToBeApproved: () => {},
  ChangeRate: () => {},
  selectedItem: {},
  getSelectedItemInfo: () => {},
  changeOpenState:()=>{}
});

export default RTPContext;
