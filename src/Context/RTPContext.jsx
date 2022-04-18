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
  addComment: () => { },
  images: [],
  loadImages: () => { },
  addImage:()=>{}
});

export default RTPContext;
