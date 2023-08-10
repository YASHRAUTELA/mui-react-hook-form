import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const CustomTextField = ({ name, control, label, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        formState: { error },
        fieldState,
      }) => (
        <TextField
          {...props}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};
