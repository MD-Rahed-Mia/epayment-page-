$("#cancelBtn").click(function () {
  $(".tab-content").html("<h1>Payment Cancel</h1><p>You have cancel payment.");
  $("button").attr("disabled", true);
});

const paymentSelector = document.querySelectorAll(".payment-selector");
const personalBox = document.querySelector(".personal-box");

paymentSelector.forEach((selector, ind) => {
  const text = selector.getAttribute("alt");
  
  // console.log(selector);
  // console.log(text);

  selector.addEventListener("click", () => {
    personalBox.innerHTML = ` 
                        <div class=" d-flex gap-3 justify-content-center" >
                            <p class="border p-2 " id="btnPrepend">${text} <span>Personal</span></p>
                            <p class="border p-2 " id="btnPrepend">${text} <span>Agent</span></p>
                            <p class="border p-2 " id="btnPrepend">${text} <span>Marchent</span></p>
                        </div>
  
  `;
  });
});

document.addEventListener("click", function (e) {
  const target = e.target.closest("#btnPrepend"); // Or any other selector.

  if (target) {
    // Do something with `target`.
    const text = target.innerText;
    console.log(text);


    console.log(e);

    personalBox.innerHTML = `
    

    <div class="raw-check ">
    <h2 class="w-100 bg-dark rounded text-white d-flex  justify-content-center py-3 align-items-center">${text}</h2>
      <input type="text" placeholder="enter transaction id" class="p-2 w-100 rounded raw-input">
    </div>


    <ul class="text-left my-2 raw-details ">
      <li>Go to your ${text} App or dial USSD Code.</li>
      <li>Choose: Cash out</li>
      <li>Enter reciever account number <span id="copyNumber">01312453645 <span class="copy-tooltip">-Double click to copy</span> </li>
      <li>Enter the ammount <span >10.00 BDT. </span></li>
      <li>Now enter your ${text} Mobile Menu PIN to confirm.
</li>
    <li>Done! You will receive a confirmation message from ${text} </li>
    <li>
Put theTransaction ID in the upper box and press VERIFY </li>

    `;
    $("#checkData")
      .text("Varify");

    const copyNumber = document.querySelector("#copyNumber");

    copyNumber.onclick = function () {
      document.execCommand("copy");
    };
  }
});
