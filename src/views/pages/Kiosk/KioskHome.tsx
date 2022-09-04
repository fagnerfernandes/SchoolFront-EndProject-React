import { Row, Col } from 'reactstrap';
import { useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Context as AuthContext } from '../../../contexts/AuthContext';
import KioskService from '../../../services/Kiosk';
import DataTime from './DataTime';
import ReaderQrCode from './ReaderQrCode';
import KioskKeypad from './KioskKeypad';
import KioskUser from './KioskUser';
import FormToken from './FormToken';

const KioskHome = () => {
  const [pinCode, setPinCode] = useState('');
  const { token }: any = useContext(AuthContext);
  const [resultData, setResultData] = useState({} as any);
  const [submitPin, setSubmitPin] = useState(false);
  const [showUserRow, setShowUserRow] = useState(false);
  const [haveTokenKiosk, setHaveTokenKiosk] = useState(false);

  //const tokenKiosk = sessionStorage.getItem('company_token');
  const tokenKiosk = localStorage.getItem('company_token');

  const changeSubmitPin = () => {
    setSubmitPin(!submitPin);
  };

  const changeSubmitKeypadPin = () => {
    setSubmitPin(!submitPin);
  };

  const changeSubmitToken = () => {
    setHaveTokenKiosk(!haveTokenKiosk);
  };

  const setNewShowUserRow = () => {
    setShowUserRow(false);
  };

  const submit = async () => {
    const body = {
      pin: pinCode,
    };
    try {
      const result = await KioskService(token).showUser(body);

      setResultData(result);
      setShowUserRow(true);
    } catch (e) {
      toast.error('Invalid PIN');
    }
    setPinCode('');
  };

  const pinCodeQr = async (pinCodeQr: string) => {
    setPinCode(pinCodeQr);
  };

  const pinCodeButtons = async (pinCodeButtons: string) => {
    setPinCode(pinCodeButtons);
  };

  //We check if it has the pin code
  useEffect(() => {
    if (pinCode) {
      submit();
    } else {
      setPinCode('');
    }
  }, [submitPin]);

  useEffect(() => {
    if (tokenKiosk) {
      setHaveTokenKiosk(true);
    }
  }, []);

  return (
    <>
      {haveTokenKiosk && (
        <>
          <Row>
            <Col lg="4" md="4" className="kiosk-left">
              <div className="kiosk-read">
                <DataTime />
                <ReaderQrCode pinCodeQr={pinCodeQr} changeSubmitPin={changeSubmitPin} />
                <Row className="kiosk-copy">
                  <Col>
                    <span>Company</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="8" md="8" className="kiosk-right">
              {!showUserRow && (
                <>
                  <Row>
                    <Col>
                      <KioskKeypad pinCodeButtons={pinCodeButtons} changeSubmitKeypadPin={changeSubmitKeypadPin} />
                    </Col>
                  </Row>
                </>
              )}

              {showUserRow && (
                <>
                  <Row className="kiosk-user">
                    <Col>
                      <KioskUser dataResult={resultData} setNewShowUserRow={setNewShowUserRow} />
                    </Col>
                  </Row>
                </>
              )}
            </Col>
          </Row>
        </>
      )}

      {!haveTokenKiosk && (
        <>
          <Row>
            <Col>
              <FormToken changeSubmitToken={changeSubmitToken} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default KioskHome;
