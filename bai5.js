var arrNumber = ['111', '222', '333', '444'];

// Kiểm tra và xoá phần tử có giá trị '222'
var indexToRemove = arrNumber.indexOf('222');
if (indexToRemove !== -1) {
  arrNumber.splice(indexToRemove, 1);
}

// Kiểm tra và thay thế phần tử có giá trị '444' thành '555'
var indexToReplace = arrNumber.indexOf('444');
if (indexToReplace !== -1) {
  arrNumber[indexToReplace] = '555';
}

// Chuyển tất cả phần tử trong mảng thành kiểu số
for (var i = 0; i < arrNumber.length; i++) {
  arrNumber[i] = parseInt(arrNumber[i], 10);
}

// In mảng sau khi đã thay đổi
console.log(arrNumber);
