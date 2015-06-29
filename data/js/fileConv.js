var resumeBase64 = null,
    type = null;

function handleFileSelect(element){
    var fileObj = element.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(returnObj){
        resumeBase64 = returnObj.target.result;
    };
    fileReader.readAsDataURL(fileObj);
    type = document.getElementById('uploadfile').files[0].type
}
