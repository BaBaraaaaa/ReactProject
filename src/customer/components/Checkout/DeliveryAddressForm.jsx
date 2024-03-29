import React ,{useState} from "react";
import { Grid, Button,Box ,TextField} from "@mui/material";
import AddressCard from "../AddresCard/AddressCard";
const DeliveryAddressForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSumbitForm =(e) =>{
    e.preventDefault();
    const data = inputs;
    console.log("Inputs useState",inputs);
    console.log("Data ",data);
    

}

  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-e-md h-[30.5rem] overflow-y-scroll">
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
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSumbitForm}>
              <Grid container spacing={3} >
                <Grid item xs={12} sm={6}>
                  <TextField required
                    id="firstName" 
                    name="firstName"
                    label="First Name"
                    fullWidth
                    value={inputs.firstName || ""} 
                    autoComplete="given-name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required
                    id="lastName" 
                    name="lastName"
                    label="Last Name"
                    value={inputs.lastName || ""} 
                    onChange={handleChange}
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField required
                    id="address" 
                    name="address"
                    label="Address"
                    fullWidth
                    value={inputs.address || ""} 
                    onChange={handleChange}
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField required
                    id="city" 
                    name="city"
                    label="City "
                    fullWidth
                    value={inputs.city || ""} 
                    onChange={handleChange}
                    autoComplete="given-name"
                   
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required
                    id="zip" 
                    name="zip"
                    label="Zip/ Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    value={inputs.zip || ""} 
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField required
                    id="state" 
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                    value={inputs.state || ""} 
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required
                    id="phoneNumber" 
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                    value={inputs.phoneNumber || ""} 
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} >
                <Button
              sx={{ py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained" type="submit"
            >
              {" "}
              Delivery Here
            </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
