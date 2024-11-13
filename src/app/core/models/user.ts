export interface User {
  name: string;
  email: string;
  passWordChangeAt?: Date;
  role: string;
  active: boolean;
  photo?: string;
  passWordResetExpires?: string;
  passWordResetToken?: string;
  id: string;
}
