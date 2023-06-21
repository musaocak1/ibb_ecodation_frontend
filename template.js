//Dark Mode
let darkModu = () => {
    //alert("Dark Modu");
    document.body.classList.toggle("dark_mode");
    

}

//Input search
$(document).ready(function () {
    const searchApi = ["Adana", "Balikesir", "Çorum", "Denizli", "Diyarbakir", "Edirne", "Malatya", "Van"];
    $("#tags").autocomplete({
        source: searchApi
    })
});//end


// Footer
let newDate = () => {
    const date = new Date().getUTCFullYear();
    //JS DOM
    //document.getElementById("date_id").innerHTML - new Date().getFullYear();

    //Jquery DOM
    $("#date_id").html(date);
}
newDate()