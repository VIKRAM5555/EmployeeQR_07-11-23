import {
  useFrappeGetDocCount,
  useFrappeGetDocList,
  useFrappeUpdateDoc,
} from "frappe-react-sdk";

export function GetDataPending() {
  const { data }: any = useFrappeGetDocList("NewDoctypefromOld", {
    fields: ["unchecked"],
    filters: [
      ["id", "=", JSON.parse(localStorage.formdata)["id"]],
      //   // ["user_name", "=", JSON.parse(localStorage.formdata)["name"]],
    ],
    orderBy: {
      field: "creation",

      order: "desc",
    },
  });
  return data;
}

// const { updateDoc } = useFrappeUpdateDoc();

// const handleUpdateDoc = async () => {
//   const securityDetails = {
//     user_name: "sugesh",
//   };
//   try {
//     await updateDoc("SecurityDetails ", "9918753e1d",  );
//     console.log("Created Successfully");
//   } catch (error) {
//     console.error("Error update doc......:", error);
//   }
// };
