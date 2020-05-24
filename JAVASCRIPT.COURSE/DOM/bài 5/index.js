var D = new Date();
 var CurrentYear, YearOfBirth;
  CurrentYear = D.getFullYear(); //Lưu năm hiện tại vào biến
 do {
  YearOfBirth = prompt("Please enter your Year Of Birth : ","");
 } while (parseInt(YearOfBirth)>CurrentYear); //Nhập lại nếu Năm sinh>năm hiện tại
 alert("your current age : " + (CurrentYear - YearOfBirth));