const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArgs) => {
    for (let i = 0; i < profileDataArgs.length; i++) {
        console.log(profileDataArgs[i]);
    }

    console.log('================')

    profileDataArgs.forEach((profileItem) => {
        console.log(profileItem)
    });
};


printProfileData(profileDataArgs);