import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dincrement, ddecrement } from "./daction";

const DCounter = () => {
  const dcount = useSelector((state) => state.dcount.value);

  const dispatch = useDispatch();

  const dincrementHandeler = (va) => {
    dispatch(dincrement(va));
  };

  const ddecrementHandeler = (va) => {
    dispatch(ddecrement(va));
  };
  return (
    <div>
      <Grid>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={() => dincrementHandeler(5)}
        >
          DIncrement
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          {dcount}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={() => ddecrementHandeler(5)}
        >
          DDecrement
        </Button>
      </Grid>
    </div>
  );
};

export default DCounter;
