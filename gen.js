/* Table for 2021 */
const day_of_month = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/* SUN MON TUE WED THU FRI SAT */
const starting_weekday = [-1, 5, 1, 1, 4, 6, 2, 4, 0, 3, 5, 1, 3];
const holiday = [[1, 1], [2, 10], [2, 11], [2, 12], [2, 15], 
                 [2, 16], [3, 1], [4, 2], [4, 5], [6, 14],
                 [9, 20], [9, 21], [10, 11], [12, 31]];
const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
const month_name = [-1, "JAN", "FEB", "MAR", "APR", "MAY", "JUN", 
                        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const year = 2021;  /* Unused */

function header_gen(top_gap = 0, bottom_gap = 0){
    document.writeln("<div class=\"spacing\" style=\"height:" + top_gap + "\"></div>");
    document.writeln("<div class=\"header\">");
    document.writeln("<div class=\"text\">2021 CALENDER</div>");
    document.writeln("<div class=\"underline\"></div>");
    document.writeln("</div>");
    document.writeln("<div class=\"spacing\" style=\"height: " + bottom_gap + "\"></div>");
    return;
}

function month_block_gen(month){
    let i = 0, j = 0;

    /* Month container*/
    document.writeln("<div class=\"month\" id=\"" + month + "\">");
    document.writeln("<div class=\"month-title text-center\">" + month_name[month] + "</div>");

    /* Weekday headers */
    for(i = 0; i < 7; ++i){
        document.writeln("<span class=\"weekday-header text-center\">" + weekdays[i] + "</span>");
    }

    /* blanks */
    for(i = 0; i < starting_weekday[month]; ++i){
        document.writeln("<span class=\"day emptyday\"></span>");
    }

    /* Fill dates */
    for(i = 1; i <= day_of_month[month]; ++i){
        var is_holiday = false, weekday = (i + starting_weekday[month]) % 7;
        for(j = 0; j < holiday.length; ++j){
            if(month == holiday[j][0] && i == holiday[j][1]){
                is_holiday = true;
                break;
            }
        }

        if(weekday == 0 || weekday == 1){
            is_holiday = true;
        } 

        if(is_holiday){
            document.writeln("<span class=\"day holiday\">" + i + "</span>");
        }
        else{
            document.writeln("<span class=\"day workday\">" + i + "</span>");
        }
    }

    /* Fill blanks until last slot */
    j = i + starting_weekday[month];
    while(j % 7 != 1){
        document.writeln("<span class=\"day emptyday\"></span>");
        ++j;
    }

    document.writeln("</div>");

    return;
}

let data_days = 20;
function day_summary_gen(month){
    document.writeln("<div class=\"scrollbar\">");
    
    for(let i = 1; i <= data_days; ++i){
        document.writeln("<div class=\"summary-box\">");
        document.writeln("<div class=\"date\" id=\"" + i + "\"><p>" + i + "</p></div>");
        document.writeln("<p>Hello world</p>");
        document.writeln("</div>");
        document.writeln("<div class=\"seperation\"></div>");
    }

    document.writeln("</div>");
    return;
}
