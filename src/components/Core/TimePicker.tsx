import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import RcTimePicker from 'rc-time-picker';
import moment from 'moment';
import { useEffect } from 'react';

type TimePickerProps = {
  showSecond?: boolean;
  format?: string;
  onChangeTime: (time: any) => void;
  defaultValue?: string;
  value?: string;
};

const TimePicker = ({ showSecond, format, onChangeTime, defaultValue, value }: TimePickerProps) => {
  const isShowSecond = typeof showSecond === 'undefined' ? false : showSecond;
  const currentFormat = typeof format === 'undefined' ? 'h:mm a' : format;
  const now = moment();
  const defaulTimeValue = typeof defaultValue === 'undefined' ? now : moment(defaultValue);
  const timeValue = typeof value === 'undefined' ? defaulTimeValue : moment(value);

  useEffect(() => {
    if (typeof defaultValue === 'undefined') {
      onChangeTime(now.format('YYYY-MM-DD HH:mm:ss'));
    }
  }, []);

  const changeTime = (time: any) => {
    if (onChangeTime) {
      onChangeTime(time ? time.format('YYYY-MM-DD HH:mm:ss') : null);
    }
  };

  return (
    <InputGroup className="input-group-alternative" style={{ border: '1px solid #cad1d7' }}>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="far fa-clock"></i>
        </InputGroupText>
      </InputGroupAddon>
      <RcTimePicker
        className="form-control"
        showSecond={isShowSecond}
        onChange={changeTime}
        format={currentFormat}
        defaultValue={defaulTimeValue}
        value={timeValue}
        allowEmpty
        use12Hours
      />
    </InputGroup>
  );
};

export default TimePicker;
