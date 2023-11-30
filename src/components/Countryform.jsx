import Paper from "@mui/material/Paper";
import { IconButton, Grid, Typography, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function Countryform({ buscaPaises, inputText, addInput }) {
  const languagesList = [
    "Afrikaans",
    "Albanian",
    "Amharic",
    "Arabic",
    "Armenian",
    "Azerbaijani",
    "Basque",
    "Belarusian",
    "Bengali",
    "Bosnian",
    "Bulgarian",
    "Catalan",
    "Chinese",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Estonian",
    "Faroese",
    "Filipino",
    "Finnish",
    "French",
    "Galician",
    "Georgian",
    "German",
    "Greek",
    "Hebrew",
    "Hindi",
    "Hungarian",
    "Icelandic",
    "Indonesian",
    "Irish",
    "Italian",
    "Japanese",
    "Kazakh",
    "Khmer",
    "Korean",
    "Kurdish",
    "Kyrgyz",
    "Lao",
    "Latin",
    "Latvian",
    "Lingala",
    "Lithuanian",
    "Macedonian",
    "Malay",
    "Maltese",
    "Mongolian",
    "Nepali",
    "Norwegian",
    "Norwegian Bokmål",
    "Norwegian Nynorsk",
    "Pashto",
    "Polish",
    "Portuguese",
    "Quechua",
    "Romanian",
    "Romansh",
    "Russian",
    "Serbian",
    "Shona",
    "Sinhala",
    "Slovak",
    "Somali",
    "Southern Sotho",
    "Spanish",
    "Swahili",
    "Swedish",
    "Tajik",
    "Tamil",
    "Thai",
    "Tigrinya",
    "Tongan",
    "Turkish",
    "Turkmen",
    "Ukrainian",
    "Urdu",
    "Uzbek",
    "Vietnamese",
    "Xhosa",
    "Zulu",
  ];

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        style={{ minWidth: "260px", width: "100%" }}
      >
        <Grid item xs={11} sm={4}>
          <Typography variant="h4" gutterBottom>
            WHO SPEAKS?
          </Typography>

          <Paper
            style={{
              padding: "1em",
              borderRadius: "1em",
              marginBottom: "1em",
              display: "flex",
              gap: "1em",
              alignItems: "center",
            }}
            elevation={6}
          >
            <FormControl fullWidth>
              <InputLabel id="languageSelector">Language</InputLabel>
              <Select
                labelId="languageSelector"
                value={inputText}
                label="Language"
                onChange={(e) => addInput(e.target.value)}
                fullWidth
              >
                {languagesList.map((language) => (
                  <MenuItem key={language} value={language}>
                    {language}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <IconButton
              aria-label="delete"
              onClick={buscaPaises}
              style={{ width: "48px", height: "48px" }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
