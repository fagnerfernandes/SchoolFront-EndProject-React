import { Container, Spinner } from 'reactstrap';

const LoaderSpinner = () => {
  const customStyles: any = {
    position: 'absolute',
    top: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'inherit',
  };
  return (
    <>
      <Container className="text-center" style={customStyles} fluid>
        <Spinner />
      </Container>
    </>
  );
};

export default LoaderSpinner;
