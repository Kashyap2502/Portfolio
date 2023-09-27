import "../styles/Education.css";
import Divider from "./Divider";
import Card from "./Card";
import Divider2 from "./Divider2";
const Education = () => {
  return (
    <>
      <div className="edu-main" id="education">
        <h1>Education</h1>

        <Divider />
        <div className="holder">
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYYi1SrtPceMA0zgErMzxjbEUbfjmmCzB7Q&usqp=CAU"
            title="Bachelor's of Technology from Indian Institute of Information
                Technology, Kottayam"
            title2="Course Work"
            description="Data structures and Algorithms, DBMS, Operating System, Computer
                Organization, Computer Networks, Machine Learning, Web
                Development"
            time="2020-2024"
          />
        </div>
      </div>
      <Divider2 />
    </>
  );
};

export default Education;
