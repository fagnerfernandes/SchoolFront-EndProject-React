import { Container, Row, Col, FormGroup, Input, Button, Card, CardBody, CardTitle } from 'reactstrap';
import { useContext, useState, useEffect, useRef } from 'react';
import { Context as AuthContext } from '../../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import ChildForm from './ChildForm';
import { toLocaleFormatSlash } from '../../../helpers/dateFormat';
import WaitingList from '../../../services/WaitingList';
import ReCaptchaGoogle from '../ReCaptchaGoogle/ReCaptchaGoogle';

import ReCaptcha2 from '../ReCaptchaGoogle/ReCaptcha2';

const WaitingListForm = () => {
  console.log('env', process.env);
  const { schoolId } = useParams<{ schoolId: string }>();
  const { token }: any = useContext(AuthContext);

  const [schoolName, setSchoolName] = useState('SCHOOL NAME');

  const checkNameSchool = async () => {
    try {
      const result = await WaitingList(token || '').getNameSchool(schoolId);
      setSchoolName(result?.data?.name);
    } catch (e) {
      toast.error('Error searching for school');
    }
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [aboutUs, setAboutUs] = useState('');

  const [kids, setKids] = useState([{ firstName: '', lastName: '', birthday: '', potentialDate: '' }]);

  const setChildFirstName = (value: string, index: number) => {
    const newKids = [...kids];
    newKids.forEach((k, i) => {
      if (i == index) {
        k.firstName = value;
      }
    });
    setKids(newKids);
  };

  const setChildLastName = (value: string, index: number) => {
    const newKids = [...kids];
    newKids.forEach((k, i) => {
      if (i == index) {
        k.lastName = value;
      }
    });
    setKids(newKids);
  };

  const setChildBirthday = (value: string, index: number) => {
    const newKids = [...kids];
    newKids.forEach((k, i) => {
      if (i == index) {
        k.birthday = toLocaleFormatSlash(value);
      }
    });
    setKids(newKids);
  };

  const setPotentialDate = (value: string, index: number) => {
    const newKids = [...kids];
    newKids.forEach((k, i) => {
      if (i == index) {
        k.potentialDate = toLocaleFormatSlash(value);
      }
    });
    setKids(newKids);
  };

  const addKids = () => {
    const newKids = [...kids];
    newKids.push({ firstName: '', lastName: '', birthday: '', potentialDate: '' });
    setKids(newKids);
  };

  const deleteKids = (index: number) => {
    const newKids = kids.filter((_, i) => index !== i);
    setKids(newKids);
  };

  //   useEffect(() => {
  //     console.log(kids);
  //   }, [kids]);

  useEffect(() => {
    checkNameSchool();
  }, [schoolId]);

  return (
    <>
      <Container fluid>
        <Card>
          <CardBody>
            <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
              <h1>Waiting List</h1>
            </CardTitle>
            <Row>
              <Col>
                <h2>Your Information</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  To add your family's name to the waiting list at {schoolName}, please provide the following
                  information:
                </p>
              </Col>
            </Row>
            <Card>
              <CardBody>
                <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                  Parent information
                </CardTitle>

                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="input-firstName">
                        First Name
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-firstName"
                        placeholder="First Name"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="input-lastName">
                        Last Name
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-lastName"
                        placeholder="Last Name"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="input-email">
                        Email address
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-email"
                        placeholder="Email address"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label">Phone</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="Phone"
                        type="text"
                        mask="(999) 999-9999"
                        tag={InputMask}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="input-aboutUs">
                        How did you hear about us?
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-aboutUs"
                        placeholder="How did you hear about us?"
                        type="text"
                        onChange={(e) => setAboutUs(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                  Childs information
                </CardTitle>

                {kids.map((child, index: number) => (
                  <ChildForm
                    firstName={child.firstName}
                    lastName={child.lastName}
                    birthday={child.birthday}
                    potentialDate={child.potentialDate}
                    index={index}
                    setFirstName={setChildFirstName}
                    setLastName={setChildLastName}
                    setBirthday={setChildBirthday}
                    setPotentialDate={setPotentialDate}
                    deleteChild={deleteKids}
                  />
                ))}
                <Row>
                  <Col>
                    <Button color="info" size="md" onClick={addKids}>
                      Add Kids
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Row>
              <p>
                By completing and submitting this web form, I am authorizing {schoolName} staff to contact me via email
                and/or phone regarding enrollment information.
              </p>
            </Row>

            {/* <ReCaptchaGoogle /> */}
            <ReCaptcha2 />

            <Row className="waiting-list-btn-submit">
              <Button color="btn-primary" size="md" className="btn btn-primary">
                Submit
              </Button>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default WaitingListForm;
