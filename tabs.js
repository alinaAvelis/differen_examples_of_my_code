function tabs() {
    const tabsButton = document.querySelectorAll('.tab_btn_list__item');
    const tabs = document.querySelectorAll('.tab_text');

    function showOne(arr, item, activeClass) {
        arr.forEach(item => item.classList.remove(activeClass));
        item.classList.add(activeClass)
    }

    showOne(tabs, tabs[0], 'show');
    showOne(tabsButton, tabsButton[0], 'tab_btn_list__item--active');

    tabsButton.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            showOne(tabs, tabs[i], 'show');
            showOne(tabsButton, btn, 'tab_btn_list__item--active');
        }); 
    })
}

export default tabs;
