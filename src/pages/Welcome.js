import { Route, useParams } from "react-router";

const Welcome = () => {
  let params = useParams();
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/:newUser">
        <p>Welcome new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
