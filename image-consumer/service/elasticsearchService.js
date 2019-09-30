const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  apiVersion: '6.8',
  host: 'https://vpc-elasticsearch-cluster-rax2ke7fjaeglwjgwte4x4melu.us-east-2.es.amazonaws.com'
});

const index = async documento => {
    await client.index({
        index: 'imagens',
        type: 'object',
        body: documento
    });
}

module.exports = {
    index: index
}