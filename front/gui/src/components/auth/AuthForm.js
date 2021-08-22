import React from 'react';
import '../../lib/styles/Auth.scss';
import { Link } from 'react-router-dom';

//로그인페이지, 회원가입 페이지 내용을 보여줌
const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <div className="authBlock">
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          type="text"
          placeholder="닉네임"
          onChange={onChange}
          value={form.username}
        ></input>
        {type === 'login' && (
          <input
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          ></input>
        )}
        {type === 'register' && (
          <>
            <input
              autoComplete="email"
              name="email"
              placeholder="이메일 주소"
              type="email"
              onChange={onChange}
              value={form.email}
            ></input>
            <input
              autoComplete="new-password"
              name="password"
              placeholder="비밀번호"
              type="password"
              onChange={onChange}
              value={form.password}
            ></input>
            <input
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            ></input>
          </>
        )}
        <button>{text}</button>
      </form>
      {error && <div className="error">{error}</div>}
      <div className="footer">
        {type === 'login' ? (
          <Link to="/join">회원가입</Link>
        ) : (
          <Link to="/">로그인</Link>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
