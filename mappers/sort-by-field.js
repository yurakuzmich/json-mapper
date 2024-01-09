function mapper(data, mapperOptions = {field: "external_id"}) {

  const sortedData = data.sort((a, b) => a[mapperOptions.field] - b[mapperOptions.field]);

  return sortedData;
}

module.exports = mapper;