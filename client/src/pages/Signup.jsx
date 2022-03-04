import React, { useRef, useState,  } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../utils/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { useStoreContext } from "../utils/GlobalState"
import API from "../utils/API";


import "./Signup.css"
import { ADD_USER } from "../utils/actions"


const Signup = () => {
  const [state, dispatch] = useStoreContext();
  const emailRef = useRef()
  const userNameRef = useRef();
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      
      await signup(emailRef.current.value, passwordRef.current.value)
      const response = await API.saveUser({
        email: emailRef.current.value,
        userName: userNameRef.current.value,
        lastLoginDate: Date.now()
      })
      console.log(response)
      dispatch({type: ADD_USER, user: response.data});
      //document.location is to redirect upon login to the authd home page
      document.location.replace("/")
      // history.push("/")
    } catch {
      setError("Failed to create an account")
    }
  

    setLoading(false)
  }

  return (
    <div className = "divContainer" >
      <Card >
        <Card.Body >
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form   onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="userName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="userName" ref={userNameRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}

export default Signup