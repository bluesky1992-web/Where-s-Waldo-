const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["B", "A", "A"]
];

const whereIsWaldo = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i])
    for (let j = 0; j < matrix[i][j].length; j++) {
      console.log(matrix[i][j])

    }

  }
  return 
}

console.log(whereIsWaldo(example))
// should output [3,1]

