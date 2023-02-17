const me = {
    name: "Oleksandr",
    lastName: "Perlov",
    phone: +380978798925,
    html: false,
    css: false,
    javascript: false,
    react: false,
    redux: false,
    typescript: false,
    nodejs: false,
};
const goIT = (arr) => {
    return arr.map((student, idx) => (Object.assign(Object.assign({}, student), { id: idx, html: true, css: true, javascript: true, react: true, redux: true, typescript: "pending", nodejs: "pending" })));
};
console.log(goIT([me]));
//# sourceMappingURL=index.js.map