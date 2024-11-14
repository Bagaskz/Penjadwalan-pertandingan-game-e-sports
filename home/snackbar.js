function showSnackbar(message) {
    var snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.className = "show";
    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}
showSnackbar("Pertandingan akan segera dimulai!");


document.getElementById("update").addEventListener("click", function () {
    
    var matchSchedule = document.getElementById("match-schedule");

    
    matchSchedule.innerHTML = `
        <tr>
            <td>
                <ul>
                    <li>AURA vs BTR</li>
                    <li>AERO vs GENFLIX</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>BTR vs ION</li>
                    <li>NOVA vs ATHENA</li>
                </ul>
            </td>
        </tr>
    `;
}); 


var newFooter = document.createElement("p");  
newFooter.textContent = "Turnamen disponsori oleh XYZ Company.";       
  