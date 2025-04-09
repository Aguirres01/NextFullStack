import Box from "../components/Box";
import { Heading } from "../components/Heading"; // ajuste o caminho se necessário

export default function Title() {
  return (
    <Box
      tag="section"
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "32px",
      }}
    >
      <Heading size="xl" color="#000" align="center">
        OS PIORES DA HISTÓRIA DO PUBG
      </Heading>
    </Box>
  );
}
