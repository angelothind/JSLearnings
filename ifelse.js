const siblingCompare = (sibling1name, sibling1age, sibling2name, sibling2age) => {
    if (sibling1age > sibling2age) {
        return `${sibling1name} is older than ${sibling2name}`;
    } else if (sibling1age < sibling2age) {
        return `${sibling1name} is younger than ${sibling2name}`;
    } 
        return `${sibling1name} and ${sibling2name} are the same age`;
}



const siblingCompareWObjects = (sibling1, sibling2) => {
    return sibling1.age > sibling2.age ? `${sibling1.name} is older than ${sibling2.name}` : `${sibling1.name} is younger than ${sibling2.name}`;

}

console.log(siblingCompareWObjects({name: 'Millie', age : 21}, {name: 'Frankie', age : 24}));

const ternaryPractice = (temperature, threshold) => { return temperature > threshold ? `Heatwave` : `Normal` }

console.log(ternaryPractice(30, 20));
