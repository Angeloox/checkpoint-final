// function shuffleArray(arr) {
//   const newArr = [...arr];
//   // Start from the last element and swap
//   // one by one. We don't need to run for
//   // the first element that's why i > 0
//   for (let i = arr.length - 1; i > 0; i -= 1) {
//     // pick a random index from 0 to i inclusive
//     const j = Math.floor(Math.random() * (i + 1)); // at random index
//     // Swap arr[i] with the element
//     [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
//   }
//   return newArr;
// }
function shuffleArray(arr) {
  return arr.sort(() => 0.5 - Math.random());
}

export default { shuffleArray };
