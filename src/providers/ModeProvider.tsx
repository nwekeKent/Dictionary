"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface MyComponentProps {
	children: ReactNode; // 'children' prop typed as ReactNode
}

export const ModeProvider = ({ children }: MyComponentProps) => {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
