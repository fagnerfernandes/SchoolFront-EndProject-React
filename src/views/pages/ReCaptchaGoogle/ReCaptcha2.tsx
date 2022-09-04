import { useEffect, useCallback } from 'react';
import { Button } from 'reactstrap';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ReCaptcha2 = () => {
  const YourReCaptchaComponent = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    // Create an event handler so you can call the verification on button click event or form submit
    const handleReCaptchaVerify = useCallback(async () => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }

      const token = await executeRecaptcha('ReCaptcha2ddd');

      console.log(token);
    }, [executeRecaptcha]);

    // You can use useEffect to trigger the verification as soon as the component being loaded
    useEffect(() => {
      handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    return <Button onClick={handleReCaptchaVerify}>Verify recaptcha</Button>;
  };

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={`${process.env.REACT_APP_GOOGLE_RECAPTCHA_PUBLIC_KEY || ''}`}>
        {/* <GoogleReCaptchaProvider reCaptchaKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"> */}
        <YourReCaptchaComponent />
      </GoogleReCaptchaProvider>
    </>
  );
};

export default ReCaptcha2;
