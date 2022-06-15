let qrcode = new QRCode("qrcode");
let inputURL = document.querySelector(".url-text");
var activeCode = document.querySelector('.active-code');

const makeQRCode = function(){
  if (!inputURL.value) {
    alert("QRCode não pode ser gerado porque não foi informado uma URL ou texto.");
    inputURL.focus();
    return;
  }
  
  qrcode.makeCode(inputURL.value);
  // activeCode.innerHTML = inputURL.value;
};


inputURL.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
      makeQRCode();
      
    }
});

const gerarQrcodeBtn = document.querySelector('.button-qrcode');
gerarQrcodeBtn.addEventListener('click', function(e){
  e.preventDefault();
  makeQRCode()
});


function print() {
	printJS({
    printable: 'printElement',
    type: 'html',
    targetStyles: ['*']
 })
}

document.getElementById('printButton').addEventListener("click", function(e){
  e.preventDefault();
  print();
})
