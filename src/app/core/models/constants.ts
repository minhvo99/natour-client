export enum ROLE {
  ADMIN = 'admin',
  LEAD_GUIDE = 'lead-guide',
  GUIDE = 'guide',
  GUEST = 'guest'
}

export interface Option {
  id: string;
  name: string;
  label: string;
  isActive: boolean;
}
