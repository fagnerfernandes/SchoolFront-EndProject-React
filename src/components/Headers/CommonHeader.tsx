import { Container, Row } from 'reactstrap';

const CommonHeader = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row></Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CommonHeader;
