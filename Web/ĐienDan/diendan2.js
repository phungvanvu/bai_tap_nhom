// Lấy phần tử menu options
var userOptions = document.querySelector('.user-options-inner');

// Lấy phần tử nút "Tùy Chọn"
var optionsButton = document.querySelector('.user-options-button');

// Thêm sự kiện click vào nút "Tùy Chọn"
optionsButton.addEventListener('click', function() {
    // Kiểm tra nếu menu options đang ẩn thì hiển thị, ngược lại ẩn đi
    if (userOptions.style.display === 'none' || userOptions.style.display === '') {
        userOptions.style.display = 'block'; // Hiển thị menu options
    } else {
        userOptions.style.display = 'none'; // Ẩn menu options
    }
});
