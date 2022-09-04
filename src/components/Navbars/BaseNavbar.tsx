import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context as AuthContext } from '../../contexts/AuthContext';
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
  Row,
  Col,
} from 'reactstrap';

const BaseNavbar = (props: any) => {
  const { handleLogout, user }: any = useContext(AuthContext);
  const logout = async (e: any) => {
    e.preventDefault();
    handleLogout();
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal} className="pb-0">
          My Code
        </ModalHeader>
        <ModalBody className="pt-0"></ModalBody>
        <ModalFooter style={{ textAlign: 'center' }}>
          <span className="h2 font-weight-bold" style={{ margin: '0 auto' }}>{`${user?.pin || '-'}`}</span>
        </ModalFooter>
      </Modal>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">
            {props.brandText}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search child or staff" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <Row>
              <Col style={{ padding: '0' }}>
                <a aria-haspopup="true" className="nav-link" aria-expanded="true" href="#">
                  <i className="fas fa-comment" style={{ fontSize: 'xx-large', paddingTop: '7px' }}></i>
                  <Badge
                    color="primary"
                    className="badge-md badge-circle badge-floating border-white"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      margin: '-15px 10px 0px',
                      padding: '0',
                    }}
                  >
                    4
                  </Badge>
                </a>
              </Col>
              <Col style={{ paddingRight: '35px' }}>
                <UncontrolledDropdown nav>
                  <DropdownToggle className="pr-0" nav style={{ paddingLeft: '0' }}>
                    <Media className="align-items-center">
                      <i className="fas fa-bell" style={{ fontSize: 'xx-large', paddingTop: '7px' }}></i>
                      <Badge
                        color="primary"
                        className="badge-md badge-circle badge-floating border-white"
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          margin: '-15px 10px 0px',
                          padding: '0',
                        }}
                      >
                        4
                      </Badge>
                    </Media>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem className="noti-title" header tag="div">
                      <h6 className="text-overflow m-0">Notifications</h6>
                    </DropdownItem>
                    <DropdownItem to="#" tag={Link}>
                      <i className="ni ni-single-02" />
                      <span>Not 1</span>
                    </DropdownItem>
                    <DropdownItem to="#" tag={Link}>
                      <i className="ni ni-single-02" />
                      <span>Not 2</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
          </Nav>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav style={{ paddingLeft: '0' }}>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt={`${user.firstName}`}
                      src={user?.picture ? `${user.picture}` : require('../../assets/img/user-default.png').default}
                      style={{ height: '100%' }}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">{`${user.firstName || '-'} ${
                      user.lastName || ''
                    }`}</span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/support" tag={Link}>
                  <i className="fas fa-headset" />
                  <span>Support</span>
                </DropdownItem>

                <DropdownItem onClick={toggleModal} to="#" tag={Link}>
                  <i className="ni ni-badge" />
                  <span>My Code</span>
                </DropdownItem>

                <DropdownItem to="#" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>
                    <span className="font-weight-light">REF: </span> {`${user?.pin || '-'}`}
                  </span>
                </DropdownItem>
                <DropdownItem divider />
                {/* <DropdownItem href="/auth/login">
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem> */}
                <DropdownItem href="/auth/logout" onClick={logout}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default BaseNavbar;
