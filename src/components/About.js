import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <h3>This is About us SEction.</h3>
      <User />
      <UserClass name={"abc (class)"} location={"Dehradun"} />
    </>
  );
};

export default About;
