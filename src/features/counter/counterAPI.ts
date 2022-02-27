// A mock function to mimic making an async request for data
export function fetchCount(joke: any) {
  return new Promise<{ data: any }>((resolve) =>
    setTimeout(() => resolve({ data: joke }), 500)
  );
}

// Original code:
// // A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise<{ data: number }>((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }
