import React from 'react';
import SignUpPage from '../../../components/registerSection/SingUp';

export const metadata = {
  title: "Sign Up | Car Rental",
  description:
    "Create your Car Rental account and explore premium car rental services with luxury and sports cars.",
};

const page = () => {
  return (
    <div>
      <SignUpPage></SignUpPage>
    </div>
  );
};

export default page;