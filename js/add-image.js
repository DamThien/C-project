function previewBeforeUpload(id) {
    document.querySelector("#" + id).addEventListener("change", function(e) {
        if (e.target.files.length == 0) {
            return;
        }
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        document.querySelector("#" + id + "-preview img").src = url;
    });
}
previewBeforeUpload("file");

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close-icon")[0];
btn.onclick = function() {
    modal.style.display = "block";

}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}