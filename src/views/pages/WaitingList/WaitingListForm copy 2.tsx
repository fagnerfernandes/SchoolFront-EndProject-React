import { Container, Row, Col, FormGroup, Input, Button, Card, CardBody, CardTitle, Form } from 'reactstrap';
import { useContext, useState, useEffect, useRef, useCallback } from 'react';
import { Context as AuthContext } from '../../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import ChildForm from './ChildForm';
import { toLocaleFormatSlash } from '../../../helpers/dateFormat';
import WaitingList from '../../../services/WaitingList';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCaptchaGoogle from '../ReCaptchaGoogle/ReCaptchaGoogle';

const WaitingListForm = () => {
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

  const [tokenReCaptchaGoogle, setTokenReCaptchaGoogle] = useState('');

  const [newTokenGenerate, setNewTokenGenerate] = useState(false);
  const generateNewToken = async () => {
    setNewTokenGenerate(!newTokenGenerate);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await generateNewToken();

    const body = {
      tokenReCaptchaGoogle: 'dddddddddd',
      firstName,
      lastName,
      email,
      phone,
      //aboutUs,
      schoolId,
      statusDescription: 'Waiting List',
      kids,
    };

    console.log(body);

    try {
      await WaitingList(token || '').create(body);
      resetFields();
      toast.success(`successfully!`);
    } catch (e: any) {
      const message = String(e?.response?.data?.message || 'Create error!');
      toast.error(message);
    }
  };

  const resetFields = () => {
    setFirstName('');
    setLastName('');
    setPhone('');
    //window.location.reload();
    toast.success(` wwwwww!`);
  };

  useEffect(() => {
    checkNameSchool();
  }, [schoolId]);

  //   useEffect(() => {
  //     handleSubmit;
  //   }, [tokenReCaptchaGoogle]);

  return (
    <>
      <Container fluid>
        <Form onSubmit={handleSubmit}>
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
                        <label className="form-control-label">First Name</label>
                        <Input
                          className="form-control-alternative"
                          id="input-firstName"
                          placeholder="First Name"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label">Last Name</label>
                        <Input
                          className="form-control-alternative"
                          id="input-lastName"
                          placeholder="Last Name"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label">Email address</label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          placeholder="Email address"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
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
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label">How did you hear about us?</label>
                        <Input
                          className="form-control-alternative"
                          id="input-aboutUs"
                          placeholder="How did you hear about us?"
                          type="text"
                          onChange={(e) => setAboutUs(e.target.value)}
                          required
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
                  By completing and submitting this web form, I am authorizing {schoolName} staff to contact me via
                  email and/or phone regarding enrollment information.
                </p>
              </Row>

              <GoogleReCaptchaProvider reCaptchaKey={`${process.env.REACT_APP_GOOGLE_RECAPTCHA_PUBLIC_KEY || ''}`}>
                <ReCaptchaGoogle
                  setTokenReCaptchaGoogle={setTokenReCaptchaGoogle}
                  generateNewToken={newTokenGenerate}
                />
              </GoogleReCaptchaProvider>

              <Row>
                <Button type="submit" color="btn-primary" size="md" className="btn btn-primary">
                  Submit
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Form>
      </Container>
    </>
  );
};

export default WaitingListForm;
