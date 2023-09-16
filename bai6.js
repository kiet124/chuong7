
function generateRandomArray() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 101)); 
    }
    return arr;
  }
  
  
  function printArray(arr) {
    console.log("Mảng: " + arr.join(", "));
  }
  
 
  function reverseArray(arr) {
    arr.reverse();
  }
  
  
  function sortArray(arr) {
    arr.sort((a, b) => a - b);
  }
  
  function findNumber(arr, num) {
    const index = arr.indexOf(num);
    if (index !== -1) {
      console.log(`Số ${num} được tìm thấy tại chỉ số ${index}`);
    } else {
      console.log(`Không tìm thấy số ${num}`);
    }
  }
  
  const menu = `
  -- CHỌN CHỨC NĂNG --
  1. Tạo mảng
  2. Xuất mảng
  3. Đảo mảng
  4. Sắp xếp mảng
  5. Tìm 1 số
  6. Thoát
  Chọn thao tác thực hiện:`;
  
  let array = [];
  
  do {
    var input = parseInt(prompt(menu));
  
    switch (input) {
      case 1:
        array = generateRandomArray();
        console.log("Mảng đã được tạo.");
        break;
      case 2:
        if (array.length === 0) {
          console.log("Mảng chưa được tạo.");
        } else {
          printArray(array);
        }
        break;
      case 3:
        if (array.length === 0) {
          console.log("Mảng chưa được tạo.");
        } else {
          reverseArray(array);
          console.log("Mảng đã được đảo ngược.");
        }
        break;
      case 4:
        if (array.length === 0) {
          console.log("Mảng chưa được tạo.");
        } else {
          sortArray(array);
          console.log("Mảng đã được sắp xếp theo thứ tự tăng dần.");
        }
        break;
      case 5:
        if (array.length === 0) {
          console.log("Mảng chưa được tạo.");
        } else {
          const numberToFind = parseInt(prompt("Nhập số cần tìm:"));
          findNumber(array, numberToFind);
        }
        break;
      case 6:
        console.log("Thoát khỏi chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        break;
    }
  } while (input !== 6);
  