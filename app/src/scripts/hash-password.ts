import {hash} from "bcryptjs";

const password = process.argv[2];
hash(password, 10).then((h) => console.log(h));