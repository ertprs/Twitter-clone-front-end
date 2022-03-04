import { ReactNode } from "react";

export interface InputPropInterface {
    type?: string ;
    className?: string;
    onChange: (e: any) => void;
    name: string;
    label?: string;
    placeholder: string;
    value: string;
}

export interface TextAreaPropInterface {
    className?: string;
    onChange: (e: any) => void;
    name: string;
    label?: string;
    placeholder: string;
    cols?: number;
    value: string;
}

export interface ButtonPropInterface {
    className?: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    children: ReactNode;
}