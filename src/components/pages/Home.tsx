'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import MainTemplate from '../templates/MainTemplate';
import DataDisplay from '../organisms/DataDisplay';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2] = await Promise.all([axios.get('/api/sample'), axios.get('/api/sample')]);
        setData({ data1: res1.data, data2: res2.data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainTemplate>
      <h1>Home Page</h1>
      <DataDisplay data={data} />
    </MainTemplate>
  );
};

export default Home;
