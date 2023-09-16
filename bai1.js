
function nhapMang() {
    var n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
    var mang = [];
  
    for (var i = 0; i < n; i++) {
      var phanTu = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
      mang.push(phanTu);
    }
  
    return mang;
  }
  
  function xuatMang(mang) {
    console.log("Mảng bạn vừa nhập là:");
    console.log(mang);
  }
  
  var mangNhap = nhapMang();
  xuatMang(mangNhap);
  