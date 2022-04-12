import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

const UserProfileDetails = () => {
  return ( <form
    autoComplete="off"
    noValidate
  >
    <Card>
      <CardHeader
        subheader="The information can be edited"
        title="Profile"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              helperText="Please specify the first name"
              label="First name"
              name="firstName"
              required
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Last name"
              name="lastName"
              required
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              required
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Country"
              name="country"
              required
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Select State"
              name="state"

              required
              select
              SelectProps={{ native: true }}

              variant="outlined"
            >
              
            </TextField>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
        >
          Save details
        </Button>
      </Box>
    </Card>
  </form> );
}
 
export default UserProfileDetails;