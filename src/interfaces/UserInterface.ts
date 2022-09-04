export const validStatus = {
  NEW: { value: 'NEW', color: 'info' },
  ACTIVE: { value: 'ACTIVE', color: 'success' },
  BLOCKED: { value: 'BLOCKED', color: 'danger' },
};

export enum statusEnum {
  NEW = 'NEW',
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
}

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  status: string;
  statusDescription?: string;
  roles: any[];
  language: string;
  groupId: string;
  birthday: string;
  createdAt: Date;
  updatedAt: Date;
}

export default UserInterface;
