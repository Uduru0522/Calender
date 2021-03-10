var i = 0, j = 0;  /* temp variable */


/* Weekday headers */
for(i = 0; i < 7; ++i){
    document.writeln("<span class=\"day weekday-header\">" + weekdays[i] + "</span>");
}

/* blanks */
for(i = 0; i < starting_weekday[month]; ++i){
    document.writeln("<span class=\"day emptyday\"></span>");
}

/* Fill dates */
for(i = 1; i <= day_of_month[month]; ++i){
    var is_holiday = false, weekday = (i + starting_weekday[month]) % 7;
    for(j = 0; j < holiday.length; ++j){
        if(month + 1 == holiday[j][0] && i == holiday[j][1]){
            is_holiday = true;
            break;
        }
    }

    console.log(weekday);

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

++month;  /* Increment for next generation */