/* eslint-disable no-unused-vars */
import React from 'react';
import { Header, LineChart } from '../../components';

const Line = () => {
  return (
    <div className='m-4 md:m-5 mt-24 p-5 bg-white dark:bg-secondary-dark-bg rounded-md'>
      <Header
        category='Chart'
        title='Inflation Rate'
      />
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
