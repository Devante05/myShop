// import Jumbotron from "../components/Jumbotron"
import Header from "../components/Header"
import PostGrid from "../components/PostGrid"
import PostForm from "../components/PostForm"
import Footer from "../components/Footer"
import {Col, Row, Container} from 'react-bootstrap'
import "./Home.css"
import { useAuth } from "../utils/AuthContext";


const Home = () => {


// const auth = useAuth();
// const user = auth.currentUser;


// if (user) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/firebase.User
//   // ...
//   console.log("this is HOME " + user.email);
// } else {
//   // No user is signed in.
//   console.log("no user");
// }


    return (
        <Container>
            <Header/>
            {/* <Jumbotron/> */}
            <Row className = "rowDiv">
              <Col lg = {3}>
              <PostForm/>
              </Col>
              
              <Col>
              <div className={`col-12 mb-3 `}>
              <PostGrid  title="plant posts" />
              </div>
              </Col>

            </Row>
            <Footer/>
            
            </Container>
    )
}

export default Home;