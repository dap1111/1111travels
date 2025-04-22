import Header from '@/app/ui/Header/Header';
import React from 'react';

const headerData = {
  logo: '/images/logo_2.svg',
};

export default function layout({ children }) {
  return (
    <>
      <Header {...headerData} variant="cs_color_1" />
      {children}
    </>
  );
}
