import { HomeRepairService } from "@mui/icons-material";

export const getToBeApprovedActivities = () => {
        const activities = [
          {
            id: 1,
            name: "Home Repair Service",
            instanceName: "Apartment No. 2",
            owner: "Arash",
            scheduledTime: "4 hours",
            entry: "8:00 AM",
            exit: "11:00 AM",
            worker: "Ali",
          },
          {
            id: 2,
            name: "House Keeping",
            instanceName: "Apartment No. 3",
            owner: "Marjan",
            scheduledTime: "8 hours",
            entry: "8:00 AM",
            exit: "4:00 PM",
            worker: "Maryam",
          },
          {
            id: 3,
            name: "House Painting",
            instanceName: "Apartment No. 4",
            owner: "Siavash",
            scheduledTime: "10 hours",
            entry: "8:00 AM",
            exit: "8:00 PM",
            worker: "John",
          },
          {
            id: 4,
            name: "Gardening",
            instanceName: "Apartment No. 4, Back Yard",
            owner: "Siavash",
            scheduledTime: "4 hours",
            entry: "1:00 PM",
            exit: "5:00 PM",
            worker: "Gardener",
          },
          {
            id: 5,
            name: "House Keeping",
            instanceName: "Apartment No. 5",
            owner: "Marjan",
            scheduledTime: "6 hours",
            entry: "10:00 AM",
            exit: "4:00 PM",
            worker: "Nina",
          },
          {
            id: 6,
            name: "Cooking",
            instanceName: "Apartment No. 2",
            owner: "Arash",
            scheduledTime: "4 hours",
            entry: "2:00 PM",
            exit: "6:00 PM",
            worker: "chef Leo",
          },
        ];
         return activities;
       };

