const swapHeadAndTail = arr => {
    const len = arr.length;
    if (len === 1) return arr
    const haflen = Math.floor(len / 2);
    const head = arr.slice(0, haflen);
    const tail = arr.slice(-haflen);
    const middle = (len%2) ? [arr[haflen]] : [];
    return tail.concat(middle).concat(head)
}

console.log(swapHeadAndTail([ 1 ]))