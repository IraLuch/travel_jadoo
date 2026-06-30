export const CustomLink = (props: any) => {
  const isActive = props.activeSection == props.section;
  return (
    <a
      className={`content-center cursor-pointer
    ${isActive ? "drop-shadow" : ""}`}
      onClick={() => props.handleClick(props.section)}
    >
      {props.children}
    </a>
  );
};