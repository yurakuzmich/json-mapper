function mapper(data, mapperOptions = {}) {
  
  const mappedData = data.map(product => {
    const mappedProduct = {};
    mapperOptions.fields.forEach(field => {
      mappedProduct[field] = product[field];
    });

    return mappedProduct
  });

  return mappedData;
}

module.exports = mapper;