import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardSigin from "../components/CardSigin";

const company = import.meta.env.VITE_NAME_COMPANY;

const SignIn = () => {
  const urlBackground =
    "url(https://noticiasnet-s3.cdn.net.ar/s3i233/2023/08/noticiasnet/images/16/52/165240_6a57c998e8540cb60a62985afe9e7feac9dd73f5cb96486f5e1e0680e841a550/md.webp)";

  return (
    <Box
      sx={{
        backgroundImage: urlBackground,
        width: "100%",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        pb: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          flexWrap: "wrap",
          p: { xs: 0, md: 15 },
          pt: { xs: 10 },
        }}
      >
        <Box sx={{ backgroundColor: "rgba(84, 122, 82, 0.7)", borderRadius:"10px" }}>
          <Typography
            variant="h3"
            color="textFielfWhite.main"
            sx={{
              m: 2,
              textAlign: "center",
              textShadow: "1px 1px 2px black",
            }}
          >
            {company}
          </Typography>
          
        </Box>
        <CardSigin />
      </Box>
    </Box>
  );
};

export default SignIn;
