var firstInput = document.getElementById("firstInput");
var secondInput = document.getElementById("secondInput");

var linksList = [];
if (localStorage.getItem("links") != null) {
    linksList = JSON.parse(localStorage.getItem("links"));
  displayData();
}

function addLink() {
  var objectLink = {
    name: firstInput.value,
    link: secondInput.value,
  };
  linksList.push(objectLink);
  localStorage.setItem("links", JSON.stringify(linksList));
  displayData();
  clr();
  console.log(linksList);
}

function clr() {
  firstInput.value = "";
  secondInput.value = "";
}

function displayData() {
  var cartona = ``;
  for (var i = 0; i < linksList.length; i++) {
    cartona += `
        
        <tr>
                    <td>${i + 1}</td>
                    <td>${linksList[i].name}</td>
                    <td>
                    <button class="btn btn-success  py-2 px-3 "> <i class="fa-solid fa-eye fa-fade me-1"></i>
                    <a href="${linksList[i].link}" target="_blank">Visit</a> </button>
                    </td>
                    <td>
                        <button class="btn btn-danger py-2 px-3 " onclick="DeleteData(${i})"> <i class="fa-solid fa-trash-can fa-beat me-1"></i>
                            Delete</button>
                    </td>
                </tr>
        
        `;
  }
  document.getElementById("TableBody").innerHTML = cartona;
}
function DeleteData(index) {
  linksList.splice(index, 1);
  localStorage.setItem("links", JSON.stringify(linksList));
  displayData();
}
