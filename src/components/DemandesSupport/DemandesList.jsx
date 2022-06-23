// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { fToNow , fDateTimeSuffix } from '../../utils/formatTime';
// components
import Scrollbar from '../Scrollbar';
//icons
import { BsQuestionSquare } from "react-icons/bs";

// ----------------------------------------------------------------------

DemandesList.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function DemandesList({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((demande) => (
            <DemandeItem key={demande.idAnomalie} demande={demande} />
          ))}
        </Stack>
      </Scrollbar>

 
    </Card>
  );
}

// ----------------------------------------------------------------------

DemandeItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function DemandeItem({ demande }) {
  const { description, postedAt } = demande;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box   sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}>
      <Typography gutterBottom variant="h2" component="div">
      <BsQuestionSquare/>
            </Typography>
        </Box>
      
      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" noWrap>
          Demande de support
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fDateTimeSuffix(postedAt)} 
      </Typography>
    </Stack>
  );
}
