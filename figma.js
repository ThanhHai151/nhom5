const shopButton = document.getElementById('shop');
    const homepage = document.querySelector('.homepage');

    // Lắng nghe sự kiện click vào 'shop'
    shopButton.addEventListener('click', function() {
        homepage.style.display = 'none'; // Ẩn toàn bộ phần tử có class homepage
    });