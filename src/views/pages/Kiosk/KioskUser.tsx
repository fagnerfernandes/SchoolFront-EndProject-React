import { Row, Col, Card } from 'reactstrap';
import { useContext, useEffect, useState } from 'react';
import KioskService from '../../../services/Kiosk';
import { Context as AuthContext } from '../../../contexts/AuthContext';
import { toast } from 'react-toastify';

type props = {
  dataResult: any;
  setNewShowUserRow: (type: boolean) => void;
};

const KioskUser = ({ dataResult, setNewShowUserRow }: props) => {
  const { token }: any = useContext(AuthContext);

  // const tokenKiosk = sessionStorage.getItem('company_token') || '';
  const tokenKiosk = localStorage.getItem('company_token') || '';

  const [userIsCheckedIn, setUserIsCheckedIn] = useState(false);

  const customStyles = {
    statusIcon: { verticalAlign: 'baseline', fontSize: '25px' },
  };

  const [dataKids, setDataKids] = useState([] as any);

  const returnKeypad = async () => {
    setNewShowUserRow(false);
  };

  const checkInKids = async (kidsId: string, userId: string) => {
    try {
      await KioskService(token).checkInKids(kidsId, userId, tokenKiosk);
      toast.success(`Check IN successfully!`);
      returnKids();
    } catch (e) {
      toast.error('Unable to Check In');
    }
  };

  const checkOutKids = async (kidsId: string, userId: string) => {
    try {
      await KioskService(token).checkOutKids(kidsId, userId, tokenKiosk);
      toast.success(`Check Out successfully!`);
      returnKids();
    } catch (e) {
      toast.error('Unable to Check Out');
    }
  };

  const checkInUser = async (userId: string) => {
    try {
      const result = await KioskService(token).checkInUsers(userId, tokenKiosk);

      if (result?.data?.isSuccess === true) {
        setUserIsCheckedIn(true);
        toast.success(`Check IN successfully!`);
      } else {
        setUserIsCheckedIn(false);
        toast.error('Unable to Check In');
      }
    } catch (e) {
      setUserIsCheckedIn(false);
      toast.error('Unable to Check In');
    }
  };

  const checkOutUser = async (userId: string) => {
    try {
      const result = await KioskService(token).checkOutUsers(userId, tokenKiosk);
      if (result?.data?.isSuccess === true) {
        setUserIsCheckedIn(false);
        toast.success(`Check OUT successfully!`);
      } else {
        setUserIsCheckedIn(false);
        toast.error('Unable to Check Out');
      }
    } catch (e) {
      setUserIsCheckedIn(false);
      toast.error('Unable to Check Out');
    }
  };

  const dataUser = {
    userId: dataResult?.data?.id,
    name: dataResult?.data?.firstName ? `${dataResult.data?.lastName}, ${dataResult.data?.firstName}` : '',
    img: dataResult?.data?.picture
      ? `${dataResult.data?.picture}`
      : require('../../../assets/img/user-default.png').default,
    isStaff: dataResult?.data?.isStaff,
    isCheckedIn: dataResult?.data?.isCheckedIn,
  };

  const userId = dataUser?.userId;

  const returnKids = async () => {
    try {
      const result = await KioskService(token).show(userId);
      setDataKids(result?.data);
    } catch (e) {
      toast.error('Error');
    }
  };

  useEffect(() => {
    returnKids();
  }, [userId]);

  useEffect(() => {
    setUserIsCheckedIn(dataUser?.isCheckedIn);
  }, []);

  return (
    <>
      <Row className="kiosk-user-main">
        <Col>
          <Row className="kiosk-button-return">
            <Col>
              <button type="button" className="btn btn-primary btn-md" onClick={() => returnKeypad()}>
                Return
              </button>
            </Col>
          </Row>
          {dataUser.isStaff == true && (
            <Row>
              <Col>
                <Card className="kiosk-card-user">
                  <Row className="">
                    <Col>
                      <Row>
                        <img
                          alt={`${dataUser.name}`}
                          title={`${dataUser.name}`}
                          className="rounded-circle"
                          src={dataUser?.img}
                          style={{ width: 80, height: 80, margin: '0 auto', textAlign: 'center' }}
                        />
                      </Row>
                      <Row>
                        <span className="h2" style={{ textAlign: 'center', margin: '0 auto' }}>
                          {dataUser.name}
                        </span>
                      </Row>
                    </Col>

                    <Col className="kiosk-icon-checkin-checkout">
                      <span className="h2 " style={{ textAlign: 'center', margin: '0 auto' }}>
                        <i
                          className={`far ${
                            userIsCheckedIn
                              ? 'fa-arrow-alt-circle-right text-success'
                              : 'fa-arrow-alt-circle-left text-danger'
                          } mr-1 fa-xl`}
                          style={customStyles.statusIcon}
                        />
                        {userIsCheckedIn ? 'Checked In' : 'Checked Out'}
                      </span>
                    </Col>
                    <Col className="kiosk-button-make-checkin-checkout">
                      {userIsCheckedIn == true && (
                        <button
                          type="button"
                          className="btn btn-danger btn-md"
                          onClick={() => checkOutUser(dataUser.userId)}
                        >
                          Check OUT
                        </button>
                      )}
                      {userIsCheckedIn == false && (
                        <button
                          type="button"
                          className="btn btn-success btn-md"
                          onClick={() => checkInUser(dataUser.userId)}
                        >
                          Check IN
                        </button>
                      )}
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          )}
          {dataKids.map((r: any, index: number) => {
            return (
              <Row key={`activity-${index}`}>
                <Col>
                  <Card className="kiosk-card-kids">
                    <Row className="">
                      <Col>
                        <Row>
                          <img
                            alt={`${r?.kids?.lastName}`}
                            title={`${r?.kids?.lastName}`}
                            className="rounded-circle"
                            src={r?.kids?.picture}
                            style={{ width: 80, height: 80, margin: '0 auto', textAlign: 'center' }}
                          />
                        </Row>

                        <Row>
                          <span className="h2 " style={{ textAlign: 'center', margin: '0 auto' }}>
                            {r?.kids?.lastName}, {r?.kids?.firstName}
                          </span>
                        </Row>
                      </Col>

                      <Col className="kiosk-icon-checkin-checkout">
                        <span className="h2 " style={{ textAlign: 'center', margin: '0 auto' }}>
                          <i
                            className={`far ${
                              r?.isCheckedIn
                                ? 'fa-arrow-alt-circle-right text-success'
                                : 'fa-arrow-alt-circle-left text-danger'
                            } mr-1 fa-xl`}
                            style={customStyles.statusIcon}
                          />
                          {r?.isCheckedIn ? 'Checked In' : 'Checked Out'}
                        </span>
                      </Col>
                      <Col className="kiosk-button-make-checkin-checkout">
                        {r?.isCheckedIn == true && (
                          <button
                            type="button"
                            className="btn btn-danger btn-md"
                            onClick={() => checkOutKids(r?.kids?.kidsId, dataUser.userId)}
                          >
                            Check OUT
                          </button>
                        )}
                        {r?.isCheckedIn == false && (
                          <button
                            type="button"
                            className="btn btn-success btn-md"
                            onClick={() => checkInKids(r?.kids?.kidsId, dataUser.userId)}
                          >
                            Check IN
                          </button>
                        )}
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </>
  );
};
export default KioskUser;
