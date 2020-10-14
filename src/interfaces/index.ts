// Components
export interface IButtonProps {
  content: string;
  type?: string;
}

// Store
export interface IState {
  memory: number;
  number: number;
  operator: string;
}

export interface IProviderProps {
  children: React.ReactNode;
}
