import Divider from "./Divider";
import "../styles/Internship.css";
import Card from "./Card";
import Intern_data from "./Intern_data";
import Divider2 from "./Divider2";
const Internship = () => {
  const cards = Intern_data.map((x) => {
    return <Card {...x} />;
  });
  return (
    <>
      <div className="int-main" id="internships">
        <h1>Internships</h1>

        <Divider />
        <div className="holder">{cards}</div>
      </div>
      <Divider2 />
    </>
  );
};
export default Internship;
