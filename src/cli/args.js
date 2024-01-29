const parseArgs = () => {
  const pairs = []
  
  process.argv.slice(2).forEach((arg) => {
    if(arg.startsWith('--')) {
      pairs.push({key: arg.slice(2), value: null}) // because there can be no value associated with key
    } else if(pairs.length) {
      pairs[pairs.length - 1].value = arg // add value to previous key
    }
  })
  
  // finally print
  console.log(pairs.map(({key, value}) => `${key} is ${value}`).join(', '));
};

parseArgs();