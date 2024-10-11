import axios from 'axios';
import Homepage, { MembersData, BenefitsData } from '../components/pages/Home';

export default async function Home() {
  try {
    const [membersData, benefitsData] = await Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/member`),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/benefits`),
    ]);

    const members: MembersData = membersData.data;
    const benefits: BenefitsData = benefitsData.data;

    return <Homepage data={members} benefits={benefits} />;
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data</div>;
  }
}
