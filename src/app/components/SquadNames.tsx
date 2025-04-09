import Box from "../components/Box";
import theme from "../theme/theme";

export default function SquadNames() {
  return (
    <Box
      tag="main"
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundImage: 'url("/pubg.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px',
      }}
    >
      {/* Lado esquerdo */}
      <div style={{ display: "flex", flexDirection: "column", gap: "auto" }}>
        <a href="https://www.instagram.com/iran_aguirrejr?igsh=MjM5N3h6cWFhOG5i" target="caminhão" rel="noopener noreferrer" style={{ fontSize: "20px", color: "#000" }}>
          <b>CAMINHÃO</b><br/> Instagram
        </a>
        <a href="https://www.instagram.com/joaoo_figueiredoo?igsh=MWsxdWdsOHJwY2puZw==" target="_blank" rel="noopener noreferrer" style={{ fontSize: "20px", color: "#000" }}><br/>
        <b>CARA DE DEDO</b><br/> Instagram 
        </a>
      </div>

      {/* Lado direito */}
      <div style={{ display: "flex", flexDirection: "column", gap: "auto", textAlign: "right" }}>
        <a href="https://www.instagram.com/jonathaanllopes?igsh=MXVsaXAwMTNvcjQ0aA==" target="_blank" rel="noopener noreferrer" style={{ fontSize: "20px", color: "#000" }}><br/>
        <b>MASTERCHEF</b><br/> Instagram
        </a>
        <a href="https://www.instagram.com/marlon_aguirres?igsh=MXIwcWU0YTh6Nnc1Zg==" target="_blank" rel="noopener noreferrer" style={{ fontSize: "20px", color: "#000" }}><br/>
        <b>MECÂNICO</b><br/>  Instagram
        </a>
      </div>
    </Box>
  );
}
