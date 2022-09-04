import { Button, Row } from 'reactstrap';
import { useCallback, useEffect } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

type ReCaptchaGoogleProps = {
  setTokenReCaptchaGoogle: (value: string) => void;
  generateNewToken: boolean;
};

const ReCaptchaGoogle = ({ setTokenReCaptchaGoogle, generateNewToken }: ReCaptchaGoogleProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const tokenReCaptchaGoogle = await executeRecaptcha('ReCaptchaGoogle');
    console.log('token: ', tokenReCaptchaGoogle);
    setTokenReCaptchaGoogle(tokenReCaptchaGoogle);
  }, [executeRecaptcha]);

  //useEffect to trigger the verification as soon as the component being loaded
  // useEffect(() => {
  //   handleReCaptchaVerify();
  // }, [handleReCaptchaVerify]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [generateNewToken]);

  return (
    <Row className="waiting-list-btn-submit">
      {/* <Button type="submit" onClick={handleReCaptchaVerify} color="btn-primary" size="md" 
      className="btn btn-primary"> */}
      <Button type="submit" color="btn-primary" size="md" className="btn btn-primary">
        Submit
      </Button>
    </Row>
  );
};

export default ReCaptchaGoogle;
