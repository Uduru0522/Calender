/* Table for 2021 */
const day_of_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/* SUN MON TUE WED THU FRI SAT */
const starting_weekday = [5, 1, 1, 4, 6, 2, 4, 0, 3, 5, 1, 3];
const holiday = [[1, 1], [2, 10], [2, 11], [2, 12], [2, 15], 
                 [2, 16], [3, 1], [4, 2], [4, 5], [6, 14],
                 [9, 20], [9, 21], [10, 11], [12, 31]];
const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
const year = 2021;  /* Unused */

/* Generate according to month, starts from January and get calls evey month. */
var month = 0;