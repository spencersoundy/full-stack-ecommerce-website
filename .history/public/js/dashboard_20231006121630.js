const { userInfo } = require("os");


let greeting = document.querySelector('#seller-gretting');
greeting.innerHTML += userInfo.name