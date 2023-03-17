// // let exmplText = "fESst3";

// // function letterCapChange(par1) {
// //   let result = "";
// //   for (let i = 0; i < par1.length; i++) {
// //     let character = par1[i];
// //     if (character == character.toLowerCase()) {
// //       result += character.toUpperCase();
// //     } else {
// //       result += character.toLowerCase();
// //     }
// //   }
// //   return result;
// // }   

// // console.log(letterCapChange(exmplText));

// let rndmLength = ["test232", "iamTHENIGHT", "sza"];

// function maxString(arr) {
//     let sortingArr = arr.sort(function(a, b){return b.length - a.length;});
//     let maxStr = sortingArr.shifAt()

//     return maxStr;
// }

// console.log(maxString(rndmLength))

function js_style() {
    let styles = {
        "background-color": "red",
        "color": "blue"
    }
    let obj = document.getElementById("text")

    Object.assign(obj.style, styles)
}