interface HeadingProp {
  className: string;
}
const Heading = ({ className }: HeadingProp) => {
  return (
    <>
      <h1 className={className}>ToDo List</h1>
    </>
  );
};

export default Heading;
