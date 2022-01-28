(function (global) {
  /**
   * The `gql` function. Runs http requests against to the base url
   * which is provided in the aiware.js' init config.
   *
   * @param {String} query - The gql query string
   * @param {Object} variables - The variables that goes along with the query
   * @returns {Promise}
   */
  function gql(query, variables = {}) {
    if (!query || typeof query !== 'string') {
      throw new Error('Invalid query!');
    }
    if (!variables || typeof variables !== 'object') {
      throw new Error('Variables must be an object!');
    }

    var store = window.aiware.store.getState();
    var authToken = store.auth.sessionToken;
    var gqlEndpoint = store.configs.config.graphEndpoint;

    return fetch(gqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${authToken}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
      .then((res) => res.json())
      .catch((err) => err);
  }

  global.gql = gql;
})(window);
