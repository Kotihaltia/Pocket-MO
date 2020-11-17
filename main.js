
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {

    let firstRowLength = 0;
    let secondRowLength = 0;

    for (let i = 0; i < firstRow.length; i++) {

        if (firstRow.charAt(i) === 'а') {
            firstRowLength++;
        }
    }

    for (let i = 0; i < secondRow.length; i++) {

        if (secondRow.charAt(i) === 'а') {
            secondRowLength++;
        }
    }

    if (firstRowLength >= secondRowLength) {
        return firstRow;
    }
    else {
        return secondRow;
    }

}

console.log(getRow(firstRow, secondRow));






