window.onload = () => {
    let indexPage = document.querySelector('#index-page')
    indexPage.innerHTML = '<i class="ri-home-fill"></i>'
    let main = document.querySelector('.main')
    let header = document.querySelector('.header')
    let footer = document.querySelector('.footer')
    main.style.margin = `${header.offsetHeight}px 0 ${header.offsetHeight}px 0`
}
function showCmtModel() {
    document.getElementById("comment-checkbox-open").checked = true;
    $.ajax({
      url: "http://127.0.0.1:5500/pages/cmtModel.html",
      success: function (result) {
        $("main").html(result);
      },
    });
}
function hideCmtModel() {
    document.getElementById("comment-checkbox-open").checked = false;
    // console.log(2)
}

  
