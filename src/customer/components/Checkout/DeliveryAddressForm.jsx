import React from "react";
import { Grid, Button } from "@mui/material";
import AddressCard from "../../AddresCard/AddressCard";
const DeliveryAddressForm = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid className="border rounded-e-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              {" "}
              Delivery Here
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
