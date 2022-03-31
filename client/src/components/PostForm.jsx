import React, { useRef, useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { ADD_POST, LOADING } from "../utils/actions";
import {Container, Button, Form } from 'react-bootstrap';
import { useAuth } from "../utils/AuthContext";
import "./PostForm.css"



const TheForm = () => {

  const userRef = useRef();
  const plantNameRef = useRef();
  const locationRef = useRef();
  const costRef = useRef();
  const descriptionRef = useRef();
  const [state, dispatch] = useStoreContext();
  const fileInput = useRef(null);
  // const imageRef = useRef();
  const [emailState, setEmailState] = useState("defualt value");
  // const [photoState, setPhotoState] = useState()
  const [photoUrlState, setPhotoUrlState] = useState();
  
  //pulling email from firebase
  // const auth = useAuth();
  // const user = auth.currentUser;
  // const email = user.email.toString();



  

  const authSetUser = () => {

    const request = window.indexedDB.open("firebaseLocalStorageDb", 1);

    // Opens a transaction, accesses the objectStore and statusIndex.
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(["firebaseLocalStorage"], "readwrite");
      const userStore = transaction.objectStore("firebaseLocalStorage");
  
      // Return an item by keyPath
      const getRequest = userStore.getAll();
      getRequest.onsuccess = () => {
        console.log(getRequest.result[0].value);
      };
  
  
    };
  }









  const handleImageUpload = (e) => {
    e.preventDefault();
    // setEmailState({email});

    const data =  new FormData();
    data.append('image', fileInput.current.files[0]);

    const postImage = async () => {
      try {
        const res = await fetch('/api/photo-upload', {
        mode: 'cors',
        method: 'POST',
        body: data
      })

      if (!res.ok) throw new Error(res.statusText);
        const postResponse = await res.json();
        setPhotoUrlState({image: postResponse.Location})
        return postResponse.Location;
  
      } 
        catch (error) {
        console.log(error);
      }
    };
    postImage();

  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!photoUrlState.image){
        window.alert("NO IMAGE UPLOADED. PLEASE UPLOAD IMAGE")
        return
      }
      if(photoUrlState.image){
        dispatch({ type: LOADING });
      try {
        const response = await API.savePost({
          username: userRef.current.value,
          plantName: plantNameRef.current.value,
          location: locationRef.current.value,
          cost: costRef.current.value,
          description: descriptionRef.current.value,
          image: photoUrlState.image,
          email: emailState.email,
          date: Date.now()
          
        })
      dispatch({type: ADD_POST, post: response.data});
        console.log({state})
      // Clear out form
      userRef.current.value = "";
      plantNameRef.current.value = "";
      locationRef.current.value = "";
      costRef.current.value = "";
      descriptionRef.current.value = "";    
      fileInput.current.value = "";
      photoUrlState.image = "";
      emailState.email = "";
      
      } 
      catch(error) {
        console.log(error);
      }
      
      } 
      
    };



    return (
      <Container>
                <Form className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleSubmit}>
        <Form.Group id = "labeling">
            <Form.Label >{process.env.REACT_APP_API_KEY}</Form.Label>
            <Form.Control
            required
            ref = {userRef}
            placeholder = "GreenTree7"
            />
            
        </Form.Group>
        <Form.Group id = "labeling" >
            <Form.Label>Plant Name</Form.Label>
            <Form.Control 
            required
            ref = {plantNameRef}
            placeholder="Eastern Redbud"
             />
            
        </Form.Group>
        <Form.Group id = "labeling" >
            <Form.Label>Location</Form.Label>
            <Form.Control
            required
            ref = {locationRef}
            placeholder="Austin"
             />
            
        </Form.Group>
        <Form.Group id = "labeling">
            <Form.Label>Plant/Seed Cost</Form.Label>
            <Form.Control
            required
            ref = {costRef}
            placeholder="$500"
             />
            
        </Form.Group>
        <Form.Group id = "labeling">
            <Form.Label>Description</Form.Label>
            <Form.Control
            required
            ref = {descriptionRef}
            placeholder="Describe your plant"
             />
            
        </Form.Group>
        
        <Form.Group>
        <label className="form-input col-12  p-1">
            Add an image of your plant: 
            <input
              type="file"
              ref={fileInput}
              className="form-input p-2"
            />
          </label>
          <Button id = "formBtn" className="btn" 
              onClick={handleImageUpload} 
              type="submit" >
            Upload Photo
        </Button >
        </Form.Group>

        
        <Button id = "formBtn" className="btn-success" type="submit" >
            Submit
        </Button >
        </Form>
      </Container>
        
    )
}
export default TheForm
