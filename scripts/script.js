// Max Cohn
function Generate(id) {
    const MAX_ELEMENTS = 300 * 300;
    const table = document.getElementById(id);
    table.innerHTML = "";
    const minCol = parseInt(document.getElementById('minCol').value);
    const maxCol = parseInt(document.getElementById('maxCol').value);
    const minRow = parseInt(document.getElementById('minRow').value);
    const maxRow = parseInt(document.getElementById('maxRow').value);
    if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
        table.insertRow().insertCell().textContent = 'Invalid input';
        return;
    }
    if (((maxRow - minRow) * (maxCol - minCol)) > MAX_ELEMENTS) {
        table.insertRow().insertCell().textContent = 'Range Too Large';
        return;
    }
    const firstRow = table.insertRow();
    firstRow.insertCell();
    for (let i = minCol; i <= maxCol; i++) {
        const heading = document.createElement('th');
        heading.textContent = i;
        heading.className = 'header-top';
        firstRow.appendChild(heading);
    }
    for (let i = minRow; i <= maxRow; i++) {
        const row = table.insertRow();
        const heading = document.createElement('th');
        heading.textContent = i;
        heading.className = 'header-side';
        row.appendChild(heading);
        for (let j = minCol; j <= maxCol; j++) {
            const cell = row.insertCell();
            cell.textContent = i * j;
        }
    }
    // let row  = table.insertRow();
    // let cell = row.insertCell()
    // cell.textContent = 'test';
}
