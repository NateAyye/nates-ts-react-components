import React, { CSSProperties } from 'react';

export type CSSColorType =
  | React.StyleHTMLAttributes<HTMLDivElement>
  | React.CSSProperties
  | undefined;

type Border = CSSProperties['alignItems'];

export interface FlexContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  fg?: CSSProperties['color'];
  bg?: CSSProperties['backgroundColor'];
  fc?: boolean;
  'align-i'?: CSSProperties['alignItems'];
  centered?: boolean;
  radi?: CSSProperties['borderRadius'];
}
