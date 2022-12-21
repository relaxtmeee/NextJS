import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface PRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
    error?: FieldError
} 