export const formatDate = (dateString) => {
  function appendLeadingZeroes(n) {
    if (n <= 9) {
      return "0" + n;
    }
    return n;
  }
  let date = new Date(dateString);

  return (
    date.getFullYear() +
    "-" +
    appendLeadingZeroes(date.getMonth() + 1) +
    "-" +
    appendLeadingZeroes(date.getDate())
  );
};

export const displayDate = (dateString) => {
  let date = new Date(dateString);

  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
};

export const prepareDate = (dateString) => {
  let [year, month, day] = dateString.split("-");

  // Month is zero indexed.
  month = month - 1;

  return new Date(year, month, day);
};
