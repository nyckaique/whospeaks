import Paper from "@mui/material/Paper";
import { TextField, IconButton, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Countryform({ buscaPaises, inputText, addInput }) {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        style={{ minWidth: "260px", width: "100%" }}
      >
        <Grid item xs={11} sm={5}>
          <Typography variant="h4" gutterBottom>
            WHO SPEAKS?
          </Typography>

          <Paper
            style={{
              padding: "1em",
              borderRadius: "1em",
              marginBottom: "1em",
            }}
            elevation={6}
          >
            <form
              onSubmit={buscaPaises}
              style={{ display: "flex", alignItems: "center", gap: "1em" }}
            >
              <TextField
                id="standard-basic"
                label="Input a language"
                variant="standard"
                fullWidth
                value={inputText}
                onChange={(e) => addInput(e.target.value)}
                helperText="Please enter the language in english"
              />
              <IconButton
                aria-label="delete"
                onClick={buscaPaises}
                style={{ width: "48px", height: "48px" }}
              >
                <SearchIcon />
              </IconButton>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
