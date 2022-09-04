// reactstrap components
import { Container, Row, Col } from 'reactstrap';

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="12">
              <div className="copyright text-center text-muted">
                © {new Date().getFullYear()}{' '}
                <a className="font-weight-bold ml-1" href="https://company.com" target="_blank" rel="noreferrer">
                  Company
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
