console.log("do something");
for (let i = 1; i <= 255; i++) {
    
    let out = fb(i);
    out = append(7, "Bang", i, out);
    out = replace(11, "Bong", i, out);
    out = insert(13, "Fezz", i, out);
    out = reverse(17, i, out);

    out = out.replace(/\s/g,'');

    if (out == "") {
        out = i.toString();
    }
    console.log(out);
}

function fb(i: number) : string {
    let out = "";

    if (i % 3 == 0) {
		out = " Fizz";
	}

    if (i % 5 == 0) {
        out += " Buzz";
    }

    
    return out;
}

function append(cond: number, rep: string, i: number, inp: string) : string {
    if (i % cond == 0) {
        if (inp != "") {inp += " " + rep;} else {inp = rep;}
    }
    return inp;
}

function replace(cond: number, rep: string, i: number, inp: string) {
    if (i % cond == 0) {
        inp = rep;
    } 
    return inp;
}

function insert(cond: number, rep: string, i: number, inp: string) {
    if (i % cond == 0) {
        if (inp == i.toString()) {
            inp = rep;
        } else {
            if (inp.includes("B")) {
                let ind = inp.indexOf("B");
                inp = inp.slice(0,ind) + " " + rep + " " + inp.slice(ind, inp.length);
            } else {
                inp += rep;
            }
        }
    } 

    return inp;
}

function reverse(cond: number, i: number, inp: string) {
    if (i % cond == 0) {
        let arr = inp.split(" ");
        arr = arr.reverse();
        inp = arr.join("");
    }

    return inp;

}



