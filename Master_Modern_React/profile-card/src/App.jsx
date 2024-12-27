const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "lightgreen",
  },
  {
    skill: "React",
    level: "beginner",
    color: "lightblue",
  },
  {
    skill: "Git",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "yellow",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="./src/assets/profile.jpg"
      alt="Virag Kormoczy"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Virag Kormoczy</h1>
      <p>
        Full-stack web developer. I love coding and learning new things every
        day.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} emoji="" />
      ))}
    </div>
  );
}

function Skill({ skillObj, emoji }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

export default App;
