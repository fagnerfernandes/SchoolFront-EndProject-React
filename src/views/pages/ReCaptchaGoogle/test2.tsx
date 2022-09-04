import { Row, Col } from 'reactstrap';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const ReCaptchaGoogle = () => {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={`${process.env.REACT_APP_GOOGLE_RECAPTCHA_PUBLIC_KEY || ''}`}
        // language="[optional_language]"
        // useRecaptchaNet="[optional_boolean_value]"
        // useEnterprise="[optional_boolean_value]"
        scriptProps={{
          async: false, // optional, default to false,
          defer: false, // optional, default to false
          appendTo: 'head', // optional, default to "head", can be "head" or "body",
          nonce: undefined, // optional, default undefined
        }}
        container={{
          // optional to render inside custom element
          element: 'GoogleReCaptcha', //required_id_or_htmlelement
          parameters: {
            // badge: '[inline|bottomright|bottomleft]', // optional, default undefined
            theme: 'dark', // optional, default undefined
          },
        }}
      >
        <Row>
          <Col id="GoogleReCaptcha" className="GoogleReCaptcha-col"></Col>
          {/* <Col>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-firstName">
                First Name
              </label>
              <Input className="form-control-alternative" id="input-firstName" placeholder="First Name" type="text" />
            </FormGroup>
          </Col> */}
        </Row>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default ReCaptchaGoogle;
