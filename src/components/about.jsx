export function About() {
  const technologies = [
    'NodeJS',
    '.NET',
    'ASP.NET',
    'NestJS',
    'Typescript',
    'Javascript',
    'C#',
    'ExpressJS',
    'TypeORM',
    'EntityFramework',
    'REST-ful API',
    'PostgreSql',
    'SQL Server',
    'SQL',
    'MySQL',
    'MongoDB',
    'RabbitMQ',
    'Kafka',
    'Redis',
    'BullMQ',
    'Debezium',
    'CDC',
    'ETL',
    'AWS',
    'Kubernetes',
    'Docker',
    'Docker Compose',
    'C/C++'
  ];
  return <>
    <section>
      <article className="bio">
        <h3>About Me</h3>
        <p>
        Hello, I’m Redhouane <span>(/rə-ˈdwɑːn/)</span>. I’m a software engineer with a degree from Tomsk State University. My work focuses on crafting reliable, scalable software systems that solve real-world problems. I enjoy learning new technologies, refining my skills, and contributing to meaningful projects. Outside of work, I’m always curious about exploring new ideas and improving my approach to software development.
        </p>
      </article>
      <article>
        <h3>Technologies</h3>
        <p className="tech-list">
          {
            technologies.map((tech, index) => <span key={index}>{tech}</span>)
          }
        </p>
      </article>
    </section>
  </>
}