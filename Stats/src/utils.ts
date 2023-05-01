export const dateStringToDate = (DateString: string): Date => {
  const dateParts = DateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};