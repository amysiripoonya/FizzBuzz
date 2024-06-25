function main() {
    for (let i = 1; i <= 255; i++) {

        const intermediate = reverse(17, i,
            insert(13, "Fezz", i,
                replace(11, "Bong", i,
                    append(7, "Bang", i, fizzbuzz(i)))));

        let result: string;
        if (intermediate.length === 0) {
            result = i.toString();
        } else {
            result = intermediate.join("");
        }
        console.log(result);
    }
}



function fizzbuzz(i: number) : string[] {
    let out = [];

    if (i % 3 == 0) {
		out = ["Fizz"];
	}

    if (i % 5 == 0) {
        out.push("Buzz");
    }

    return out;
}

function append(multof: number, rep: string, i: number, inp: string[]) : string[] {
    if (i % multof == 0) {
        if (inp.length !== 0) {inp.push(rep);} else {inp = [rep];}
    }
    return inp;
}

function replace(multof: number, rep: string, i: number, inp: string[]): string[] {
    if (i % multof == 0) {
        inp = [rep];
    } 
    return inp;
}

function insert(multof: number, rep: string, i: number, inp: string[]): string[] {
    if (i % multof == 0) {
        // if (inp.length !== 0) {
        //     inp = [rep];
        // } else {
        //     if (inp.includes("B")) {
        //         let ind = inp.indexOf("B");
        //         inp = `${inp.slice(0,ind)} ${rep} ${inp.slice(ind, inp.length)}`;
        //     } else {
        //         inp += rep;
        //     }
        // }
        let ind = inp.indexOf(inp.find(s => s.startsWith("B")));
        if (ind === -1) {
            inp.push(rep);
        } else {
            const first = inp.slice(0, ind);
            first.push(rep);
            const second = inp.slice(ind, inp.length);
            inp = first.concat(second);
        }
    } 

    return inp;
}

function reverse(multof: number, i: number, inp: string[]): string[] {
    if (i % multof == 0) {
        inp.reverse();
    }

    return inp;

}

main();