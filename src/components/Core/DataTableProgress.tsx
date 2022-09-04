import { Container, Spinner } from 'reactstrap';

const DataTableProgress = () => {
  return (
    <>
      <Container className="pt-4 pb-6 text-center" fluid>
        <Spinner />
      </Container>
    </>
  );
};

export default DataTableProgress;
