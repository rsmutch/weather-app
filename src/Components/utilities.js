export const convertUnixTime = (t) => {
  const dateObj = new Date(t * 1000);
  const utcString = dateObj.toLocaleString();
  return utcString.slice(-8, -3);
};
