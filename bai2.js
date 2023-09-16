let array = [];

function enterArray() {
  let n = parseInt(prompt("Nhập số phần tử của mảng:"));
  array = [];
  for (let i = 0; i < n; i++) {
    let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
    array.push(value);
  }
  console.log("✔️ Mảng đã được nhập.");
}

function displayArray() {
  if (array.length === 0) {
    console.log("Mảng rỗng.");
  } else {
    console.log("Mảng:");
    console.log(array);
  }
}

function findMax() {
  if (array.length === 0) {
    console.log("Mảng rỗng.");
  } else {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    console.log(`Số lớn nhất trong mảng: ${max}`);
  }
}

function findMin() {
  if (array.length === 0) {
    console.log(" Mảng rỗng.");
  } else {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    console.log(`Số nhỏ nhất trong mảng: ${min}`);
  }
}

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(`Tổng các số trong mảng: ${sum}`);
}

const menu = ` -- CHỌN CHỨC NĂNG --
1. Nhập mảng
2. Xuất mảng
3. Tìm số lớn nhất
4. Tìm số nhỏ nhất
5. Tính tổng
6. Thoát

Chọn thao tác thực hiện:
`;

do {
  var input = parseInt(prompt(menu));

  if (input === 1) {
    enterArray();
  } else if (input === 2) {
    displayArray();
  } else if (input === 3) {
    findMax();
  } else if (input === 4) {
    findMin();
  } else if (input === 5) {
    calculateSum();
  } else if (input === 6) {
    console.log(" Chương trình đã kết thúc. Hẹn gặp lại!");
    break; 
  } else {
    console.log(" Lựa chọn không hợp lệ. Vui lòng thử lại.");
  }
} while (true);