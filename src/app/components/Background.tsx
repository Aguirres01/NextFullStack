import Box from "./Box";

const Background = () => (
  <Box
    tag="div"
    styleSheet={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: 'url("/pubgCapa.avif")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: 0.2,
      zIndex: -1,
    }}
  >
    {/* children entre as tags */}
    <></>
  </Box>
);

export default Background;