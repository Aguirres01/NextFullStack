import { CSSProperties, ElementType, ReactNode } from 'react';

type BoxProps = {
  styleSheet: CSSProperties;
  children?: ReactNode;
  tag?: ElementType;
};

export default function Box({ styleSheet, children, tag }: BoxProps) {
  const Tag = tag || 'div';
  return <Tag style={styleSheet}>{children}</Tag>;
}
