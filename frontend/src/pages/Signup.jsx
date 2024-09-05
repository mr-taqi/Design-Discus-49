import signupImg from "../assets/Images/signup.png";
import Template from "../components/core/Auth/Template";

function Signup() {
  return (
    <Template
      title="Start coding for free today with Knowledge Knook, and join millions already learning."
      description1="Build your skills  today, tomorrow, and beyond."
      description2="Education to empower  your career."
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
