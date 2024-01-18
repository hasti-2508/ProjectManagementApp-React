import Button from "./Button.jsx";

export default function ProjectsSideBar({
  onStartedAddProject,
  projects,
  onSelectProject,
  selectedProjectId
}) {
  return (
    <aside className="w-1/3 px-7 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={onStartedAddProject}> + Add Project </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          const isProjectSelected = project.id === selectedProjectId;

          const cssClass = {
            'w-full': true,
            'text-left': true,
            'px-2': true,
            'py-1': true,
            'rounded-sm': true,
            'my-1': true,
            'hover:text-stone-200': true,
            'hover:bg-stone-800': true,
            'bg-stone-800': isProjectSelected,
            'text-stone-200': isProjectSelected,
            'text-stone-400': !isProjectSelected
          };

          return (
            <li key={project.id}>
              <button
                className={Object.keys(cssClass).filter((key) => cssClass[key]).join(' ')} //explanation is down
                onClick={() => onSelectProject(project.id)}
                >
                {project.title}
                </button>
                </li>
                /* Object.keys(cssClass):

This part extracts all the keys (property names) from the cssClass object.
For the provided cssClass object, it would be an array like ['w-full', 'text-left', 'px-2', ...].
.filter((key) => cssClass[key]):

The filter function is applied to the array of keys.
It filters out only those keys where the corresponding value in the cssClass object is truthy.
In the context of CSS classes, it keeps only the classes that are set to true.
.join(' '):

The join function concatenates the filtered array of class names into a single string.
Each class name is separated by a space.
This produces a string of CSS classes that can be directly used in the className attribute. */

          );
        })}
      </ul>
    </aside>
  );
}
