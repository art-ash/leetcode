const isValid = s => {
  const stack = [];
  const match = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (match[s[i]]) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();

      if (s[i] !== match[last]) {
        return false;
      }
    }
  }

  return !stack.length;
};

console.log('"(("');
console.warn(isValid("(("));
console.log('"()"');
console.warn(isValid("()"));
console.log('"({})"');
console.warn(isValid("({})"));
console.log('"({[]})"');
console.warn(isValid("({[]})"));
console.log('"({}]"');
console.warn(isValid("({}]"));
console.log('"(){}"');
console.warn(isValid("(){}"));
console.log('"()]["');
console.warn(isValid("()]["));
console.log('"]["');
console.warn(isValid("]["));
console.log('"({{{{}}}))"');
console.warn(isValid("({{{}}))"));
console.log('"(){}}{"');
console.warn(isValid("(){}}{"));
console.log('"([{)"');
console.warn(isValid("([{)"));
console.log('"(([]){})"');
console.warn(isValid("(([]){})"));
