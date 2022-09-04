import { useParams } from 'react-router-dom';

const NotFound = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h1>Not Found {id}</h1>
    </>
  );
};

export default NotFound;
