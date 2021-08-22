import React from 'react';
import '../../lib/styles/TodoTemplate.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../modules/auth';
import { withRouter } from 'react-router-dom';

const TodoTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    const username = localStorage.getItem('user');
    dispatch(logout({ username }));
    localStorage.clear();
    window.location.replace('http://localhost:3000/login');
  };

  return (
    <div className="TodoTemplate">
      <div className="white-box">
        <div className="logo-area">
          <Link to="/todo">TODO</Link>
        </div>
        {children}
      </div>
      <div className="change-auth">
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
};

export default withRouter(TodoTemplate);
