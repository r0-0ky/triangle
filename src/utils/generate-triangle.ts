export const generatePascalTriangle = (numOfRows: number) => {
  const result = [];

  for (let i = 0; i < numOfRows; i++) {
    if (i === 0) {
      result.push([1]);

      continue;
    }

    const extendedPrevRow:number[] = [0, ...result[i - 1], 0];

    const currRow = extendedPrevRow.reduce((acc: number[], currItem, ind, arr) => {
      const nextItem = arr[ind + 1];

      if (nextItem !== undefined) {
        acc.push(currItem + nextItem);
      }

      return acc;
    }, []);


    result.push(currRow);

  }

  return result;
}