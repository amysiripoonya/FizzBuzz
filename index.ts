console.log("do something");
for (let i = 1; i <= 100; i++) {
    
    let out = fb(i);
    
    // if (i % 7 == 0) {
    //     if (out != i.toString()) {out += "Bang";} else {out = "Bang";}
    // } 

    // if (i % 11 == 0) {
    //     out = "Bong";
    // } 

    // if (i % 13 == 0) {
    //     if (out == i.toString()) {
    //         out = "Fezz";
    //     } else {
    //         if (out.includes("B")) {
    //             let ind = out.indexOf("B");
    //             out = out.slice(0,ind) + "Fezz" + out.slice(ind, out.length);
    //         } else {
    //             out += "Fezz";
    //         }
    //     }
    // } 



    
    console.log(out);
}

function fb(i: number) : string {
    let out = "";

    if (i % 3 == 0) {
		out = "Fizz";
	}

    if (i % 5 == 0) {
        out += "Buzz";
    }

    if (out == "") {
        out = i.toString();
    }
    return out;
}