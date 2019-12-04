const processAllPromises = (array) => new Promise((res, rej) => {
  const ans = [];
  array.map((el) => el.then((r) => ans.push(r)).catch((err) => rej(err)));
  res(ans);
});

const getFastestPromise = (arr) => processAllPromises(arr).then((data) => data[0]);

const promises1 = [
  new Promise((resolve) => setTimeout(() => resolve('I\'m second!'), 500)),
  Promise.resolve('I\'m first!'),
];
const promises2 = [
  new Promise((_, reject) => setTimeout(() => '', reject(Error('I\'m not second!')), 200)),
  new Promise((_, reject) => setTimeout(() => '', reject(Error('I\'m not first!')), 500)),
];

const result1 = getFastestPromise(promises1);
const result2 = getFastestPromise(promises2);

const messages = [];
const defaultRejectionMessage = 'Incorrect data!';


console.log(result1 instanceof Promise && result2 instanceof Promise ?  'getFastestPromise should return Promise! ok' :  'getFastestPromise should return Promise! BAD!!')
result1.then((value) => {
   console.log(`value === I\'m first!: ${value === "I\'m first!"}`)
}).catch((error) => {
  const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
  console.log(`error instanceof Error ? error : defaultRejectionMessage: ${errorMessage}`)
}).then(() => result2).catch((data) => console.log(data))


