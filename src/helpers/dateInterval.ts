import moment from 'moment';

export const validIntervals = [
  { value: 'THIS_WEEK', label: 'This Week' },
  { value: 'LAST_WEEK', label: 'Last Week' },
  { value: 'LAST_TWO_WEEKS', label: 'Last 2 Weeks' },
  { value: 'LAST_MONTH', label: 'Last Month' },
  { value: 'CUSTOM', label: 'Custom' },
];

const dateInterval = (
  intervalType: string,
): { startDate: string; finalDate: string; startDateTime: string; finalDateTime: string } => {
  switch (intervalType) {
    case 'THIS_WEEK':
      return weekInterval();
    case 'LAST_WEEK':
      return lastWeekInterval();
    case 'LAST_TWO_WEEKS':
      return lastTwoWeeksInterval();
    case 'LAST_MONTH':
      return lastMonthInterval();
    default:
      return weekInterval();
  }
};

const weekInterval = () => {
  const date = moment();
  const startDateTime = date.startOf('isoWeek').format('YYYY-MM-DD');
  const finalDateTime = date.endOf('isoWeek').format('YYYY-MM-DD');

  return {
    startDate: `${startDateTime}`,
    finalDate: `${finalDateTime}`,
    startDateTime: `${startDateTime}T00:00:00.000Z`,
    finalDateTime: `${finalDateTime}T23:59:59.000Z`,
  };
};

const lastWeekInterval = () => {
  let date = moment();
  date = date.startOf('isoWeek').subtract(1, 'days');
  const startDateTime = date.startOf('isoWeek').format('YYYY-MM-DD');
  const finalDateTime = date.endOf('isoWeek').format('YYYY-MM-DD');

  return {
    startDate: `${startDateTime}`,
    finalDate: `${finalDateTime}`,
    startDateTime: `${startDateTime}T00:00:00.000Z`,
    finalDateTime: `${finalDateTime}T23:59:59.000Z`,
  };
};

const lastTwoWeeksInterval = () => {
  let date = moment();
  date = date.startOf('isoWeek').subtract(1, 'days');
  const startDateTime = date.startOf('isoWeek').format('YYYY-MM-DD');
  const finalDateTime = moment().endOf('isoWeek').format('YYYY-MM-DD');

  return {
    startDate: `${startDateTime}`,
    finalDate: `${finalDateTime}`,
    startDateTime: `${startDateTime}T00:00:00.000Z`,
    finalDateTime: `${finalDateTime}T23:59:59.000Z`,
  };
};

const lastMonthInterval = () => {
  let date = moment();
  date = date.startOf('month').subtract(1, 'days');
  const startDateTime = date.startOf('month').format('YYYY-MM-DD');
  const finalDateTime = date.endOf('month').format('YYYY-MM-DD');

  return {
    startDate: `${startDateTime}`,
    finalDate: `${finalDateTime}`,
    startDateTime: `${startDateTime}T00:00:00.000Z`,
    finalDateTime: `${finalDateTime}T23:59:59.000Z`,
  };
};

export default dateInterval;
