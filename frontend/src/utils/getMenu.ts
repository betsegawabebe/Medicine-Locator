import { BanksMenu, PhoneOperatorMenu, adminMenu } from './constants';

export const getMenu = (role?: string | null) => {
  return role === 'admin'
    ? adminMenu
    : role === 'bank'
    ? BanksMenu
    : role === 'telephonist'
    ? PhoneOperatorMenu
    : null;
};
