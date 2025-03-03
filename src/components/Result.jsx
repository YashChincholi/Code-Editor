import { Box, styled } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";

const Result = () => {
  const [src, setSrc] = useState(" ");
  const { html, css, js } = useContext(DataContext);
  const Container = styled(Box)`
    height: 41vh;
  `;

  const srcCode = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);

  return (
    <Container>
      <iframe
        srcDoc={src}
        frameBorder="0"
        sandbox="allow-scripts"
        title="output"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
