function log(logNote,logVal) {
    var note = "";


    if (logNote) {
        note = "[ " + logNote.toUpperCase() + " ]";
    }

    console.log(note + " " + logVal);
}

module.exports = log;
