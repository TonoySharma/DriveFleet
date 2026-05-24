import LoginInPage from '@/components/loginSection/LogInAccount';
import React from 'react';

export const metadata = {
  title: "Log In | Car Rental",
  description:
    "Log in to your Car Rental account and manage your reservations.",
};

const page = () => {
  return (
    <div>
      <LoginInPage></LoginInPage>
    </div>
  );
};

export default page;