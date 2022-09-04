import { confirmAlert as reactConfirmAlert } from 'react-confirm-alert';
import { Container, Button, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

type ClassAlertProps = {
  title: string;
  messageType: string;
  id?: string;
  onClickYes: (param?: any) => void;
};

const confirmAlert = ({ title, messageType, id, onClickYes }: ClassAlertProps) => {
  const validMessageTypes = [
    { messageType: 'SAVE', text: 'save' },
    { messageType: 'EDIT', text: 'edit' },
    { messageType: 'DELETE', text: 'delete' },
  ];
  const message = `${validMessageTypes.find((m) => m.messageType === messageType)?.text || 'save'}`;
  return reactConfirmAlert({
    customUI: ({ onClose }) => {
      return (
        <Container fluid>
          <Card>
            <CardBody>
              <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                {title}
              </CardTitle>
              <Row className="mt-3">
                <Col md="12 text-center">
                  <span className="h2 font-weight-bold mb-0">{`Are you sure to ${message} item${
                    id ? `: ${id}` : ''
                  }?`}</span>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col md="6 text-center">
                  <Button
                    color="primary"
                    href="#"
                    onClick={() => {
                      onClickYes(id);
                      onClose();
                    }}
                    size="lg"
                    style={{ minWidth: '100px' }}
                  >
                    Yes
                  </Button>
                </Col>
                <Col md="6 text-center">
                  <Button color="danger" href="#" onClick={onClose} size="lg" style={{ minWidth: '100px' }}>
                    No
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      );
    },
  });
};

export default confirmAlert;
