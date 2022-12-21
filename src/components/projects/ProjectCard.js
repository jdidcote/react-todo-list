export default function ProjectCard(props) {
  return (
    <div className="border-2 flex-col border-black p-2 rounded-lg my-3">
      <p className="text-center font-bold text-xl">{props.project.title}</p>
    </div>
  );
}
