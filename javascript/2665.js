// var createCounter = function (init) {
//   const tmp = init;
//   return {
//     increment: () => ++init,
//     decrement: () => --init,
//     reset: () => {
//       init = tmp;
//       return init;
//     },
//   };
// };

class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    return ++this.presentCount;
  }

  decrement() {
    return --this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}

const createCounter = function (init) {
  return new Counter(init);
};
