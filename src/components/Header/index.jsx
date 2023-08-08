import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { PATHS } from '../../router/paths';
import { useThemeContext } from '../../context/ThemeContext';
import { useAuthContext } from '../../context/AuthContext';
import { ROLES, THEMES } from '../../constants';

export const Header = () => {
  const { theme, changeTheme } = useThemeContext();
  const { role, user } = useAuthContext();
  return (
    <header
      className={`header ${theme == THEMES.LIGHT ? 'header' : 'header_dark'}`}>
      <h1>Header</h1>

      <nav>
        <ul>
          <li>
            <NavLink to={PATHS.HOME}>
              {({ isActive, isPending }) => (isActive ? <u>Home</u> : 'Home')}
            </NavLink>
          </li>

          <li>
            <NavLink to={PATHS.PRODUCTS.ROOT}>
              {({ isActive, isPending }) =>
                isActive ? <u>PRODUCTS</u> : 'PRODUCTS'
              }
            </NavLink>
          </li>

          {role === ROLES.ADMIN && (
            <li>
              <NavLink to={PATHS.ADMIN.ROOT}>
                {({ isActive, isPending }) =>
                  isActive ? <u>ADMIN</u> : 'ADMIN'
                }
              </NavLink>
            </li>
          )}
          {user == null && (
            <>
              <li>
                <NavLink to={PATHS.LOGIN}>
                  {({ isActive, isPending }) =>
                    isActive ? <u>Login</u> : 'Login'
                  }
                </NavLink>
              </li>
              <li>
                <NavLink to={PATHS.SIGNUP}>
                  {({ isActive, isPending }) =>
                    isActive ? <u>Sign up</u> : 'Sign up'
                  }
                </NavLink>
              </li>
            </>
          )}

          <li>
            <button onClick={() => changeTheme()}>
              {theme == THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
