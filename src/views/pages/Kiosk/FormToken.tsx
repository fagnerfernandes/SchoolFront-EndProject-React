import { Row, Col, Button, Input, Form, CardBody } from 'reactstrap';
import { useContext, useState } from 'react';
import { Context as AuthContext } from '../../../contexts/AuthContext';
import { toast } from 'react-toastify';
import KioskService from '../../../services/Kiosk';

type props = {
  changeSubmitToken: () => void;
};

const FormToken = ({ changeSubmitToken }: props) => {
  const { token }: any = useContext(AuthContext);
  const [tokenKiosk, setTokenKiosk] = useState('');

  const submitToken = () => {
    //sessionStorage.setItem('company_token', tokenKiosk);
    localStorage.setItem('company_token', tokenKiosk);
    toast.success(`Kiosk registered successfully!`);
    changeSubmitToken();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      tokenKiosk,
    };

    try {
      const result = await KioskService(token).checkToken(body);

      if (result?.data?.isValidSchool === true) {
        //toast.success(`Successfully!`);
        submitToken();
      } else {
        toast.error('Invalid Token');
      }
    } catch (e: any) {
      toast.error('Invalid Token');
    }
  };

  return (
    <>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Row className="">
            <Col className="">
              <Input
                className="form-control-alternative"
                id="tokenSchool"
                placeholder="Token School"
                type="text"
                onChange={(e) => setTokenKiosk(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="my-4" color="primary" type="submit">
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </>
  );
};

export default FormToken;
