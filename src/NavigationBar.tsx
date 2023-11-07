import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";

const StyledBreadcrumb = styled(Chip)(({ theme }: any) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(5),
    width: theme.spacing(30),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.h5,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function NavigationBar() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb component="a" href="#" label="Year" />
        <StyledBreadcrumb component="a" href="#" label="Month" />
        <StyledBreadcrumb component="a" href="#" label="Day" />
      </Breadcrumbs>
    </div>
  );
}
