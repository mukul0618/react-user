import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Inquiries = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Inquiries" subtitle="Inquiries" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Is there any listings for Mars?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Question2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Is there any listings for Moon?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Question3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Is there any listings for Antarctica?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Question4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sydney Vs. Melbourne
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Question5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I am planning on retiring next month. Any listings for Gold Coast?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Inquiries;
