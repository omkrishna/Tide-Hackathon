function showTimeline(crop) {
  console.log(crop);

  var wrapper = document.querySelector(".outer-timeline");
  wrapper.innerHTML = `<div class="modal-crop-img">
  <img
    src=${crop[18]}
  />
</div>
<div class="timeline">
  <h3><span class="underline-yellow">${crop[0]}</span></h3>
  <h6>Time : ${crop[3]}</h6>
  <h6>Water requirement : ${crop[6]}</h6>
  <div class="timeline-container">
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">1</div></div>
      <div class="col-10">${crop[19]}</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">2</div></div>
      <div class="col-10">${crop[20]}</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">3</div></div>
      <div class="col-10">${crop[21]}</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">4</div></div>
      <div class="col-10">${crop[22]}</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">5</div></div>
      <div class="col-10">${crop[23]}</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">6</div></div>
      <div class="col-10">${crop[24]}</div>
    </div>
  </div>
</div>
`;
}
