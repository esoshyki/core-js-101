const timeSpanToString = (startDate, endDate) => {
  const start = startDate.valueOf();
  const end = endDate.valueOf();
  const time = end - start;
  console.log(time)
  const h = Math.floor(time / (60 * 60 * 1000));
  console.log(`h = ${h}`)
  const m = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  console.log(`m = ${m}`)
  const s = Math.floor((time % (60 * 1000)) / 1000);
  console.log(`s = ${s}`)
  const ms = time % 1000;
  console.log(`ms = ${ms}`)
  const hstr = h < 10 ? `0${h}` : h;
  const mstr = m < 10 ? `0${m}` : m;
  const sstr = s < 10 ? `0${s}` : m;
  let msstr;
  if (ms > 100) msstr = ms;
  else if (ms > 10) msstr = `0${ms}`;
  else msstr = `00${ms}`;
  return `${hstr}:${mstr}:${sstr}.${msstr}`;
};

//"00:00:20.000"
const startd = new Date(2000,1,1,10,0,0)
const endd = new Date(2000,1,1,10,0,20)

console.log(timeSpanToString(startd, endd))