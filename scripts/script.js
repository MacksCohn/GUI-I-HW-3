// Max Cohn
// function to generate the table using simple logic
function Generate(id) {
    const MAX_ELEMENTS = 300 * 300;
    const table = document.getElementById(id);
    table.innerHTML = "";
    // get values from the inputs
    const minCol = parseInt(document.getElementById('minCol').value);
    const maxCol = parseInt(document.getElementById('maxCol').value);
    const minRow = parseInt(document.getElementById('minRow').value);
    const maxRow = parseInt(document.getElementById('maxRow').value);
    // validate input
    if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
        table.insertRow().insertCell().textContent = 'Invalid input';
        return;
    }
    // avoid freezing by limiting max number of elements
    if (((maxRow - minRow) * (maxCol - minCol)) > MAX_ELEMENTS) {
        table.insertRow().insertCell().textContent = 'Range Too Large';
        return;
    }
    const firstRow = table.insertRow();
    // top corner element
    firstRow.insertCell();
    // add top row header
    for (let i = minCol; i <= maxCol; i++) {
        const heading = document.createElement('th');
        heading.textContent = i;
        heading.className = 'header-top';
        firstRow.appendChild(heading);
    }
    for (let i = minRow; i <= maxRow; i++) {
        const row = table.insertRow();
        // add left side header
        const heading = document.createElement('th');
        heading.textContent = i;
        heading.className = 'header-side';
        row.appendChild(heading);
        // add cells
        for (let j = minCol; j <= maxCol; j++) {
            const cell = row.insertCell();
            cell.textContent = i * j;
        }
    }
}
