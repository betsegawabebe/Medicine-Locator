import { DiasporaPage } from 'app/pages/DiasporaPage/Loadable';
import { IRoute } from './types';
import { AdminBanksPage } from 'app/pages/Bankspage/Loadable';
import { AdminPhoneOperatorPage } from 'app/pages/AdminPhoneOperator/Loadable';

import { DiasporaDetailPage } from 'app/pages/DiasporaDetailPage/Loadable';
import { AdminPhoneOperatorDetailPage } from 'app/pages/AdminPhoneOperatorDetailPage/Loadable';
import { AdminLoanOfferPage } from 'app/pages/AdminLoanOfferPage/Loadable';
import { PageNotFound } from 'app/components/PageNotFound';
import { AdminBanksDetailPage } from 'app/pages/BankDetailsPage/Loadable';
import { AdminLoanOfferDetailPage } from 'app/pages/AdminLoanOfferDetailPage/Loadable';
import { AdminScheduledPage } from 'app/pages/AdminScheduledPage/Loadable';
import { BanksLoanRequestPage } from 'app/pages/BanksLoanRequestPage/Loadable';
import { BanksLoanOfferPage } from 'app/pages/BanksLoanOfferPage/Loadable';
import { BanksLoanRequestDetailPage } from 'app/pages/BanksLoanRequestDetailPage/Loadable';
import { BankLoanOfferDetailPage } from 'app/pages/BankLoanOfferDetailPage/Loadable';
import { PhoneOperatorLoanRequestPage } from 'app/pages/PhoneOperatorLoanRequestPage/Loadable';
import { PhoneOperatorLoanRequestDetailPage } from 'app/pages/PhoneOperatorLoanRequestDetailPage/Loadable';
import { PhoneOperatorScheduledPage } from 'app/pages/PhoneOperatorScheduledPage/Loadable';
import { AdminCreateRolesPage } from 'app/pages/AdminCreateRolesPage/Loadable';

export const routes: IRoute[] = [
  {
    element: <></>,
    exact: true,
    path: '/admin/dashboard',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <DiasporaPage />,
    exact: true,
    path: '/admin/diasporas',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <DiasporaPage />,
    exact: true,
    path: '/admin/diasporas/:pageNo',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <DiasporaDetailPage />,
    exact: true,
    path: '/admin/diaspora/:clientId',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminScheduledPage />,
    exact: true,
    path: '/admin/scheduled',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminScheduledPage />,
    exact: true,
    path: '/admin/scheduled/:pageNo',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminPhoneOperatorDetailPage />,
    exact: true,
    path: '/admin/phoneOperator/:userId',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminBanksPage />,
    exact: true,
    path: '/admin/banks',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminBanksPage />,
    exact: true,
    path: '/admin/banks/:pageNo',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminBanksDetailPage />,
    exact: true,
    path: 'admin/bank/:userId',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminPhoneOperatorPage />,
    exact: true,
    path: '/admin/phoneOperators',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminPhoneOperatorPage />,
    exact: true,
    path: '/admin/phoneOperators/:pageNo',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminLoanOfferPage />,
    exact: true,
    path: '/admin/offers',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminLoanOfferPage />,
    exact: true,
    path: '/admin/offers/:pageNo',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminLoanOfferDetailPage />,
    exact: true,
    path: '/admin/offer/:id',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <></>,
    exact: true,
    path: '/bank/dashboard',
    isProtected: true,
    allowedRole: 'bank',
  },
  {
    element: <BanksLoanRequestPage />,
    exact: true,
    path: '/bank/requests',
    isProtected: true,
    allowedRole: 'bank',
  },
  {
    element: <BanksLoanRequestPage />,
    exact: true,
    path: '/bank/requests/:pageNo',
    isProtected: true,
    allowedRole: 'bank',
  },
  {
    element: <BanksLoanRequestDetailPage />,
    exact: true,
    path: '/bank/request/:requestId',
    isProtected: true,
    allowedRole: 'bank',
  },
  {
    element: <BanksLoanOfferPage />,
    exact: true,
    path: '/bank/offers',
    isProtected: true,
    allowedRole: 'bank',
  },
  {
    element: <BanksLoanOfferPage />,
    exact: true,
    path: '/bank/offers/:pageNo',
    isProtected: true,
    allowedRole: 'bank',
  },
  {
    element: <BankLoanOfferDetailPage />,
    exact: true,
    path: '/bank/offer/:offerId',
    isProtected: true,
    allowedRole: 'bank',
  },

  {
    element: <></>,
    exact: true,
    path: '/phoneOperator',
    isProtected: true,
    allowedRole: 'phoneOperator',
  },
  {
    element: <PhoneOperatorLoanRequestPage />,
    exact: true,
    path: '/telephonist/loanRequest',
    isProtected: true,
    allowedRole: 'telephonist',
  },
  {
    element: <PhoneOperatorLoanRequestDetailPage />,
    exact: true,
    path: '/telephonist/loanRequest/:id',
    isProtected: true,
    allowedRole: 'telephonist',
  },
  {
    element: <PhoneOperatorScheduledPage />,
    exact: true,
    path: '/telephonist/scheduled',
    isProtected: true,
    allowedRole: 'telephonist',
  },
  {
    element: <PageNotFound />,
    exact: true,
    path: '/notfound',
    isProtected: false,
    allowedRole: '*',
  },
  {
    element: <AdminCreateRolesPage />,
    exact: true,
    path: '/admin/user',
    isProtected: false,
    allowedRole: '*',
  },
];
