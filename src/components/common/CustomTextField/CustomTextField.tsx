import { TextField } from "@mui/material";
import React from "react";

interface ICustomTextField {
  name: string;
  label: string;
  required: boolean;
  fullWidth: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  type?: string;
  minRows?: number;
  multiline?: boolean;
}

function CustomTextField({
  name,
  label,
  required,
  fullWidth,
  autoComplete,
  autoFocus,
  minRows,
  multiline,
  type,
}: ICustomTextField) {
  return (
    <TextField
      type={type}
      required={required}
      id={name}
      margin={"normal"}
      multiline={multiline}
      fullWidth={fullWidth}
      minRows={minRows}
      label={label}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
    />
  );
}

export default CustomTextField;
