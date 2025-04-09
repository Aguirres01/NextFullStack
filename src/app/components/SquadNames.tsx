"use client";
import { useEffect, useState } from "react";
import Box from "../components/Box";
import theme from "../theme/theme";
import Image from "next/image";

export default function SquadNames() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Box
      tag="main"
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Imagem principal */}
      <Image
        src="/pubg.jpeg"
        alt="Imagem do Squad"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        }}
      />

      {/* Container de nomes */}
      <Box
        tag="section"
        styleSheet={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          gap: "20px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {/* Lado esquerdo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: isMobile ? "center" : "flex-start" }}>
          <a
            href="https://www.instagram.com/iran_aguirrejr?igsh=MjM5N3h6cWFhOG5i"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", color: "#000", textAlign: "center" }}
          >
            <b>CAMINHÃO</b><br />Instagram
          </a>
          <a
            href="https://www.instagram.com/joaoo_figueiredoo?igsh=MWsxdWdsOHJwY2puZw=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", color: "#000", textAlign: "center" }}
          >
            <b>CARA DE DEDO</b><br />Instagram
          </a>
        </div>

        {/* Lado direito */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: isMobile ? "center" : "flex-end" }}>
          <a
            href="https://www.instagram.com/jonathaanllopes?igsh=MXVsaXAwMTNvcjQ0aA=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", color: "#000", textAlign: "center" }}
          >
            <b>MASTERCHEF</b><br />Instagram
          </a>
          <a
            href="https://www.instagram.com/marlon_aguirres?igsh=MXIwcWU0YTh6Nnc1Zg=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", color: "#000", textAlign: "center" }}
          >
            <b>MECÂNICO</b><br />Instagram
          </a>
        </div>
      </Box>
    </Box>
  );
}
