var resumeBase64 = null,
    fileType = null,
    fileName = null,
    subStr = null;
    

function handleFileSelect(element){
    var fileObj = element.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(returnObj){
        resumeBase64 = returnObj.target.result;
    };
    fileReader.readAsDataURL(fileObj);
    fileType =fileObj.type;
    fileName =fileObj.name;
    subStr= fileType+";base64,";
    resumeBase64=resumeBase64.substring(resumeBase64.lastIndexOf(subStr)+subStr.length);
}
