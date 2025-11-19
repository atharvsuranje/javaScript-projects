const table = document.getElementById("insert")

window.addEventListener("keydown", function (e) {
    table.innerHTML =
    `
    <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>Key Code</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `
})