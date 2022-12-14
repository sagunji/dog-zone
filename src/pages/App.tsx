import "../App.css";
import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import RandomDog from "./randomDog";
import Saved from "./saved";

import DogProvider from "../context/DogContext";

const Container = styled(Box)`
  margin: auto 0;
`;

const AppLayout = styled(Grid)`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 10px;
  max-width: 1080px;
  margin: 0 auto;
  padding: 8px;
`;

function App() {
  return (
    <Container>
      <DogProvider>
        <AppLayout>
          <RandomDog />
          <Saved />
        </AppLayout>
      </DogProvider>
    </Container>
  );
}

export default App;
