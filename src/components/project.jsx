import projects  from '../data/projects.json';

export function Project({ name, description, url }) {
  return <>
    <div className='project-header'>
      <h4>{name}</h4>
      <a href={url}>View Project</a>
    </div>
    <p className='project-description'>{description}</p>
  </>
}

export default function ListProjects() {
  return <>
    <section>
      <h3>
        Projects
      </h3>
      <div>
        {
          Object.entries(projects).map(([name, details]) => <Project key={name} name={name} description={details.description} url={details.url} />)
        }
      </div>
    </section>
  </>
}