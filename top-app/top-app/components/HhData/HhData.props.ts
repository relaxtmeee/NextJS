import React, { DetailedHTMLFactory, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HhDataProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    color?: 'white' | 'blue';
    children: ReactNode
}