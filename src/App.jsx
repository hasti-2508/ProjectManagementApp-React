import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import SelectedProject from "./SelectedProject.jsx";



function App() {

  const[projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    
    setProjectState(prevState => { 
    const taskId = Math.random()
    const newTask = {
      text: text,
      ProjectId: prevState.selectedProjectId,
      id: taskId
    }           
      return {
        ...prevState,   
        tasks:[newTask,...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }


  function handleSelectProject(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
      });
  }
  
  function handleStartAddProject(){
    setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: null
    }
    });
  };
  function handleCancelAddProject(){
    setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined
    }
    });
  };

  function handleDeleteProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  function handleProject(projectData){
    const projectId = Math.random()
    const newProject = {
      ...projectData,
      id: projectId
    }
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId,
        projects:[...prevState.projects,newProject]
      }
    })
  }
  console.log(projectState)
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let content = <SelectedProject 
                        project={selectedProject} 
                        onDelete={handleDeleteProject} 
                        onAddTask={handleAddTask}
                        onDeleteTask={handleDeleteTask}
                        tasks={projectState.tasks}/>;
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartedAddProject = {handleStartAddProject}/>
  } 

  return (
    <main className="h-screen flex gap-8 mt-8">
      <ProjectsSideBar onStartedAddProject={handleStartAddProject} 
      projects = {projectState.projects}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
 