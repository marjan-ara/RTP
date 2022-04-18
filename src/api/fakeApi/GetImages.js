import image1 from "./../../assets/img/1.jpg";
// import image1 from "assets/img/1.jpg";
import image2 from "./../../assets/img/2.jpg";
import image3 from "./../../assets/img/3.jpg";
export const GetImages = () => {
  const images = [    {
    id: 1,
    rowId: 1,
    rowItemId: 1,
    img: image1,
    title: "image1",
    userName: "Marjan",
    dateTime: "2022/04/15 08:30 AM",
 },
 {
   id: 2,
   rowId: 1,
   rowItemId: 1,
   img: image2,
   title: "image2",
   userName: "Marjan",
   dateTime: "2022/04/16 04:30 PM",
 },
 {
   id: 3,
   rowId: 1,
   rowItemId: 1,
   img: image3,
   title: "image3",
   userName: "Marjan",
   dateTime: "2022/04/16 06:00 PM",
 }]
  return images;
};
