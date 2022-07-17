import axios from "axios";

let base_url = "http://hn.algolia.com/api/v1";

const search_post = async ({ query }) => {
  let response = axios.get(`${base_url}/search`, {
    params: { query: query },
  });
  return response;
};

const get_post_by_id = async ({ id }) => {
  let response = axios.get(`${base_url}/items/${id}`);
  return response;
};

export { search_post, get_post_by_id };
