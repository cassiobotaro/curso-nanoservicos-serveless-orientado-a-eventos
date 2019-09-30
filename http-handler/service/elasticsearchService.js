const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  apiVersion: '6.8',
  host: 'https://vpc-elasticsearch-cluster-rax2ke7fjaeglwjgwte4x4melu.us-east-2.es.amazonaws.com'
});

const search = async query => {
    return await client.search({
        index: 'imagens',
        q: 'tags:' + query
    });
}

module.exports = {
    search: search
}