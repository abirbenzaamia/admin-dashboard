
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DemandesList from './DemandesList';
import { useEffect , useState } from 'react';
import { getDemandesSupport } from '../../modules/DemandesSupport/demande-support.crud';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
   
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [demandesList, setDemandesList] = useState();
  useEffect(() => {
    const getDemandesList = async ()=>{
      const response = await getDemandesSupport();
      //console.log(response);
      setDemandesList(response.data);
    }
  getDemandesList()
  .catch(console.error);
  }, [])
  

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Demandes de support" {...a11yProps(0)} />
          <Tab label="Demandes de support traitées" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {demandesList &&
         <DemandesList  
        list={demandesList.map((demande) => ({
                id: demande.idAnomalie,
                title:  "Demande de support",
                description: demande.contenuDemandeSupport,
                // image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: demande.dataDeclenchement,
              }))}
               title={"Demandes de support récentes"}/> } 
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      
    </Box>
  );
}
