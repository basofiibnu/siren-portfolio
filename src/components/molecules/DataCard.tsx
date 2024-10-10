import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const DataCard = ({ title, content }: { title: string; content: string }) => (
  <div className="border p-4">
    <Heading>{title}</Heading>
    <Paragraph>{content}</Paragraph>
  </div>
);

export default DataCard;
