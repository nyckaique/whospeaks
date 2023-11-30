import { useState } from "react";
import Countryform from "./Countryform";
import Countrycard from "./Countrycard";
import { Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import restcountriesapi from "../services/restcountriesapi";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function Home() {
  const [theme, setTheme] = useState(lightTheme);
  const [dados, setDados] = useState([]);
  const [input, setInput] = useState("");
  const [idiomaBuscado, setIdiomaBuscado] = useState("");

  function toggleTheme() {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  function addData(dado) {
    setDados(Object.entries(dado));
  }

  function resetInput() {
    setInput("");
  }

  function addInput(text) {
    setInput(text);
  }

  async function buscaPaises(event) {
    event.preventDefault();
    //se o input for vazio, mostra um alert e retorna nada, encerrando a função
    if (input === "") {
      alert("Select any language to search!");
      return;
    }
    //se o input nao for vazio, tenta fazer a requisição
    try {
      //faz requisição assincrona utilizando a api que criamos, armazera em response e depois no cep com setCEP, depois limpa o input
      const response = await restcountriesapi.get(`${input}`);
      const capitalized = input.charAt(0).toUpperCase() + input.slice(1);
      setIdiomaBuscado(capitalized);
      addData(response.data);
      resetInput();
    } catch (e) {
      //se der erro na requisição, mostra um alerta e limpa o input
      alert("Error: something went worng. Please try again later.");
      resetInput();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div
        style={{
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          backgroundColor: "rgba(0,0,0,0.05)",
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="overline"
          display="block"
          style={{ paddingTop: "0.5em" }}
        >
          Developed by{" "}
          <a
            href="https://github.com/nyckaique/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            Nycollas Kaique
          </a>
        </Typography>

        <Box>
          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {theme === darkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        <Countryform
          buscaPaises={buscaPaises}
          inputText={input}
          addInput={addInput}
        />

        <Typography variant="h4" gutterBottom>
          {idiomaBuscado}
        </Typography>

        <Countrycard dados={dados} />
      </div>
    </ThemeProvider>
  );
}
