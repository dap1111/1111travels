import Footer from '@/app/ui/Footer/Footer';
import Header from '@/app/ui/Header/Header';
import React from 'react';

const headerData = {
  logo: '/images/1111.svg',
};

export default function layout({ children }) {
  return (
    <>
      <Header {...headerData} />
      {children}
    </>
  );
}
