/* eslint-disable react/prop-types */
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
        <Skill key={skill.skill} skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
