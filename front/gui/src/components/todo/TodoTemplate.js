import React from 'react';
import '../../lib/styles/TodoTemplate.scss';
import { Link } from 'react-router-dom';
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="white-box">
        <div className="logo-area">TODO</div>
        {children}
      </div>
      <div className="change-auth">
        <Link to="/login">로그아웃</Link>
      </div>
    </div>
  );
};

export default TodoTemplate;
