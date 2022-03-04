import React, { useEffect } from "react";
import API from "../utils/API";
import {Card, Container, Row } from 'react-bootstrap'
import {useStoreContext} from "../utils/GlobalState"
import {GET_POSTS } from "../utils/actions";
import "./PostGrid.css"


const PostGrid = () => {
  const [state, dispatch] = useStoreContext();

  // const removePost = id => {
  //   API.deletePost(id)
  //     .then(() => {
  //       dispatch({
  //         type: REMOVE_POST,
  //         _id: id
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  const getPosts = async () => {
    try {
      const response = await API.getPosts();

      dispatch({
        type: GET_POSTS,
        posts: response.data
      });

    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);


    return (
      <Container>
        <Row xl = {4} className="justify-content-md-center">
          {state.posts.map(post => (
            <Card id = "cardGrid"  key={post._id}>
              <Card.Body>
              <Card.Img id = "cardImg" variant="top" src = {post.image} ></Card.Img>

                <Card.Title>{post.plantName}</Card.Title>
                <p>Posted on: {post.date}</p>
                <p>Location: {post.location}</p>
                <p>${post.cost}</p>
                <p>Posted by: {post.username}</p>
                  <Card.Text>Description: {post.description} </Card.Text>
              </Card.Body>
            </Card>
          ))
          }
        </Row>
        
      </Container>

    )
  }


export default PostGrid
