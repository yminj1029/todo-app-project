import React from 'react';
import '../../lib/styles/TodoTemplate.scss';
import { Link } from 'react-router-dom';

const AuthTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="white-box" style={{ margin: '8rem' }}>
        <div className="logo-area">
          <Link to="/todo">TODO</Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
