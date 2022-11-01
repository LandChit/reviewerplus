function loadin(dict) {
    for ([key, val] of Object.entries(dict)) {
        add_input(key, val)
    }
}

function makedict() {
    var inputcluster = $("#inputs input");
    dict = {}
    for (var i = 0; i < inputcluster.length; i += 2) {
        key = inputcluster[i].value
        val = inputcluster[i + 1].value
        if (key != "") {
            dict[key] = val
        }
    }

    return dict
}

function start() {
    makedict()
    console.log(makedict())
}

function save() {
    var textToSave = JSON.stringify(makedict())
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'rplus_save.json';
    hiddenElement.click();
}

$(document).on('change', '#loadbutton', function (event) {
    var reader = new FileReader();

    reader.onload = function (event) {
        var jsonObj = JSON.parse(event.target.result);
        loadin(jsonObj)
    }
    reader.readAsText(event.target.files[0]);
    event.target.value = null
});