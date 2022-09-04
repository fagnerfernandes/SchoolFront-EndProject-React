import Chart from 'chart.js';
import { HorizontalBar } from 'react-chartjs-2';
import { Button, Card, CardHeader, CardBody, CardTitle, Table, Container, Row, Col } from 'reactstrap';
import { chartOptions, parseOptions } from '../variables/charts.js';
import HomeHeader from '../components/Headers/HomeHeader';

const Index = (_: any) => {
  // @ts-ignore
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const dataFirstHorizontalBar: any = {
    labels: ['Full Time', 'Part Time', 'Others', 'VPK Only'],
    datasets: [
      {
        indexAxis: 'y',
        label: '',
        backgroundColor: '#5e72e4',
        borderWidth: 1,
        borderColor: '#5e72e4',
        data: [11, 9, 5, 5],
      },
    ],
  };

  const dataSecondHorizontalBar: any = {
    labels: ['Full Time', 'Part Time', 'Others', 'VPK Only'],
    datasets: [
      {
        indexAxis: 'y',
        label: '',
        backgroundColor: '#f5365c',
        borderWidth: 1,
        borderColor: '#f5365c',
        data: [11, 4, 6, 2],
      },
    ],
  };

  const optionsSecondHorizontalBar: any = {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      y: {
        type: 'category',
        axis: 'x',
      },
    },
  };

  const dataThirdHorizontalBar: any = {
    labels: ['Full Time', 'Part Time', 'Others', 'VPK Only'],
    datasets: [
      {
        indexAxis: 'y',
        label: '',
        backgroundColor: '#2dce89',
        borderWidth: 1,
        borderColor: '#2dce89',
        data: [25, 20, 30, 22],
      },
    ],
  };

  const optionsThirdHorizontalBar: any = {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      y: {
        type: 'category',
        axis: 'x',
      },
    },
  };

  return (
    <>
      <HomeHeader />
      <Container className="mt--7" fluid>
        <Row className="mb-4">
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                      Children Checked IN
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">156</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                      <i className="fas fa-user-check"></i>
                    </div>
                  </Col>
                </Row>
                <Button color="primary" href="#" onClick={(e) => e.preventDefault()} size="sm" className="mt-2 mb-0">
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
                      Staff Checked IN
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">30</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-default text-white rounded-circle shadow">
                      <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                  </Col>
                </Row>
                <Button color="primary" href="#" onClick={(e) => e.preventDefault()} size="sm" className="mt-2 mb-0">
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
                      Birthdays This Week
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">6</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i className="fas fa-birthday-cake"></i>
                    </div>
                  </Col>
                </Row>
                <Button color="primary" href="#" onClick={(e) => e.preventDefault()} size="sm" className="mt-2 mb-0">
                  See all
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">ENROLLED BUT NOT STARTED</h6>
                    <h2 className="mb-0">Total: 30</h2>
                  </div>
                  <Button
                    color="primary"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="mt-2 mb-0 mr-3"
                  >
                    See all
                  </Button>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <HorizontalBar
                    data={dataFirstHorizontalBar}
                    options={{
                      responsive: true,
                      legend: {
                        display: false,
                      },
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">ENROLLED BUT NOT responding</h6>
                    <h2 className="mb-0">Total: 20</h2>
                  </div>
                  <Button
                    color="primary"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="mt-2 mb-0 mr-3"
                  >
                    See all
                  </Button>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <HorizontalBar data={dataSecondHorizontalBar} options={optionsSecondHorizontalBar} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">Current Enrolled Children</h6>
                    <h2 className="mb-0">Total: 97</h2>
                  </div>
                  <Button
                    color="primary"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="mt-2 mb-0 mr-3"
                  >
                    See all
                  </Button>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <HorizontalBar data={dataThirdHorizontalBar} options={optionsThirdHorizontalBar} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Reminders</h3>
                  </div>
                  <div className="col text-right">
                    <Button color="primary" href="#a" onClick={(e) => e.preventDefault()} size="sm">
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <tbody>
                  <tr>
                    <th scope="row">02/02/2022</th>
                    <td>Mia Salamone</td>
                    <td>Charge for February</td>
                  </tr>
                  <tr>
                    <th scope="row">03/02/2022</th>
                    <td>Mia Salamone</td>
                    <td>Charge for March</td>
                  </tr>
                  <tr>
                    <th scope="row">04/02/2022</th>
                    <td>Mia Salamone</td>
                    <td>Charge for April</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="3"></Col>
          <Col xl="3"></Col>
          <Col xl="3"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
