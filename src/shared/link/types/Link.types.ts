import type { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

interface IProps {
    children: React.ReactNode;
    type?: "strong" | "highlight" | "slim" | "gradient";
    fullWidth?: boolean;
    className?: string;
}

export type ILinkExternalProps = AnchorHTMLAttributes<HTMLAnchorElement> & IProps;
export type ILinkInternalProps = LinkProps & IProps;