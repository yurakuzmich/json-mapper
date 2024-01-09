function mapper(data, mapperOptions = {}) {
  const seenIds = new Set();
  const repeatedIds = [];

  data.forEach(item => {
    if (seenIds.has(item.external_id)) {
      repeatedIds.push(item.external_id);
    } else {
      seenIds.add(item.external_id);
    }
  });

  const idsArray = Array.from(seenIds).sort((a,b) => a-b);
  console.log('idsArray is: ', idsArray[0], '.....', idsArray[idsArray.length-1]);

  const result = {
    productsTotal: data.length,
    idsTotal: seenIds.size,
    repeatedIdsTotal: repeatedIds.length,
    repeatedIds: repeatedIds,
    theLastExternalId: idsArray[idsArray.length-1],
  };

  return result;
}

module.exports = mapper;