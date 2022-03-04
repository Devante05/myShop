import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/postsRouter");
  },
  // // Gets the post with the given id
  // getPost: function(id) {
  //   return axios.get("/api/postsRouter/" + id);
  // },
  // // Deletes the post with the given id
  // deletePost: function(id) {
  //   return axios.delete("/api/postsRouter/" + id);
  // },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/postsRouter", postData);
  },

    // Gets all users
    // getUsers: function() {
    //   return axios.get("/api/users");
    // },
    // // Gets the post with the given id
    // getPost: function(id) {
    //   return axios.get("/api/postsRouter/" + id);
    // },
    // // Deletes the post with the given id
    // deletePost: function(id) {
    //   return axios.delete("/api/postsRouter/" + id);
    // },
    // Saves a post to the database
    saveUser: function(userData) {
      return axios.post("/api/user", userData);
    }
};
