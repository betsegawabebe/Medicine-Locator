import { IUserModel } from '../../models/user';
// import { IconType } from 'react-icons';
export interface DefaultLayoutComponentProps {
  children?: React.ReactNode;
  user?: IUserModel;
  role?: string | null;
  allowedRole?: string;
}
export interface HeaderComponentProps {
  mode: string;
}



