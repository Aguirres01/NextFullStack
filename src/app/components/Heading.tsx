import React, { JSX } from "react";
import theme from "../theme/theme";

type HeadingProps = {
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements; // h1, h2, h3, etc.
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
};

export function Heading({
  children,
  tag: Tag = "h1",
  size = "xl",
  color = "#000",
  align = "center",
  style,
}: HeadingProps) {
  const fontSizes = {
    sm: "1.2rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  };

  return (
    <Tag
      style={{
        fontFamily: theme.typography.fontFamily,
        fontSize: fontSizes[size],
        color,
        textAlign: align,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
