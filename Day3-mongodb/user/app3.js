const fs = require("fs")

const addUser = (message) => {
    fs.writeFile(
        './users.txt',
        `${message}\n`,
        { flag: 'a' },
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this user');
        }
    );
};