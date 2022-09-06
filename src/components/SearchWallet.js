import { Grid, TextField, Button, Container } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";

import { getFtmBalance, getNormalTransactionsFtm } from "../config/apis";
import { numberWithCommas } from "../utils/usefulFunc";

const SearchWallet = () => {
  const [wallet, setWallet] = useState("");
  const [addressBalance, setAddressBalance] = useState("");

  const findBalance = async (address) => {
    const { data } = await axios
      .get(getFtmBalance(address, "4ZD4NJG647KEDEG2DK8XAU5URMUIFYQEXQ"))
      .catch((error) => {
        return error;
      });
    console.log(data);
    setAddressBalance(numberWithCommas((data.result / 10 ** 18).toFixed(3)));
    const allTrans = await axios
      .get(
        getNormalTransactionsFtm(address, "4ZD4NJG647KEDEG2DK8XAU5URMUIFYQEXQ")
      )
      .catch((error) => {
        return error;
      });
    console.log(allTrans);
  };

  return (
    <Container sx={{ marginY: 2 }}>
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
            sx={{ minHeight: "100%" }}
            color="primary"
            variant="contained"
            onClick={() => findBalance(wallet)}
          >
            Go
          </Button>
        </Grid>
      </Grid>
      {addressBalance ? <p>{addressBalance}</p> : <p>No address entered</p>}
    </Container>
  );
};

export default SearchWallet;
