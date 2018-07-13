# Date Library
Providing few features of date functions. Like, add/substract days from date, date comparision and etc

**The Library can do the following operations**
- Add a number of days to a date
- Subtract a number of days to a date
- A date is greater than current date
- Number of days between two dates

**Add a number of days to a date** 

```
dates_operation.add("2018-02-12",10);
```
@param from_date : date (yyyy-mm-dd or mm-dd-yyyy)
@param number_of_days : int
@return date (if valid param passed otherwise return string "Invalid Date")


**Subtract a number of days to a date* 

```
dates_operation.subtract("2018-02-12",10);
```
@param from_date : date (yyyy-mm-dd or mm-dd-yyyy)
@param number_of_days : int
@return date (if valid param passed otherwise return string "Invalid Date")


**A date is greater than current date**


```
dates_operation.isGraterThanToday("2018-02-12");
```
@param from_date : date (yyyy-mm-dd or mm-dd-yyyy)
@return: boolean (if valid param passed otherwise return string "Invalid Date")


**Number of days between two dates**

```
dates_operation.numberOfDaysBetween("2018-02-12","2018-02-02");
```

@param date1 : date (yyyy-mm-dd or mm-dd-yyyy)
@param date2 : date (yyyy-mm-dd or mm-dd-yyyy)
@return: int (if valid param passed otherwise return string "Invalid Date")


