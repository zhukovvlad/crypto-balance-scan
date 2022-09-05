import { Grid, TextField } from "@mui/material";
import React, { Fragment } from "react";
import { useState } from "react";

const SearchWallet = () => {
  const [wallet, setWallet] = useState("");
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField value={wallet} onChange={(e) => setWallet(e.target.value)} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SearchWallet;
