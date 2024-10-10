import DataCard from '../molecules/DataCard';

const DataDisplay = ({ data }: { data: any }) => (
  <div>
    {data && (
      <>
        <DataCard title="Data 1" content={JSON.stringify(data.data1, null, 2)} />
        <DataCard title="Data 2" content={JSON.stringify(data.data2, null, 2)} />
      </>
    )}
  </div>
);

export default DataDisplay;
