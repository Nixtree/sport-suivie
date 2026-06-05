function getNext4Weeks() {
  const today = new Date();

  const monday = new Date(today);
  const day = monday.getDay();
  monday.setDate(
    monday.getDate() - (day === 0 ? 6 : day - 1)
  );

  const weeks = [];

  for (let w = 0; w < 4; w++) {
    const week = [];

    for (let d = 0; d < 7; d++) {
      const currentDate = new Date(monday);
      currentDate.setDate(monday.getDate() + w * 7 + d);

      week.push({
        name: "",
        day: currentDate.toLocaleDateString("fr-FR", {
          weekday: "long",
        }),
        num: currentDate.getDate().toString(),
      });
    }

    weeks.push(week);
  }

  return weeks;
}

const semaine1 = document.getElementById("semaine1")
const semaine2 = document.getElementById("semaine2")
const semaine3 = document.getElementById("semaine3")
const semaine4 = document.getElementById("semaine4")

function sincroCalendar(){
    const weeks = getNext4Weeks()
    for(let i = 0; i < 7; i++){
        semaine1.children[i].textContent = weeks[0][i].num
        semaine2.children[i].textContent = weeks[1][i].num
        semaine3.children[i].textContent = weeks[2][i].num
        semaine4.children[i].textContent = weeks[3][i].num
    }
}

sincroCalendar()

function daySkip(){
    const date = new Date()
    console.log(date.getDate());
    
}

daySkip()