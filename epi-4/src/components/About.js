import UserClass from "./UserClass";
import User from "./User";

function About(params) {
  return (
    <div className="text-center">
      <h1>React About Page</h1>
      <User name={"Bilal"} />
      <UserClass name={"Basit"} />
    </div>
  );
}

export default About;
