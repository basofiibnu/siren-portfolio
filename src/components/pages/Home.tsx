'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import MainTemplate from '../templates/MainTemplate';
import DataDisplay from '../organisms/DataDisplay';
import Box from '../atoms/Box';
import Hero from '../organisms/Hero';
import Slider from '../organisms/Slider';
import Benefits from '../organisms/Benefits';

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
      <Box className="my-10 flex flex-col gap-8">
        <Box className="flex items-center justify-start gap-2 ">
          <Box className="w-full">
            <Hero />
          </Box>
          <Box className="w-full">
            <Slider />
          </Box>
        </Box>

        <Box className="mt-8">
          <Benefits />
        </Box>
      </Box>
      {/* <DataDisplay data={data} /> */}
    </MainTemplate>
  );
};

export default Home;
