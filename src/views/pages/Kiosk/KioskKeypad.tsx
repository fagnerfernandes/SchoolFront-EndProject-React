import { Row, Col, Button, Input } from 'reactstrap';
import { useState } from 'react';

type props = {
  pinCodeButtons: (type: string) => void;
  changeSubmitKeypadPin: () => void;
};

const KioskKeypad = ({ pinCodeButtons, changeSubmitKeypadPin }: props) => {
  const [pinCode, setPinCode] = useState('');

  const enterPinCode = async (pin: number) => {
    const newPinCode = pinCode + pin;
    setPinCode(newPinCode);
  };

  const resetKeypad = async () => {
    setPinCode('');
  };

  const submitKeypad = async () => {
    pinCodeButtons(pinCode);
    changeSubmitKeypadPin();
    setPinCode('');
  };

  return (
    <>
      <Row className="kiosk-keypad-main">
        <Col className="kiosk-keypad-mail-col">
          <Row>
            <Col className="kiosk-keypad-pin">
              <Input
                className="form-control-alternative kiosk-keypad-pin-hidden"
                id="pinCode"
                placeholder=""
                type="password"
                value={pinCode}
                disabled
              />
            </Col>
          </Row>
          <Row className="buttonsNumbers">
            <Col>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(1)}>
                1
              </button>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(2)}>
                2
              </button>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(3)}>
                3
              </button>
            </Col>
          </Row>
          <Row className="buttonsNumbers">
            <Col>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(4)}>
                4
              </button>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(5)}>
                5
              </button>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(6)}>
                6
              </button>
            </Col>
          </Row>
          <Row className="buttonsNumbers">
            <Col>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(7)}>
                7
              </button>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(8)}>
                8
              </button>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(9)}>
                9
              </button>
            </Col>
          </Row>
          <Row className="buttonsNumbers">
            <Col>
              <button type="button" className="btn btn-warning btn-circle btn-md-warning" onClick={() => resetKeypad()}>
                <i className="ni ni-bold-left"></i>
              </button>
              <button type="button" className="btn btn-primary btn-circle btn-md" onClick={() => enterPinCode(0)}>
                0
              </button>
              <Button
                type="submit"
                className="btn btn-success btn-circle btn-md-success"
                onClick={() => submitKeypad()}
              >
                <i className="ni ni-check-bold"></i>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default KioskKeypad;
