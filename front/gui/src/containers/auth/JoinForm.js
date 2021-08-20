import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';
const JoinForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
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
    const { username, email, password, passwordConfirm } = form;
    if ([username, email, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' })
      );
      return;
    }
    dispatch(register({ username, email, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      if (authError.response.status === 400) {
        setError('이미 존재하는 아이디입니다.');
        return;
      }
      if (authError.response.status === 500) {
        setError('이미 존재하는 email입니다.');
        return;
      }
      if (authError.response.status === 403) {
        setError('비밀번호는 8글자 이상이어야 합니다.');
        return;
      }
      //기타이유
      setError('회원가입 실패');
      return;
    }
    if (auth) {
      console.log(auth);
      setError('');
      dispatch(initializeForm('register'));
      history.push('/login'); //회원가입 성공 후 redux비우기
    }
  }, [auth, authError, dispatch, history]);

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
