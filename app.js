// alert("hello")
function selectnote() {
    const input1 = document.getElementById("input1").value
    const note10 = document.getElementById("note1").value || 0;
    const note_10 = parseInt(note10) * 10;
    const note20 = document.getElementById("note2").value || 0;
    const note_20 = parseInt(note20) * 20;
    const note50 = document.getElementById("note3").value || 0;
    const note_50 = parseInt(note50) * 50;
    const note100 = document.getElementById("note4").value || 0;
    const note_100 = parseInt(note100) * 100;
    const note500 = document.getElementById("note5").value || 0;
    const note_500 = parseInt(note500) * 500;
    const note1000 = document.getElementById("note6").value || 0;
    const note_1000 = parseInt(note1000) * 1000;
    const note5000 = document.getElementById("note7").value || 0;
    const note_5000 = parseInt(note5000) * 5000;
    const allnotes = note_10 + note_20 + note_50 + note_100 + note_500 + note_1000 + note_5000;
    // if (allnotes == ""){
    //     alert("Please select rupees")
    // }

    if (input1 === "") {
        alert("Please write reciever name")
    }
    else {
        if (allnotes == "") {

            alert("Please select rupees")
        } else {
            if (allnotes !== "") {
                alert(allnotes * 1 + " " + "Rupees Eidi has sent to" + " " + "'" + input1 + "'")
            }
        }
    }
    // input1.value = "";
}