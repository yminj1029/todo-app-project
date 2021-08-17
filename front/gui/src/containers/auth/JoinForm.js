import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { userCheck } from '../../modules/user';
import { withRouter } from 'react-router-dom';
const JoinForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  //에러 발생
  const [error, setError] = useState(null);

  //인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  };
  //폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password1, password2 } = form;
    console.log(password1.length);
    if ([username, email, password1, password2].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    if (password1.length <= 8) {
      setError('password는 8글자 이상');
    }
    if (password1 !== password2) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password1', value: '' }));
      dispatch(changeField({ form: 'register', key: 'password2', value: '' }));
      return;
    }
    dispatch(register({ username, email, password1, password2 }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      if (authError.response.status === 400) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      //기타이유
      setError('회원가입 실패');
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(userCheck());
    }
  }, [auth, authError, dispatch]);

  //user값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      console.log('checkAPI성공');
      console.log(user);
      history.push('/');
    }
  }, [history, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    ></AuthForm>
  );
};

export default withRouter(JoinForm);
