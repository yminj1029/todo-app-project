import React from 'react';
import '../../lib/styles/TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="white-box">
        <div className="logo-area">TODO</div>
        {children}
      </div>
    </div>
  );
};

export default TodoTemplate;
