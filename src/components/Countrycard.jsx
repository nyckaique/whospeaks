import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export default function Countrycard({ dados }) {
  function nativeNameCommon(item) {
    let a = item[1].name.nativeName;
    let b = Object.keys(a);
    return a[b[0]].common;
  }

  function nativeNameOfficial(item) {
    let a = item[1].name.nativeName;
    let b = Object.keys(a);
    return a[b[0]].official;
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1, paddingBottom: "1em" }}>
        <Grid
          container
          columns={12}
          spacing={2}
          style={{
            margin: ".2em",
            minWidth: "260px",
            maxWidth: "98%",
          }}
        >
          {dados.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Paper
                elevation={4}
                style={{
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "0.5em",
                }}
              >
                <Card style={{ height: "100%" }}>
                  <CardMedia
                    sx={{ height: 224 }}
                    image={item[1].flags.svg}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {nativeNameCommon(item)}
                    </Typography>
                    <Typography style={{ textAlign: "left" }}>
                      <b>Official name:</b> {nativeNameOfficial(item)}
                    </Typography>
                    <Typography style={{ textAlign: "left" }}>
                      <b>Capital:</b> {item[1].capital}
                    </Typography>
                    <Typography style={{ textAlign: "left" }}>
                      <b>Continent:</b> {item[1].continents[0]}
                    </Typography>
                    <Typography style={{ textAlign: "left" }}>
                      <b>Region:</b> {item[1].region}
                    </Typography>
                    <Typography style={{ textAlign: "left" }}>
                      <b>Subregion:</b> {item[1].subregion}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
