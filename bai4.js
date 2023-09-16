function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  }
  
  function isPrimeNumber(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function isPerfectNumber(num) {
    if (num <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }
    return sum === num;
  }
  
  function countPrimes(arr) {
    return arr.filter(isPrimeNumber).length;
  }
  
  function countPerfectNumbers(arr) {
    return arr.filter(isPerfectNumber).length;
  }
  
  const menu = `
  -- CHỌN CHỨC NĂNG --
  1. Nhập mảng
  2. Xuất mảng
  3. In số nguyên tố
  4. In số hoàn hảo
  5. Đếm số nguyên tố
  6. Đếm số hoàn hảo
  7. Thoát
  Chọn thao tác thực hiện:`;
  
  let array = [];
  
  do {
    var input = parseInt(prompt(menu));
  
    switch (input) {
      case 1:
        array = generateRandomArray(100);
        console.log("Mảng đã được tạo.");
        break;
      case 2:
        if (array.length === 0) {
          console.log("Mảng chưa được tạo.");
        } else {
          console.log("Mảng: " + array.join(", "));
        }
        break;
      case 3:
        if (array.length === 0) {
          console.log("Mảng chưa được tạo.");
        } else {
          const primeNumbers = array.filter(isPrimeNumber);
          if (primeNumbers.length === 0) {
            console.log("Không có số nguyên tố trong mảng.");
          } else {
            console.log("Các số nguyên tố trong mảng: " + primeNumbers.join(", "));
          }
        }
        break;
      case 4:
        if (array.length === 0) {
          console.log("Mảng chưa được tạo.");
        } else {
          const perfectNumbers = array.filter(isPerfectNumber);
          if (perfectNumbers.length === 0) {
            console.log("Không có số hoàn hảo trong mảng.");
          } else {
            console.log("Các số hoàn hảo trong mảng: " + perfectNumbers.join(", "));
          }
        }
        break;
      case 5:
        if (array.length === 0) {
          console.log("Mảng chưa được tạo.");
        } else {
          console.log("Số lượng số nguyên tố trong mảng: " + countPrimes(array));
        }
        break;
      case 6:
        if (array.length === 0) {
          console.log("Mảng chưa được tạo.");
        } else {
          console.log("Số lượng số hoàn hảo trong mảng: " + countPerfectNumbers(array));
        }
        break;
      case 7:
        console.log("Thoát khỏi chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        break;
    }
  } while (input !== 7);
  