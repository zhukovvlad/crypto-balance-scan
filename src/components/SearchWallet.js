import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";

import { getFtmBalance } from "../config/apis";

const SearchWallet = () => {
  const [wallet, setWallet] = useState("");
  const [addressBalance, setAddressBalance] = useState("");

  const findBalance = async (address) => {
    const {data} = await axios
      .get(getFtmBalance(address, "4ZD4NJG647KEDEG2DK8XAU5URMUIFYQEXQ"))
      .catch((error) => {
        return error;
      });
    console.log(data);
    setAddressBalance(data.result / 10 ** 18);
  };

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => findBalance(wallet)}
          >
            Go
          </Button>
        </Grid>
      </Grid>
      <p></p>{addressBalance}
    </Fragment>
  );
};

export default SearchWallet;
