import { FieldProps, getIn } from "formik";
import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectProps,
} from "@mui/material";

type Props = {
  field: FieldProps["field"];
  form: FieldProps["form"];
  label: String;
  options: Array<{ label: String; value: String }>;
} & SelectProps;

function SelectFormField({ field, form, label, options, ...props }: Props) {
  {
    const errorText =
      getIn(form.touched, field.name) && getIn(form.errors, field.name);
    return (
      <FormControl fullWidth error={!!errorText}>
        {label && <InputLabel>{label}</InputLabel>}
        <Select fullWidth {...field} {...props}>
          {options.map((op: any) => (
            <MenuItem key={op.value} value={op.value}>
              {op.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errorText}</FormHelperText>
      </FormControl>
    );
  }
}
export default SelectFormField;
