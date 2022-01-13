// On the backend, I can simply export the helper function to take in a new Date through the Models, and then convert such date to the correct format. 
    // By using Date.now(),
        // format of YYYYMMDD === NOW in Number form 
            //  When the database recieves a New date, it should check to see find the closet value to the current date. 
        



// In the models 

// const dateFormat = require('../utils/dateFormat');

// const thoughtSchema = new Schema({
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },



const addDateSuffix = (dateFromApi) => {

    
  const date=new Date();
  /* date.setDate(date.getDate() - 2); */
  let dateYesterday = date.toISOString().split('T')[0].toString();
  console.log(dateYesterday);
  // convert without hyphens and compare values 
  let dateCompare = dateYesterday.replaceAll('-', '').Number().Math();
  dateFromApi = dateFromApi.replaceAll('-', '').Number();
  console.log(dateCompare)
  // get last char of date string
  /*   const dayChars = dateYesterday.charAt(dateYesterday.length - 2) + dateYesterday.charAt(dateYesterday.length - 1);
  console.log(lastChar) */
  
  if (dateCompare != dateFromApi) {
    let x = Math.abs(dateCompare - 30000000);
    let y = Math.abs(dateFromApi);
    if 
  } else {
    return dateFromApi.toString();
  }
    if (lastChar === '1' && dateStr !== '11') {
      dateStr = `${dateStr}st`;
    } else if (lastChar === '2' && dateStr !== '12') {
      dateStr = `${dateStr}nd`;
    } else if (lastChar === '3' && dateStr !== '13') {
      dateStr = `${dateStr}rd`;
    } else {
      dateStr = `${dateStr}th`;
    }
  
    return dateStr;
  };
    
    // function to format a timestamp, accepts the timestamp and an `options` object as parameters
    module.exports = (
      timestamp,
      { monthLength = 'short', dateSuffix = true } = {}
    ) => {
      // create month object
      const months = {
        0: monthLength === 'short' ? 'Jan' : 'January',
        1: monthLength === 'short' ? 'Feb' : 'February',
        2: monthLength === 'short' ? 'Mar' : 'March',
        3: monthLength === 'short' ? 'Apr' : 'April',
        4: monthLength === 'short' ? 'May' : 'May',
        5: monthLength === 'short' ? 'Jun' : 'June',
        6: monthLength === 'short' ? 'Jul' : 'July',
        7: monthLength === 'short' ? 'Aug' : 'August',
        8: monthLength === 'short' ? 'Sep' : 'September',
        9: monthLength === 'short' ? 'Oct' : 'October',
        10: monthLength === 'short' ? 'Nov' : 'November',
        11: monthLength === 'short' ? 'Dec' : 'December',
      };
    
      const dateObj = new Date(timestamp);
      const formattedMonth = months[dateObj.getMonth()];
    
      const dayOfMonth = dateSuffix
        ? addDateSuffix(dateObj.getDate())
        : dateObj.getDate();
    
      const year = dateObj.getFullYear();
      let hour =
        dateObj.getHours() > 12
          ? Math.floor(dateObj.getHours() - 12)
          : dateObj.getHours();
    
      // if hour is 0 (12:00am), change it to 12
      if (hour === 0) {
        hour = 12;
      }
    
      const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();
    
      // set `am` or `pm`
      const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';
    
      const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
    
      return formattedTimeStamp;
    };
    