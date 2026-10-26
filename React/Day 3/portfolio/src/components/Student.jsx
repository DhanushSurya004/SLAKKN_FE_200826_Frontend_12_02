import portrait from "../assets/ds1.jpg";

const Student = () => {
  return (
    <div className="stdcard">
      <img className="student-photo" src={portrait} alt="Dhanush Surya" />
      <div className="student-details">
        <p>Name : Dhanush Surya</p>
        <p>Age : 23</p>
        <p>Department : Computer Applications</p>
        <p>College Name : PSG Tech</p>
        <p>Aspiring software developer</p>
      </div>
    </div>
  );
};

export default Student;
