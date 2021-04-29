export interface ITheme {
  id?: number;
  theme: string;
  area: string;
  description: string;
  period: string;
  owner: {
    id: number;
  };
}
