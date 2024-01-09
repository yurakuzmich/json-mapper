function mapper(data, mapperOptions = {}) {
  const mappedData = data.map(product => {
		return {
			title: product.title,
			external_id: product.external_id,
		};
	});
	
	mappedData.sort((a, b) => a.external_id - b.external_id);

	return mappedData;
}

module.exports = mapper;