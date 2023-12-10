import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { YouTubePlayer } from './component/YouTubePlayer';
import { YouTubePlayer1 } from './component/YouTubePlayer1';

function App() {
  return (
    <>
      <Box>
        <CssBaseline />
        <Container fixed>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Power of Prayers- वंदनम Vandanam</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  justifyContent: 'space-around',
                }}
              >
                <YouTubePlayer1 />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography>
                {' '}
                Gita Chapter 10 The Opulence & Divine Glories of the Lord
                Krishna Vibhūti-yoga{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
              <YouTubePlayer />
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3a-content'
              id='panel3a-header'
            >
              <Typography>Disabled </Typography>
            </AccordionSummary>
          </Accordion>
        </Container>
      </Box>
    </>
  );
}

export default App;
