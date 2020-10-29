let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        }else if(styles.contains("increase")) {
            count++;
        }else{
            count = 0;
        }

        if(count > 0){
            value.style.color ="#27AE60";
        }
        if(count < 0){
            value.style.color ="#E74C3C";
        }
        if(count === 0){
            value.style.color ="#7F8C8D";
        }

        value.textContent = count;
    });
});