import { ReactNode } from 'react';

interface BoxProps  {
 tag ?: React.ElementType;
 children: ReactNode;
 styleSheet:React.CSSProperties;  
}

export default function Box({ styleSheet, children, tag }: BoxProps) {
  const Tag = tag || 'div';
  return( <Tag style={styleSheet}>
    {children}
    </Tag>
  );
}
