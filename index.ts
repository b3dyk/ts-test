interface FrontEndDev {
  name: string;
  lastName: string;
  phone: number;
  html: boolean;
  css: boolean;
  javascript: boolean;
  react: boolean;
  redux: boolean;
  typescript: boolean | string;
  nodejs: boolean | string;
}

const me: FrontEndDev = {
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

const goIT = <T>(
  arr: T[]
): (T & {
  id: number;
})[] => {
  return arr.map((student, idx) => ({
    ...student,
    id: idx,
    html: true,
    css: true,
    javascript: true,
    react: true,
    redux: true,
    typescript: "pending",
    nodejs: "pending",
  }));
};

console.log(goIT<FrontEndDev>([me]));
