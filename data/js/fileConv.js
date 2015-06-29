var resumeBase64 = null;

function handleFileSelect(element){
    var fileObj = element.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(returnObj){
        resumeBase64 = returnObj.target.result;
    };
    fileReader.readAsDataURL(fileObj);
}
