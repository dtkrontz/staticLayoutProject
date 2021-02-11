function dropDown () {
    document.getElementsByClassName('.dropBtn').classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
      let dropdowns = document.getElementsByClassName("dropDownContent");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
