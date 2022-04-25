import React, { FC } from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  disabled: boolean;
}

export const Submit: FC<ButtonProps> = ({ disabled }) => {
  return (
    <Button variant="contained" type="submit" disabled={disabled}>
      submit
    </Button>
  );
};
