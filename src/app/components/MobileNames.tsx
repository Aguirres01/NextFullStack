"use client";
import { useEffect, useState } from "react";

export default function MobileNames() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      padding: "30px 20px"
    }}>
      <a href="https://www.instagram.com/iran_aguirrejr?igsh=MjM5N3h6cWFhOG5i" target="_blank" rel="noopener noreferrer"
        style={{ fontSize: "20px", color: "#000", textAlign: "center" }}>
        <b>CAMINHÃO</b><br />Instagram
      </a>
      <a href="https://www.instagram.com/joaoo_figueiredoo?igsh=MWsxdWdsOHJwY2puZw==" target="_blank" rel="noopener noreferrer"
        style={{ fontSize: "20px", color: "#000", textAlign: "center" }}>
        <b>CARA DE DEDO</b><br />Instagram
      </a>
      <a href="https://www.instagram.com/jonathaanllopes?igsh=MXVsaXAwMTNvcjQ0aA==" target="_blank" rel="noopener noreferrer"
        style={{ fontSize: "20px", color: "#000", textAlign: "center" }}>
        <b>MASTERCHEF</b><br />Instagram
      </a>
      <a href="https://www.instagram.com/marlon_aguirres?igsh=MXIwcWU0YTh6Nnc1Zg==" target="_blank" rel="noopener noreferrer"
        style={{ fontSize: "20px", color: "#000", textAlign: "center" }}>
        <b>MECÂNICO</b><br />Instagram
      </a>
    </div>
  );
}
