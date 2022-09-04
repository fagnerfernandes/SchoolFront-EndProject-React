export interface AttendancesBodyInterface {
  roomId: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  payCode: string;
  description: string;
  checkInId?: string;
  checkOutId?: string;
}

export default AttendancesBodyInterface;
