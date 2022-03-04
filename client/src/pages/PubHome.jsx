import Jumbotron from "../components/Jumbotron"
import Header from "../components/Header"
import PostGrid from "../components/PostGrid"
import Footer from "../components/Footer"
import {Col, Row} from 'react-bootstrap'
import "./PubHome.css"
import { useAuth } from "../utils/AuthContext";


const PubHome = () => {


const auth = useAuth();
const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
  console.log("this is " + user.email);
} else {
  // No user is signed in.
  console.log("no user");
}

   

    return (
        <div>
            
            <Header/>
            <Jumbotron/>
            <div>Please login or signup to make a post</div>
            <Row className = "rowDiv">
              <Col>
              <div className={`col-12 mb-3 `}>
              <PostGrid  title="plant posts" />
              </div>
              </Col>

            </Row>
            <Footer/>
            
        </div>
    )
}

export default PubHome;