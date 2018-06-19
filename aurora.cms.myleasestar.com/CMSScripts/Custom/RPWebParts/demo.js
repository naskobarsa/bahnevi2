function main(size){
    head(size);
    line(size);
    topBody(size);
    bottomBody(size);
    line(size);
    bottomBody(size);
    topBody(size);
    line(size);
    headColored(size);
}

main(3);

function headColored(size) {
    let htmlLine = "";
    let countRows = Number(size+size-1);
    for (let row = 0; row<countRows; row++) {
        for (let space = 1; space < size + size - row; space++) {
            htmlLine +=" ";
        }
        for (let slash = 0; slash <= row; slash++) {
            htmlLine+='<div>\n    <span style="color:red;">' + "/" + '</span>\n</div>\n';
        }
        htmlLine+="**";
        for (let backslash = 0; backslash <= row; backslash++) {
            htmlLine+="\\";
        }
        htmlLine+='';
        console.log(htmlLine);
        htmlLine="";
    }
}

function head(size) {
    let resultLine = "";
    let countRows = Number(size+size-1);
    for (let row = 0; row<countRows; row++) {
        for (let space = 1; space < size + size - row; space++) {
            resultLine +="&nbsp";
        }
        for (let slash = 0; slash <= row; slash++) {
             resultLine+="/&nbsp";
        }
        resultLine+="**";
        for (let backslash = 0; backslash <= row; backslash++) {
            resultLine+="\\";
        }
        console.log(resultLine + "<br>");
        resultLine="";
    }
}

function line(size) {
    let result ="+";
    for (let i = 0; i < size*2; i++) {
       result+="*=";
    }
    console.log(result+ "+");
}

function topBody(size) {
    let result= "|";
    for (let line = 1; line <= size; line++) {
        for (let i = size; i > line; i--) {
            result += ".";
        }
        for (let m = 1; m <= line; m++) {
           result+="\/\\"
        }
        for (let i = size; i > line; i--) {
            result += ".";
        }
        for (let i = size; i > line; i--) {
            result += ".";
        }
        for (let m = 1; m <= line; m++) {
            result+="\/\\"
        }
        for (let i = size; i > line; i--) {
            result += ".";
        }
        console.log(result +"|");
        result="|";
    }
}

function bottomBody(size) {
    let result= "|";
    for (let line = 1; line <= size; line++) {
        for (let i = 0; i < line-1; i++) {
            result += ".";
        }
        for (let m = size-line+1; m >= 1; m--) {
            result+="\\\/"
        }
        for (let i = 0; i < line-1; i++) {
            result += ".";
        }
        for (let i = 0; i < line-1; i++) {
            result += ".";
        }
        for (let m = size-line+1; m >= 1; m--) {
            result+="\\\/"
        }
        for (let i = 0; i < line-1; i++) {
            result += ".";
        }
        console.log(result +"|");
        result="|";
    }
}

