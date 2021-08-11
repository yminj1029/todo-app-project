import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import JoinForm from '../containers/auth/JoinForm';

const JoinPage = () => {
  return (
    <AuthTemplate>
      <JoinForm></JoinForm>
    </AuthTemplate>
  );
};

export default JoinPage;
