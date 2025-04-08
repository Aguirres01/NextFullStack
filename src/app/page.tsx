import Box from "./components/Box";
import theme from "./theme/theme";

export default function Home() {
  return (
    <>
      {/* Background transparente cobrindo toda a tela */}
      <Box
        tag="div"
        styleSheet={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("/pubgCapa.avif")', // coloque sua imagem aqui
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.50,
          zIndex: -1,
        }}
      />

      {/* Conteúdo principal */}
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
          padding: '0 40px',
        }}
      >
        {/* Nomes - lado esquerdo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "188px" }}>
          <a
            href="https://www.instagram.com/iran_aguirrejr?igsh=MjM5N3h6cWFhOG5i"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", color: "#000"}}
          >
            CAMINHÃO : acesse meu insta
          </a>
          <a
            href="https://www.instagram.com/joaoo_figueiredoo?igsh=MWsxdWdsOHJwY2puZw=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", color: "#000" }}
          >
            CARA DE DEDO: acesse meu insta
          </a>
        </div>

        {/* Nomes - lado direito */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "188px",
            textAlign: "right",
          }}
        >
          <a
            href="https://www.instagram.com/jonathaanllopes?igsh=MXVsaXAwMTNvcjQ0aA=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", color: "#000"}}
          >
            MASTERCHEF: acesse meu insta
          </a>
          <a
            href="https://www.instagram.com/marlon_aguirres?igsh=MXIwcWU0YTh6Nnc1Zg=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", color: "#000"}}
          >
            MECÂNICO: acesse meu insta
          </a>
        </div>
      </Box>

      <Box
        tag="section"
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '32px',
        }}
      >
        <h1>OS PIORES DA HISTÓRIA DO PUBG</h1>
      </Box>

      <Box
        tag="section"
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <p style={{ maxWidth: '600px', lineHeight: '1.6' }}>
          Bem-vindo à lenda viva do fracasso coordenado.<br />
          Aqui o loot some, o gás sempre vence e ninguém sabe marcar no mapa.<br />
          Nosso squad é conhecido por:<br /><br />
          • Pular em locais aleatórios sem comunicar.<br />
          • Brigar com bots e perder.<br />
          • Esquecer de carregar a arma.<br />
          • E, claro, fazer revive no gás... com 1 de vida.<br /><br />
          A estratégia? Não temos.<br />
          A mira? Também não.<br />
          Mas a resenha? Essa é de elite!<br /><br />
          Somos os heróis do lobby.<br />
          O squad que joga mal, mas joga junto.<br />
          E no final, o importante é rir (dos outros... e de nós mesmos).<br />
          Porque quem joga bem não tem história boa pra contar.
        </p>
      </Box>
    </>
  );
}
