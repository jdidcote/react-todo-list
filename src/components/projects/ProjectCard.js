export default function ProjectCard(props) {
  const handleClick = (e) => {
    props.setSelectedProject(props.project.id);
    props.setSelectedTab("todos");
  };
  return (
    <div className="border-2 flex flex-row justify-evenly border-black p-2 rounded-lg my-3">
      <p className="text-center font-bold text-xl m-auto">
        {props.project.title}
      </p>
      <button className="rounded-lg bg-grey-300 p-2" onClick={handleClick}>
        To-dos
      </button>
    </div>
  );
}
