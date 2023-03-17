// Arr where the info about the books are stored
let library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    { author: "Suzanne Collins", title: "Mockingjay", libraryID: 3245 },
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 }
];

function giveBookByID(arr){
    return arr.filter(element => element.libraryID == 1254)  // This just filters through each element in the arr and makes a different arr
                                                             // with the books that contain the 1254 ID (added 2 to test if functions correctly)
}

// Test
console.log(giveBookByID(library));