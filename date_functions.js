(function (window) {
    'use strict'
    var self = this;
    var dates_operation = {};
    window.dates_operation = dates_operation;

    /**
     * @description This function get the date and add number of days and return the result date
     * @param from_date : date (yyyy-mm-dd or mm-dd-yyyy)
     * @param number_of_days : int
     * @return date
     * */
    dates_operation.add = function (from_date, number_of_days) {
        if (!is_valid_date(from_date))
            return "Invalid Date";

        from_date = formatDate(from_date);
        number_of_days = Math.abs(number_of_days);
        var date_obj = new Date(from_date);
        date_obj.setDate(date_obj.getDate() + number_of_days);
        return formatDate(date_obj);
    };

    /**
     * @description This function get the date and subtract number of days and return the result date
     * @param from_date : date (yyyy-mm-dd or mm-dd-yyyy)
     * @param number_of_days : int
     * @return date
     * */
    dates_operation.subtract = function (from_date, number_of_days) {
        if (!is_valid_date(from_date))
            return "Invalid Date";

        from_date = formatDate(from_date);
        var date_obj = new Date(from_date);
        date_obj.setDate(date_obj.getDate() - number_of_days);
        return formatDate(date_obj);
    };

    /**
     * @description This function get the date and compare with current date and find whether greater
     * than today or not
     * @param from_date : date (yyyy-mm-dd or mm-dd-yyyy)
     * @return: boolean
     * */
    dates_operation.isGraterThanToday = function (_date) {
        if (!is_valid_date(_date))
            return "Invalid Date";
        var to_day = formatDate(new Date());
        var fromDateTime = new Date(to_day).getTime();
        var toDateTime = new Date(formatDate(_date)).getTime();
        return fromDateTime < toDateTime ? true : false;
    };

    /**
     * @description This function get two dates and find the number of days between those dates
     * @param date1 : date (yyyy-mm-dd or mm-dd-yyyy)
     * @param date2 : date (yyyy-mm-dd or mm-dd-yyyy)
     * @return: boolean
     * */
    dates_operation.numberOfDaysBetween = function (date1, date2) {
        if (!(is_valid_date(date1) && is_valid_date(date2)))
            return "Invalid Date";
        date2 = new Date(date2);
        date1 = new Date(date1);
        if (date2.getTime() < date1.getTime())
            return "The TO_DATE should be greater than from date";
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    };

    /**
     * @description This function get validates the date
     * @param _date : date (yyyy-mm-dd or mm-dd-yyyy)
     * @return: boolean
     * */
    function is_valid_date(_date) {
        var this_date = new Date(_date);
        return this_date == "Invalid Date" ? false : true;
    }

    /**
     * @description This function formate the date as yyyy-mm-dd
     * @param date : date (yyyy-mm-dd or mm-dd-yyyy)
     * @return: date
     * */
    function formatDate(date) {
        var d = new Date(date);
        if (d == "Invalid Date")
            return "Invalid Date";

        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return year + "-" + month + "-" + day;
    }


})(window)