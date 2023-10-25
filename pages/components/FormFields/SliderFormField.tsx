import {
  Dialog,
  Slider,
  SliderProps,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import { FieldProps } from "formik";

// type Props = {
//   label: string;
//   field: FieldProps["field"];
//   SliderProps: SliderProps;
// } & StackProps;

type Props = { label: String; field: FieldProps["field"] } & SliderProps;

function SliderFormField({ label, field, ...props }: Props) {
  return (
    <>
      <Typography>{label}</Typography>
      <Slider step={10} marks min={10} max={110} {...field} {...props} />
    </>
  );
}

export default SliderFormField;

//Considering a better approach

// import {
//   Dialog,
//   Slider,
//   SliderProps,
//   Stack,
//   StackProps,
//   Typography,
// } from "@mui/material";
// import { FieldProps } from "formik";

// type Props = {
//   label: string;
//   field: FieldProps["field"];
//   SliderProps: SliderProps;
// } & StackProps;

// function SliderFormField({ label, field, SliderProps, ...props }: Props) {
//   return (
//     <Stack gap={2} {...props}>
//       <Typography>{label}</Typography>
//       <Slider step={10} marks min={10} max={110} {...field} {...SliderProps} />
//     </Stack>
//   );
// }

//Calling

// // {
// //   <SliderFormField
// //     label="test"
// //     field={{}}
// //     gap={4}
// //     sx={{ bgcolor: "white" }}
// //     SliderProps={{ sx: { bgcolor: "red" }, min: 10, max: 20 }}
// //   />;
// // }

// export default SliderFormField;
