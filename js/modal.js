// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showModal(
  btn,
  name,
  soil,
  temp,
  time,
  pesticides,
  state,
  image,
  video
) {
  var newModal = document.createElement("div");

  newModal.innerHTML = `<div class="modal-crop-img">
  <img
    src=${image}
  />
</div>
<div class="modal-inner-content">
  <h3>${name}</h3>
  <div class="row">
    <div class="col-6">Time : ${time}</div>
    <div class="col-6">Soil : ${soil}</div>
    <div class="col-12">State : ${state}</div>
    <div class="col-12">Temperature : ${temp}</div>
    <div class="col-12">Pesticides : ${pesticides}</div>
  </div>
  
  <iframe
    src=${video}
    title="W3Schools Free Online Web Tutorials"
    class="modal-video"
  ></iframe>
  <div class="row">
    <div class="col-4">
      <button class="btn btn-lg btn-light close" onclick="closeModal()">Close</button>
    </div>
    <div class="col-8">
      <button class="btn btn-lg btn-warning" onclick="startFarming('${name}')">Start Farming</button>
    </div>
  </div>
</div>`;

  document.querySelector(".modal-content").innerHTML = newModal.innerHTML;

  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function startFarming(cropName) {
  localStorage.setItem("cropName", cropName);
  console.log(localStorage.getItem("cropName"));
  window.location.href = "timeline.html";
}
