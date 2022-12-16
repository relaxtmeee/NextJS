import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: '12px' | '14px';
    href?: string
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    children: ReactNode;
} 