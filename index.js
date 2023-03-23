

function introduction(name) {
    console.log(`Hi, my name is ${name}.`) ;
    return `Hi, my name is ${name}.` ;
}
console.log(introduction("Roscoe"));

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`) ;
    return `Hi, my name is ${name} and I am learning to program in ${language}.` ;
}
console.log(introductionWithLanguage("Roscoe", "JavaScript")) ;

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`) ;
    return `Hi, my name is ${name} and I am learning to program in ${language}.` ;
}
console.log(introductionWithLanguage("Roscoe", "JavaScript")) ;
