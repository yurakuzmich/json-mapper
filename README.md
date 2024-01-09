# json-mapper

# Usage
1. run: node map-json.js pathToFile nameOfMapper optionsJSON
For example: node .\map-json.js .\data\catalog.products.json select-fields '{"fields": ["_id","title", "price", "external_id"]}' - this will take file '.\data\catalog.products.json'. This file will be mapped with mapper exported from the './mappers/select-fields.js' file. This mapper will receive data from json and this json '{"fields": ["_id","title", "price", "external_id"]}' as arguments.

2. Mappers are functions exported from ./mappers. For each mapper use a file, named 'mapper-name'.js  where 'mapper-name' will be used as a command-line parameter
For example: sort-by-fields.js, select-fields.js

3. Result will be put in './output/mapper-name.json' where mapper-name is the name of mapper
