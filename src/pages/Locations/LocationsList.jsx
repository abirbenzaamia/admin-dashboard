
import { Box, Container, Grid, Pagination } from '@mui/material';
import { locations } from './locations';
import { LocationsListToolbar } from '../../components/Locations/LocationsListToolbar';
import { LocationCard } from '../../components/Locations/LocationCard';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useState,useEffect } from 'react';
import { getLocations } from '../../modules/Vehicles/locations.crud';

 const LocationsList = () => {
//   const [locations, setLocations] = useState([]);
//   useEffect(() => {
//     getLocations().then(({ data }) => {
//       setLocations(data);
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }, [])
  console.log(locations);
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
    <main>
   
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <LocationsListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {locations.map((location) => (
              <Grid
                item
                key={location.idLocation}
                lg={4}
                md={6}
                xs={12}
              >
                {console.log(location.dateLocation)}
                {location && <LocationCard location={location} />}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
    </main>

    </div>
  )
}
  




export default LocationsList;
