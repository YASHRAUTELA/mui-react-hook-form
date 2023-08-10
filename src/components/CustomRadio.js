import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";

export const CustomRadio = ({ name, control, options, label, ...props }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          formState: { error },
          fieldState,
        }) => (
          <RadioGroup value={value} onChange={onChange} {...props}>
            {options.map(({ value, label }) => (
              <FormControlLabel
                value={value}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
