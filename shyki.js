const getAngleBetweenVectors = (x1, y1, x2, y2) => {

    const dx = x2 - x1;

    const dy = y2 - y1;

    if (Math.abs(dx) === 2 || Math.abs(dy) === 2) return Math.PI;
    if (Math.abs(dx) === 1 && Math.abs(dy) === 1) return 2 * Math.PI / 3;
    if (Math.abs(dx) === 1 || Math.abs(dy) === 1) return Math.PI / 2;
    if (dx === 0 && dy === 0) return 0
}

console.log(getAngleBetweenVectors(1, 0, 0, 1))
