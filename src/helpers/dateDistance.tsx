import { format, formatDistanceToNow } from 'date-fns';

const dateDistance = (date: string | Date) => {
  let d = date;
  if (!(d instanceof Date)) {
    d = new Date(date);
  }

  return formatDistanceToNow(d, { addSuffix: true }) + ' (' + format(d, `EEEE, MM/dd/yyyy' 'p O`) + ')';
};

export default dateDistance;
