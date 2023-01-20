import "./Sections.scss";
const Sections = (props) => {
  return (
    <div>
      <div ref={props.home} className="home">
      </div>
      <div ref={props.countries} className="countries">
      <h3>Countries</h3>
      </div>
      <div ref={props.about} className="about">
        <h3>about</h3>
      </div>
      <div ref={props.contact} className="contact">
        <h3>Contact</h3>
      </div>
    </div>
  )
}

export default Sections