import newsReader from "../images/newsReader.jpg";
import X_AI from "../images/X_AI.jpg";
import autohire from "../images/autohire.jpg";
import celeb from "../images/celeb.jpg";
const Project_data = [
  {
    type: "project",
    image: celeb,
    title: "Closest Celebrity Match",
    title2: "Work Done",
    description:
      "A real time AI tool that finds the celebrity whose face matches best with the user based on face encodings ",
    time: "2022 Aug",
  },
  {
    type: "project",
    image: newsReader,
    title: "AI Generated News Reader System",
    title2: "Work Done",
    description:
      "An AI tool that facilitates the creation of artificial news reading videos from textual inputs.",
    time: "2022 Oct",
  },
  {
    type: "project",
    image: X_AI,
    title: "EXPLAINABLE AI INTEGRATION IN AUTONOMOUS DRIVING",
    title2: "Work Done",
    description:
      "Refined a fine-tuned Fasterrcnn model for accurate object detection, complemented by the application of various post-hoc techniques to achieve interpretability",
    time: "2023 Feb",
  },
  {
    type: "project",
    image: autohire,
    title: "Auto Hire",
    title2: "Work Done",
    description:
      "A web app featuring an AI-powered interview system with GPT-3.5 turbo support",
    time: "2023 Aug",
  },
];

export default Project_data;
