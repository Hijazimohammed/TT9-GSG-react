import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../../router/paths';
import { ROLES } from '../../../constants';
import { useAuthContext } from '../../../contexts/AuthContext';

const AdminGuard = () => {
  const { role } = useAuthContext();
  if (role === ROLES.ADMIN)
    return <Navigate to={PATHS.ADMIN.ROOT} replace={true} />;
  return <Navigate to={PATHS.HOME} replace={true} />;
};

export default AdminGuard;
