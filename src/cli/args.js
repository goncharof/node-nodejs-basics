const parseArgs = () => {
  const pairs = []
  
  process.argv.slice(2).forEach((arg) => {
    if(arg.startsWith('--')) {
      pairs.push({key: arg.slice(2), value: null})
    } else if(pairs.length) {
      pairs[pairs.length - 1].value = arg
    }
  })
  
  console.log(pairs.map(({key, value}) => `${key} is ${value}`).join(', '));
};

parseArgs();