import {
  Box,
  Button,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    address: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  useEffect(() => {}, []);

  return (
    <div>
      <Box component="form">
        <div div className="w-50 p-3">
          <FormLabel>Email address</FormLabel>
          <TextField
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="John"
          />
        </div>
        <div div className="w-50 p-3">
          <FormLabel>Name</FormLabel>
          <TextField
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Martin"
          />
        </div>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </Box>

      <Button variant="contained" onClick={handleSubmit}>
        Update
      </Button>
    </div>
  );
};

export default EditUser;
