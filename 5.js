function stoim() {
    let regexp = /\D/g;
    let st = document.getElementsByName("price")[0].value;
    let count = document.getElementsByName("kol")[0].value;
    let r = document.getElementById("res");

    if (Boolean(st) && Boolean(count)) {
        if (regexp.test(st) || regexp.test(count)) {
           r.innerText = "Данные введены не корректно";
        } else {
            regexp = /\d/g;
            
            st = parseInt(st.match(regexp).join(""));
            count = parseInt(count.match(regexp).join(""));
            r.innerText = st * count;
        }
    }else {
        r.innerText = "Данные введены не корректно";
    }
}

window.document.addEventListener("DOMContentLoaded", function (stoim) {
    console.log("DOM is fully loaded and parsed");
    let button = document.getElementById("res");
    button.addEventListener("click", stoim);
});
