$(document).ready(function(){});
    $("h1").onclick(function(){
        $("h1").click();
    });
    $("p").click(function(){
        $("p").show();
    });
        $("button#success").click(function(){
    $("button").show("info");
});


$("form-data").submit(function(event){
    //user input section
    let guestId= $("#name").value();//fetch info from select item name.
    let guestAge= $("#age").value();// fetch info form select item age
    let languageChoice= $('input[name="language"]:checked').value(); //checking values from radio buttons
    let choiceReasons= $("#custom").value();// checking languages valuesfrom checkbox
    let languages= new arr ();
    $('input[name="languages"]:checked').each(function(){
        languages.push(this.value); 
    });

    // output display
    $("#name").text(guestId); // appends value from user input
    $("#age").text(guestAge); // appends value from user input
    $("#languageChoice").text(languageChoice); // appends value from user input
    $("#choiceReasons").text(choiceReasons); // appends value from user input
    $("#languages").text(selectedLanguages.join(", ")); // Converts array into a string using the join() appends string 
    $("div.alert").show(); // showing the alert 
    event.preventDefault(); // Prevents the page from refreshing and losing data
})
