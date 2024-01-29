const parseEnv = () => {
  const pairs = []
  for(const [key, value] of Object.entries(process.env)) {
    if(key.startsWith('RSS_')) pairs.push(`${key}=${value}`);
  }

  console.log(pairs.join('; '));
};

parseEnv();