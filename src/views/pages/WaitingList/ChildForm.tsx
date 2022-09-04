import { Row, Col, FormGroup, InputGroup, Input, Label, Button, InputGroupAddon, InputGroupText } from 'reactstrap';
import ReactDatetime from 'react-datetime';

type ChildFormProps = {
  firstName: string;
  lastName: string;
  birthday: string;
  potentialDate: string;
  index: number;

  setFirstName: (value: string, index: number) => void;
  setLastName: (value: string, index: number) => void;
  setBirthday: (value: string, index: number) => void;
  setPotentialDate: (value: string, index: number) => void;
  deleteChild: (index: number) => void;
};

const ChildForm = ({
  firstName,
  lastName,
  birthday,
  potentialDate,
  index,
  setFirstName,
  setLastName,
  setBirthday,
  setPotentialDate,
  deleteChild,
}: ChildFormProps) => {
  return (
    <>
      <Row>
        <Col lg="3">
          <FormGroup>
            <Label className="form-control-label">First Name</Label>
            <Input
              className="form-control-alternative"
              id="input-firstName"
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value, index)}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="3">
          <FormGroup>
            <Label className="form-control-label">Last Name</Label>
            <Input
              className="form-control-alternative"
              id="input-lastName"
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value, index)}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="2">
          <FormGroup>
            <label className="form-control-label">Birthday</label>
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                inputProps={{
                  placeholder: 'Birthday',
                  required: true,
                }}
                onChange={(newValue) => {
                  setBirthday(`${newValue}`, index);
                }}
                timeFormat={false}
                value={`${birthday}`}
                dateFormat={'MM/DD/yyyy'}
                closeOnSelect={true}
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col lg="2">
          <FormGroup>
            <label className="form-control-label">Potential Start Date</label>
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                inputProps={{
                  placeholder: 'Potential Start Date',
                  required: true,
                }}
                onChange={(newValue) => {
                  setPotentialDate(`${newValue}`, index);
                }}
                timeFormat={false}
                value={`${potentialDate}`}
                dateFormat={'MM/DD/yyyy'}
                closeOnSelect={true}
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col lg="2">
          {index > 0 && (
            <Button color="warning" className="waiting-list-btn-delete" size="md" onClick={() => deleteChild(index)}>
              Delete
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ChildForm;
