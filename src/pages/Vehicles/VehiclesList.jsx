
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from './products';
import { VehicleListToolbar } from '../../components/Vehicles/VehicleListToolbar';
import { VehicleCard } from '../../components/Vehicles/VehicleCard';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useState } from 'react';
const VehiclesList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
        <VehicleListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <VehicleCard product={product} />
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
  




export default VehiclesList;
