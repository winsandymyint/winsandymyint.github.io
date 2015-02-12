function compareDate1(sdate, edate) {
    var my_date = sdate;
    var my_date2 = edate;
    var mytool_array = my_date.split("-");
    var mytool_array2 = my_date2.split("-");


    var month_name = new Array(12);
    month_name["Jan"] = "01"
    month_name["Feb"] = "02"
    month_name["Mar"] = "03"
    month_name["Apr"] = "04"
    month_name["May"] = "05"
    month_name["Jun"] = "06"
    month_name["Jul"] = "07"
    month_name["Aug"] = "08"
    month_name["Sep"] = "09"
    month_name["Oct"] = "10"
    month_name["Nov"] = "11"
    month_name["Dec"] = "12"


    var newDate = mytool_array[2] + (mytool_array[1]) + day_name(mytool_array[0]);
    var newDate2 = mytool_array2[2] + (mytool_array2[1]) + day_name(mytool_array2[0]);

    //alert(newDate);
    //alert(newDate2);

    if (parseInt(newDate2) < parseInt(newDate)) {
        return 1;
    }
    else if (parseInt(newDate2) > parseInt(newDate)) {
        return 2;
    }
    else {
        return 0;
    }
}

function day_name(dayStr) {
    if (parseInt(dayStr) < 10) {
        return "0" + dayStr;
    }
    else {
        return dayStr;
    }

}
