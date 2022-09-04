import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'reactstrap';
//import { QrReader } from 'react-qr-reader';

type props = {
  pinCodeQr: (type: string) => void;
  changeSubmitPin: () => void;
};

const ReaderQrCode = ({ pinCodeQr, changeSubmitPin }: props) => {
  //export const ReaderQrCode = () => {
  const [data, setData] = useState('No result');
  const constraints = {
    // width: { min: 600, ideal: 1920, max: 1920 },
    // height: { min: 600, ideal: 1080 },
    // aspectRatio: 1.777777778,
    // frameRate: { max: 30 },
    // facingMode: { exact: 'user' },
  };

  useEffect(() => {
    changeSubmitPin();
  }, [data]);

  return (
    <>
      <Card className="kiosk-qrcode-card">
        <Row>
          <Col>QRCode</Col>
        </Row>
        <Row className="kiosk-qrcode-reader-cam">
          <Col></Col>
        </Row>
      </Card>
    </>
  );
};
export default ReaderQrCode;
