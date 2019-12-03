const isBracketsBalanced = (str) => {
  const open = '[{(<'.split(''); const closed = ']})>'.split('');
  return str.split('').reduce((a, b) => {
    const stack = a;
    if (!stack.length) {stack.push(b); return stack;}
    if (open.includes(b)) { stack.push(b); } else {
      const i = closed.indexOf(b);
      if (stack.slice(-1)[0] === open[i]) { stack.pop(); } else {
        stack.push(b);
      }
    }
    return stack;
  }, []).length === 0;
};


console.log(isBracketsBalanced('[[]'))