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
      <div class="col-10">Plough the fields and add fertilizer</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">2</div></div>
      <div class="col-10">Plough the fields and add fertilizer</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">3</div></div>
      <div class="col-10">Plough the fields and add fertilizer</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">4</div></div>
      <div class="col-10">Plough the fields and add fertilizer</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">5</div></div>
      <div class="col-10">Plough the fields and add fertilizer</div>
    </div>
    <div class="row timeline-row">
      <div class="col-2"><div class="timeline-num">6</div></div>
      <div class="col-10">Plough the fields and add fertilizer</div>
    </div>
  </div>
</div>
<div class="timeline-footer">
  <p>
    <span class="underline-yellow">Note</span> : Instructions get modified
    due to climate change. Vikas will send you a notification everytime
    that happens
  </p>
</div>`;
}
