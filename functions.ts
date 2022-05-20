function addUp(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  // return type of void. Meaning the function does not have a return type because it doesn't return anything
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(addUp(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = addUp;
// combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
