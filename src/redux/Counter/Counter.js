import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";

const Counter = () => {
  let count = useSelector((state) => state.count.value);
  let dispatch = useDispatch();

  const incrementHandeler = () => {
    dispatch(increment());
  };
  const decrementHandeler = () => {
    dispatch(decrement());
  };

  return (
    <Container>
      <Grid>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={incrementHandeler}
        >
          Increment
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          {count}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={decrementHandeler}
        >
          Decrement
        </Button>
      </Grid>
    </Container>
  );
};

export default Counter;
