/* eslint-disable jsx-a11y/alt-text */
import { Google } from "./Firebase";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import Box from "@mui/system/Box";
import Login from "../Images/login.jpg";
export default function Signup() {
  return (
    <Container>
      <Box>
        <Box
          sx={{
            display: "flex",
            mt: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Login} style={{ width: "40%" }} />
        </Box>
        <Box>
          <Button
            onClick={() => Google()}
            sx={{ display: "flex", m: "auto" }}
            variant="outlined"
          >
            Signup with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
