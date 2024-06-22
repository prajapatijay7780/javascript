function btn1() {
    lbl1.innerHTML = "simple matrix :-"
    lbl2.innerHTML = ""
    var a = []
    a[0] = parseInt(txt1.value)
    a[1] = parseInt(txt2.value)
    a[2] = parseInt(txt3.value)
    a[3] = parseInt(txt4.value)
    a[4] = parseInt(txt5.value)
    a[5] = parseInt(txt6.value)
    a[6] = parseInt(txt7.value)
    a[7] = parseInt(txt8.value)
    a[8] = parseInt(txt9.value)
    var b = []
    for (let i = 0; i < 3; i++) {
        b[i] = [];
        for (let j = 0; j < 3; j++) {
            b[i][j] = a[i * 3 + j];
            lbl2.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl2.innerHTML += "<br>";
    }

}
function btn2() {
    lbl1.innerHTML = ""
    var a = []
    for (let i = 0; i < 9; i++) {
        a[i] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }
    var b = []
    for (let i = 0; i < 3; i++) {
        b[i] = []
        for (let j = 0; j < 3; j++) {
            b[i][j] = a[i * 3 + j]
            lbl1.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl1.innerHTML += "<br>"
    }
    lbl2.innerHTML = ""
    var max = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            if (b[i][j] > max) {
                max = b[i][j]
                lbl2.innerHTML = "maximun number :-" + max;
            }
        }

    }
    lbl3.innerHTML = "";
    var min = b[0][0];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            if (b[i][j] < min) {
                min = b[i][j]
                lbl3.innerHTML = "minimun number :-" + min;
            }
        }
    }
}
function btn3() {
    var a = [];
    var a2 = [];

    for (let i = 0; i < 9; i++) {
        a[i] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }

    for (let i = 9; i < 18; i++) {
        a2[i - 9] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }

    var b = [];
    var b2 = [];

    // first matrix
    lbl1.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        b[i] = [];
        for (let j = 0; j < 3; j++) {
            b[i][j] = a[i * 3 + j];
            lbl1.innerHTML += b[i][j] + "&nbsp;";
        }
        lbl1.innerHTML += "<br>";
    }

    // second matrix
    lbl2.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        b2[i] = [];
        for (let j = 0; j < 3; j++) {
            b2[i][j] = a2[i * 3 + j];
            lbl2.innerHTML += b2[i][j] + "&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
    //sum of matrix
    lbl3.innerHTML = "Sum of 2 matrices:<br>";
    lbl4.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            var sum = b[i][j] + b2[i][j];
            lbl4.innerHTML += sum + "&nbsp;";
        }
        lbl4.innerHTML += "<br>";
    }
}

function btn4() {
    var a = [];
    var a2 = [];

    for (let i = 0; i < 9; i++) {
        a[i] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }

    for (let i = 9; i < 18; i++) {
        a2[i - 9] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }

    var b = [];
    var b2 = [];

    // first matrix
    lbl1.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        b[i] = [];
        for (let j = 0; j < 3; j++) {
            b[i][j] = a[i * 3 + j];
            lbl1.innerHTML += b[i][j] + "&nbsp;";
        }
        lbl1.innerHTML += "<br>";
    }

    // second matrix
    lbl2.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        b2[i] = [];
        for (let j = 0; j < 3; j++) {
            b2[i][j] = a2[i * 3 + j];
            lbl2.innerHTML += b2[i][j] + "&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
    // multiplication of matrix
    lbl3.innerHTML = "multiplication of matrix :-"
    lbl4.innerHTML = ""
    var mul = [[0, 0, 0], [0, 0, 0,], [0, 0, 0]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++)
                mul[i][j] += b[i][k] * b2[k][j];
            lbl4.innerHTML += mul[i][j] + "&nbsp;"
        }
        lbl4.innerHTML += "<br>"
    }
}
function btn5() {
    lbl1.innerHTML = ""
    var a = []
    for (let i = 0; i < 9; i++) {
        a[i] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }
    var b = []
    for (let i = 0; i < 3; i++) {
        b[i] = []
        for (let j = 0; j < 3; j++) {
            b[i][j] = a[i * 3 + j]
            lbl1.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl1.innerHTML += "<br>"
    }
    lbl2.innerHTML = ""
    flag = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            if (b[i][j] != b[j][i]) {
                flag = 1;
                break;
            }

        }
        if (flag == 0) {
            lbl2.innerHTML = "symetrix matrix"
        }
        else {
            lbl2.innerHTML = " Not symetrix matrix"
        }

    }
}
function btn6() {
    lbl1.innerHTML = "main matrix:-"
    lbl2.innerHTML = ""
    lbl3.innerHTML = "transport matrix :-"
    lbl4.innerHTML = ""
    var a = [];
    for (let i = 0; i < 9; i++) {
        a[i] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }
    var b = [];
    for (let i = 0; i < 3; i++) {
        b[i] = []
        for (let j = 0; j < 3; j++) {
            b[i][j] = a[i * 3 + j];
            lbl2.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl2.innerHTML += "<br>"
    }
    for (let i = 0; i < 3; i++) {
        b[i] = []
        for (let j = 0; j < 3; j++) {
            b[j][i] = a[j * 3 + i];
            lbl4.innerHTML += b[j][i] + "&nbsp;"
        }
        lbl4.innerHTML += "<br>"
    }

}
function btn7() {
    lbl1.innerHTML = "main matrix:-"
    lbl2.innerHTML = ""
    lbl3.innerHTML = "Assending matrix :-"
    lbl4.innerHTML = ""
    var a = [];
    for (let i = 0; i < 9; i++) {
        a[i] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }
    var b = [];
    for (let i = 0; i < 3; i++) {
        b[i] = []
        for (let j = 0; j < 3; j++) {
            b[i][j] = a[i * 3 + j];
            lbl2.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl2.innerHTML += "<br>"
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = j + 1; k < 3; k++) {
                if (b[i][j] > b[i][k]) {
                    var num = b[i][j]
                    b[i][j] = b[i][k]
                    b[i][k] = num
                }
            }
            lbl4.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl4.innerHTML += "<br>"
    }
}
function btn8() {
    lbl1.innerHTML = "main matrix:-"
    lbl2.innerHTML = ""
    lbl3.innerHTML = "Dessending matrix :-"
    lbl4.innerHTML = ""
    var a = [];
    for (let i = 0; i < 9; i++) {
        a[i] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }
    var b = [];
    for (let i = 0; i < 3; i++) {
        b[i] = []
        for (let j = 0; j < 3; j++) {
            b[i][j] = a[i * 3 + j];
            lbl2.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl2.innerHTML += "<br>"
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = j + 1; k < 3; k++) {
                if (b[i][j] < b[i][k]) {
                    var num = b[i][j]
                    b[i][j] = b[i][k]
                    b[i][k] = num
                }
            }
            lbl4.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl4.innerHTML += "<br>"
    }
}
function btn9() {
    lbl1.innerHTML = "main matrix:-"
    lbl2.innerHTML = ""
    lbl3.innerHTML = "Full-Assending matrix :-"
    lbl4.innerHTML = ""
    var a = [];
    for (let i = 0; i < 9; i++) {
        a[i] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }
    var b = [];
    for (let i = 0; i < 3; i++) {
        b[i] = []
        for (let j = 0; j < 3; j++){
            b[i][j] = a[i * 3 + j];
            lbl2.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl2.innerHTML += "<br>"
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    if (b[i][j] < b[k][l]) {
                        var num = b[i][j]
                        b[i][j] = b[k][l]
                        b[k][l] = num
                    }
                }
            }
            // lbl4.innerHTML += b[i][j] + "&nbsp;"
        }
        // lbl4.innerHTML += "<br>"
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            lbl4.innerHTML += b[i][j] + "&nbsp;";
        }
        lbl4.innerHTML += "<br>";
    }
}
function btn10() {
    lbl1.innerHTML = "main matrix:-"
    lbl2.innerHTML = ""
    lbl3.innerHTML = "Full-Dessending matrix :-"
    lbl4.innerHTML = ""
    var a = [];
    for (let i = 0; i < 9; i++) {
        a[i] = parseInt(document.getElementById("txt" + (i + 1)).value);
    }
    var b = [];
    for (let i = 0; i < 3; i++) {
        b[i] = []
        for (let j = 0; j < 3; j++){
            b[i][j] = a[i * 3 + j];
            lbl2.innerHTML += b[i][j] + "&nbsp;"
        }
        lbl2.innerHTML += "<br>"
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    if (b[i][j] > b[k][l]) {
                        var num = b[i][j]
                        b[i][j] = b[k][l]
                        b[k][l] = num
                    }
                }
            }
            // lbl4.innerHTML += b[i][j] + "&nbsp;"
        }
        // lbl4.innerHTML += "<br>"
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            lbl4.innerHTML += b[i][j] + "&nbsp;";
        }
        lbl4.innerHTML += "<br>";
    }
}
function btn11() {
    lbl1.innerHTML = ""
    lbl2.innerHTML = ""
        var a = [];
        for (let i = 0; i < 4; i++) {
            a[i] = [];
            a[i][0] = 1;
            for (let j = 1; j < i; j++) {
                a[i][j] = a[i - 1][j - 1] + a[i - 1][j];
            }
            if (i > 0) {
                a[i][i] = 1;
            }
            for (let j = 0; j <= i; j++) {
                lbl1.innerHTML += a[i][j] + "&nbsp;&nbsp;"; 
            }
            lbl1.innerHTML += "<br>";
        }

        for (let i = 0; i < a.length; i++) {
            for (let s = 0; s < a.length - i; s++) {
                lbl2.innerHTML += "&nbsp;&nbsp;"
            }
            for (let j = 0; j <= i; j++) {
                lbl2.innerHTML += a[i][j] + "&nbsp;&nbsp;"
            }
            lbl2.innerHTML += "<br>"
        }
    }
    
    
