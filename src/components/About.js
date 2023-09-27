import Divider from "./Divider";
import "../styles/About.css";
import Divider2 from "./Divider2";
const About = () => {
  return (
    <div className="about-main" id="About">
      <h1>Hands-On AI/ML & Web Development Expertise</h1>
      <Divider />

      <div className="content">
        <div className="text">
          <li>
            I'm a student at Indian Institute of Information Technology
            Kottayam. I really enjoy working with computers and solving problems
          </li>
          <li>
            I have good understanding on Data Structures and Algorithms, which
            is like the building blocks of computer programs. I love using these
            skills to come up with smart solutions to different problems
          </li>
          <li>
            I'm also interested in Artificial Intelligence (AI) and Machine
            Learning (ML). These are cool technologies that let computers learn
            and make decisions on their own. It's like teaching them to be
            smart!
          </li>
          <li>
            Apart from that, I like making websites and web apps. It's fun to
            create things that people can use on the internet
          </li>
          <li>
            I'm always eager to learn new things and make the tech world better
          </li>
          <button className="about-btn">View Resume</button>
        </div>
        <div className="skills">
          <h3>Languages</h3>
          <p>C, C++, Java, Python, Javascript, HTML/CSS</p>
          <h3>Frameworks & Libraries</h3>
          <p>
            Pytorch, Tensorflow, OpenCV, NLTK, Mediapipe, Captum, Sklearn, React
            js, Node js, Express js
          </p>
          <h3>DataBase</h3>
          <p>MySQL, MongoDB, FireBase</p>
          <h3>Tools</h3>
          <p>Github, Git, Bash</p>
        </div>
      </div>
      <Divider2 />
    </div>
  );
};
export default About;
