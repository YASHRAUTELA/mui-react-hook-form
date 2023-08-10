import { useForm } from "react-hook-form";
import "./styles.css";
import { CustomCheckbox, CustomRadio, CustomTextField } from "./components";
import { Box, Button } from "@mui/material";

export default function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subscribe: true,
      gender: "male",
    },
  });

  const handleFormSubmit = (data) => {
    console.log("form submit", data);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box>
          <CustomTextField
            name="name"
            label="Name"
            control={control}
            fullWidth
            sx={{ maxWidth: 300 }}
            margin="normal"
          />
        </Box>
        <Box>
          <CustomTextField
            label="Email"
            name="email"
            control={control}
            fullWidth
            sx={{ maxWidth: 300 }}
            margin="normal"
          />
        </Box>
        <Box sx={{ position: "left" }}>
          <CustomCheckbox
            label="Subscribe to newsletter"
            name="subscribe"
            control={control}
          />
        </Box>
        <Box>
          <CustomRadio
            label="Gender"
            name="gender"
            control={control}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
