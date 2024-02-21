import "./heading.css";

const Heading1 = ({subHeading, headingStart, headingMid, headingLast, position = 'text-left'}) => {
  return (
    <div className="heading-container">
      <h4 className={`${position}`}>{subHeading}</h4>
      <h1 className={`${position}`}>
        {headingStart} <span> {headingMid} </span> {headingLast}
      </h1>
    </div>
  );
};
export default Heading1