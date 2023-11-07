import { Button } from "@mui/material";
import { useFrappeGetDocCount } from "frappe-react-sdk";

export const DocumentCount = (status: any) => {
  const { data, error, isValidating, mutate } = useFrappeGetDocCount(
    "Employee",
    /** Filters **/
    // [["enabled", "=", true]],
    /** Cache the result on server **/
    // false,
    /** Print debug logs on server **/
    // false,
    // {
    //   /** SWR Configuration Options - Optional **/

    // }
    [["status", "=", status]]
  );

  if (isValidating) {
    return <>Loading</>;
  }
  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  if (data) {
    return (
      <p>
        {data} enabled users
        <Button onClick={() => mutate()}>Reload</Button>
      </p>
    );
  }
  return null;
};
