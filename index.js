let home = 0;
let guest = 0;

function addPoints(team, points) {
     if (team === "home") {
            home += points;
            document.getElementById("homeScore").textContent = home;
        } else {
            guest += points;
            document.getElementById("guestScore").textContent = guest;
        }
    }