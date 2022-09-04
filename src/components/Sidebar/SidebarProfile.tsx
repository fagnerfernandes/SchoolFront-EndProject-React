import { useContext, useState } from 'react';
import { NavLink as NavLinkRRD } from 'react-router-dom';
import { Context as AuthContext } from '../../contexts/AuthContext';
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import isAutorized from '../../helpers/isAutorized';
import { Link } from 'react-router-dom';

const Sidebar = (props: any) => {
  const { handleLogout, user }: any = useContext(AuthContext);
  const logout = async (e: any) => {
    e.preventDefault();
    handleLogout();
  };
  const [collapseOpen, setCollapseOpen] = useState(false);

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  const createLinks = (routes: any) => {
    return routes
      .filter((r: any) => {
        if (!r.isItemMenu) {
          return false;
        }
        const { user }: any = useContext(AuthContext);
        return isAutorized(r, user);
      })
      .map((prop: any, key: any) => {
        return (
          <NavItem key={key}>
            <NavLink to={prop.path} tag={NavLinkRRD} onClick={closeCollapse} activeClassName="active">
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
          </NavItem>
        );
      });
  };

  const { routes } = props;

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

      <Navbar className="navbar-vertical fixed-left navbar-light bg-white" expand="md" id="sidenav-main">
        <Container fluid>
          <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
            <span className="navbar-toggler-icon" />
          </button>
          <Collapse navbar isOpen={collapseOpen}>
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-close" xs="6"></Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>

            <Row style={{ textAlign: 'center' }} className="mt-4 mb-3 d-md-none">
              <Col>
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
              <Col>
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
                    <DropdownItem to="#">
                      <i className="ni ni-single-02" />
                      <span>Not 1</span>
                    </DropdownItem>
                    <DropdownItem to="#">
                      <i className="ni ni-single-02" />
                      <span>Not 2</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col>
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

                    <DropdownItem href="/auth/logout" onClick={logout}>
                      <i className="ni ni-user-run" />
                      <span>Logout</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>

            <Form className="mt-4 mb-3 d-md-none">
              <InputGroup className="input-group-rounded input-group-merge">
                <Input
                  aria-label="Search"
                  className="form-control-rounded form-control-prepended"
                  placeholder="Search"
                  type="search"
                />
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <span className="fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Form>
            <hr className="my-3" />
            <Nav navbar>{createLinks(routes)}</Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

export default Sidebar;
