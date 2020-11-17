
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {

    let firstRowL = 0;
    let secondRowL = 0;

    for (let i = 0; i < firstRow.length; i++) {

        if (firstRow.charAt(i) === 'а') {
            firstRowL++;
        }
    }

    for (let i = 0; i < secondRow.length; i++) {

        if (secondRow.charAt(i) === 'а') {
            secondRowL++;
        }
    }

    if (firstRowL >= secondRowL) {
        return firstRow;
    }
    else {
        return secondRow;
    }

}

console.log(getRow(firstRow, secondRow));






