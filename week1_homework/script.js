const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

const priceElement = document.getElementById('price1');
// getElementById 메서드를 사용해서 버튼들의 DOM 요소를 가져왔구요, 
// updatePrice 함수를 사용해서 가격을 업데이트하도록 했습니다. 0원 이하로는 안 떨어지게요. 

function updatePrice(price) {
    // replace 메서드를 사용하게 될 줄은 몰랐는데 상당히 어려웠습니다...
    //  텍스트에서 숫자만 추출하고 그걸 정수화해서 price에 더하거나 빼는 로직을 만들었어요.
    let currentPrice = parseInt(priceElement.textContent.replace(/[^\d]/g, ''));

    currentPrice += price;
    if (currentPrice < 0) {
        currentPrice = 0;
    }

    priceElement.textContent = `₩${currentPrice.toLocaleString()} /박`;
}

decreaseBtn.addEventListener('click', function() {
    updatePrice(-10000);
});

increaseBtn.addEventListener('click', function() {
    updatePrice(10000);
});
