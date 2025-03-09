let obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};

const flattenObject = (obj, parentKey = '') => {
    let result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                const temp = flattenObject(obj[key], newKey);
                console.log(temp)
                result = { ...result, ...temp };
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
};

console.log(flattenObject(obj));
