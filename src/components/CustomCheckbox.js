import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

export const CustomCheckbox = ({ name, control, label, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        formState: { error },
        fieldState,
      }) => (
        <FormControlLabel
          control={
            <Checkbox
              onChange={onChange}
              value={value}
              checked={value}
              error={!!error}
              {...props}
            />
          }
          label={label}
        />
      )}
    />
  );
};
