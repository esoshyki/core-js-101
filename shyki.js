const timeSpanToString = (startDate, endDate) => {
    console.log(startDate, endDate)
    const start = startDate.valueOf();
    const end = endDate.valueOf();    
    const res = new Date();
    res.setTime(end-start);
    console.log(res)
  }
  
const startd = new Date(2000,1,1,10,0,0)
const endd = new Date(2000,1,1,15,20,10,453) 

console.log(timeSpanToString(startd, endd))