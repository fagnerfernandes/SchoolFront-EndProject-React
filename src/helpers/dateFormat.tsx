import { formatInTimeZone } from 'date-fns-tz';

const dateFormat = (date: string | Date) => {
  let d = date;
  if (!(d instanceof Date)) {
    d = new Date(date);
  }

  return formatInTimeZone(d, 'America/New_York', 'MM/dd/yyyy hh:mm aaa zzz');
};

export const toLocaleFormat = (date: string | Date) => {
  let d = date;
  if (!(d instanceof Date)) {
    d = new Date(date);
  }
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const year = d.getUTCFullYear();
  return `${month}-${day}-${year}`;
};

export const toDateTimeLocaleFormat = (date: string | Date) => {
  let d = date;
  if (!(d instanceof Date)) {
    d = new Date(date);
  }
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const year = d.getUTCFullYear();
  const hour = d.getUTCHours();
  const minutes = d.getUTCMinutes();
  const seconds = d.getUTCSeconds();
  return `${month}-${day}-${year} ${hour}:${minutes}:${seconds}`;
};

export const toDateFormat = (date: string | Date) => {
  let d = date;
  if (!(d instanceof Date)) {
    d = new Date(date);
  }
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const year = d.getUTCFullYear();
  return `${year}-${month}-${day}`;
};

export const toSystemFormat = (date: string) => {
  const dateSplited = date.split('/');
  if (!dateSplited?.[0] || !dateSplited?.[1] || !dateSplited?.[2]) {
    return '';
  }
  return `${dateSplited?.[2]}-${dateSplited?.[0]}-${dateSplited?.[1]}`;
};

export const toLocaleFormatSlash = (date: string | Date) => {
  let d = date;
  if (!(d instanceof Date)) {
    d = new Date(date);
  }
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const year = d.getUTCFullYear();
  return `${month}/${day}/${year}`;
};

export default dateFormat;
