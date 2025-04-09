import Box from "../components/Box";

export default function Background() {
  return (
    <Box
      tag="div"
      styleSheet={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url("/pubgCapa.avif")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.5,
        zIndex: -1,
      }}
    />
  );
}
