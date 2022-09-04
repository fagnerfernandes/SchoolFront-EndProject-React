export const validStatus = {
  ACTIVE: { value: 'ACTIVE', color: 'success' },
  BLOCKED: { value: 'BLOCKED', color: 'danger' },
};

export enum statusEnum {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
}

export interface ScheduleInterface {
  id: string;
  dateTour: string;
  timeTour: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}

export default ScheduleInterface;
