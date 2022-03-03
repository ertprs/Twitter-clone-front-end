import { ReactNode } from "react";

export interface InputPropInterface {
    type?: string ;
    className?: string;
    onChange: (value: string) => void;
    name: string;
    label?: string;
    placeholder: string;
    value: string;
}

export interface TextAreaPropInterface {
    className?: string;
    onChange: (value: string) => void;
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

export interface memberObj {
    createdAt: string;
    id:string;
    members: eachMember[];
    updatedAt: string;
    _v?:number;
    _id:string
}

export type eachMember = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    biodata: string;
    profilePic:string;
    createdAt:string;
    updatedAt:string;
    provider:string;
}