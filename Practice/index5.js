let getRobotsHeader = new XMLHttpRequest();
// HEADER
getRobotsHeader.open("GET", "https://jsonplaceholder.typicode.com/posts/1")

getRobotsHeader.onload = function() {
    console.log(getRobotsHeader);
    let res = getRobotsHeader.responseText
    console.log(res);
    document.getElementById("header01").innerHTML = res
}

getRobotsHeader.send()

// function getXML() {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//       // What is supposed to happen when the response arrives
//       console.log(xhttp);
//       let xml = xhttp.responseXML;
//       let booksByGenre = xml.getElementsByTagName("book")[0]
//       document.getElementById("main01").innerHTML =
//         "<tr><th>Title</th></tr><tr><td>" +
//         booksByGenre.getElementsByClassName("children")[0]
//         "</td></tr>";
//     };
//     xhttp.open("GET", "./example1.xml");
//     xhttp.send();
//   }

// getXML()

// MAIN

function getXML() {
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      // What is supposed to happen when the response arrives
      console.log(xhttp);
      let xml = xhttp.responseXML;
      let books = xml.getElementsByTagName("book");
      let tableRows = "";
      for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let title = book.getElementsByTagName("title")[0].textContent;
        let author = book.getElementsByTagName("author")[0].textContent;
        let year = book.getElementsByTagName("year")[0].textContent;
        let price = book.getElementsByTagName("price")[0].textContent;
        tableRows += "<tr><td>" + title + "</td><td>" + author + "</td><td>" + year + "</td><td>" + price + "</td></tr>";
      }
      document.getElementById("main01").innerHTML =
        "<tr><th>Title</th><th>Author</th><th>Year</th><th>Price</th></tr>" + tableRows;
    };
    xhttp.open("GET", "./example1.xml");
    xhttp.send();
  }
  
  getXML();
  

// FOOTER
let getFooterTxt = new XMLHttpRequest();

getFooterTxt.open("GET", "./text.txt")

getFooterTxt.onload = function() {
    let res2 = getFooterTxt.responseText
    document.getElementById("footer01").innerHTML = res2
}

getFooterTxt.send()