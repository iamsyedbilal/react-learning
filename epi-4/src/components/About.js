import UserClass from "./UserClass";
import User from "./User";

function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        ℹ️ React About Page
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <User name={"Bilal"} />
        <UserClass name={"Basit"} />
      </div>
    </div>
  );
}

export default About;
