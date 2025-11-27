j// interface/index.ts

// For Button.tsx
["import { PageRouteProps }"]

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// For Layout.tsx
import { ReactNode } from "react";
export interface LayoutProps {
  children: ReactNode;
}

// For pages/index.tsx (Home)
export interface PageRouteProps {
  pageRoute: string;
}
