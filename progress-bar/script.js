window.onscroll = scrolling();

function scrolling() {
    let winScroll = window.scrollY;
    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
    let color = '';
    if (scrolled == 100) {
        color = 'green';
    } else if (scrolled < 100 && scrolled > 75) {
        color = 'lightgreen';
    } else if (scrolled < 75 && scrolled > 50) {
        color = 'orange';
    } else if (scrolled < 50 && scrolled > 25) {
        color = 'yellow';
    } else {
        color = 'lightblue';
    }
    let barColor = (document.getElementById(
        'progress-bar'
    ).style.backgroundColor = `${color}`);
}
