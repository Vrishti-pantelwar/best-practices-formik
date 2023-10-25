import { TextField, TextFieldProps } from "@mui/material";
import { FieldProps, getIn, useField } from "formik";
import React from "react";

type Props = FieldProps & TextFieldProps;

const TextFormField = ({ form, field, ...props }: Props) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  const [{}, { error, touched }] = useField(field.name);
  return (
    <TextField
      fullWidth
      margin="normal"
      helperText={touched ? error : ""}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};
export default TextFormField;
