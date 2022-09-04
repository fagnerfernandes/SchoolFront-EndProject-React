import { Button, Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Total Enrolled Children
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">2,854</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-users"></i>
                        </div>
                      </Col>
                    </Row>
                    <Button
                      color="primary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                      className="mt-2 mb-0"
                    >
                      See all
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Current Enrolled Children
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">2,754</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fas fa-user"></i>
                        </div>
                      </Col>
                    </Row>
                    <Button
                      color="primary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                      className="mt-2 mb-0"
                    >
                      See all
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Future Enrolled Children
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">100</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-user-clock"></i>
                        </div>
                      </Col>
                    </Row>
                    <Button
                      color="primary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                      className="mt-2 mb-0"
                    >
                      See all
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
