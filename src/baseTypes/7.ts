// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
// і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum Weekdays {
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday",
}
function isWeekend(weekday: Weekdays): boolean {
  if (weekday === Weekdays.Sat || weekday === Weekdays.Sun) {
    return true;
  } else {
    return false;
  }
}
