import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const formatTimeAgo = (date?:string) => date? dayjs(date).fromNow() : '';