const allTabs = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('info');

for (let tab of allTabs) {
    tab.addEventListener('click', () => {
        const targetId = tab.dataset.tabTarget;
        const objetivo = document.querySelector(targetId);

        for (let con of tabContent) {
            con.classList.remove('activeInfo');
        }

        for (let tab of allTabs) {
            tab.classList.remove('activeTab');
        }

        tab.classList.add('activeTab');
        objetivo.classList.add('activeInfo');
    });
}