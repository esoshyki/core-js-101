const logger = (func, logFunc) => (...args) => {
  console.log(args)
  const s = [...args].reduce((a,b) => {
    let str ;
    if (typeof b === 'object') {
      let arr = '['
      b.forEach(element => {
          console.log(element);
          arr += `"${element}",`;
      });
      str += arr.slice(0,-1) + '],'
    }
    else str = a + `${b},`;
    return str.slice(0, -1)
  },'');
  console.log(s);
  logFunc(`${func.name}(${s}) starts`);
  const res = func(args);
  logFunc(`${func.name}(${s}) ends`);
  return res;
};

const cosLogger = logger(Math.cos, console.log);

const actual = cosLogger(['expected', 'test', 1], 0);
