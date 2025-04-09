import Box from "../components/Box";
import theme from "../theme/theme";

export default function Description() {
  return (
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
      <p
        style={{
          maxWidth: '600px',
          lineHeight: '1.6',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
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
  );
}
