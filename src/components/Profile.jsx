// import React from 'react'

// eslint-disable-next-line react/prop-types
const Profile = ({setUpdate}) => {
  const experience = [
    {
      role: "Software Engineer",
      company: "ABC Corporation",
      duration: "2022 - Present",
    },
    {
      role: "Product Manager",
      company: "XYZ Inc.",
      duration: "2021 - 2022",
    },
    {
      role: "UI/UX Designer",
      company: "123 Designs",
      duration: "2019 - 2021",
    },
    {
      role: "Data Analyst",
      company: "DataTech Solutions",
      duration: "2018 - 2019",
    },
    {
      role: "Marketing Specialist",
      company: "Digital Marketing Agency",
      duration: "2017 - 2018",
    },
  ];
  const education = [
    {
      institution: "Savitribai Phule Pune University",
      degree: "Master's degree, Computer Applications",
      duration: "2021 - 2023",
    },
    {
      institution: "ABC University",
      degree: "Bachelor's degree, Computer Science",
      duration: "2017 - 2021",
    },
  ];

  const skills = [
    {
      tool: "JavaScript",
      job: "Front-end Development",
    },
    {
      tool: "Python",
      job: "Data Analysis",
    },
    {
      tool: "React",
      job: "UI Development",
    },
    {
      tool: "SQL",
      job: "Database Management",
    },
    {
      tool: "Agile Methodology",
      job: "Project Management",
    },
  ];

  return (
    <div className="d-flex flex-column gap-3">
      {/* Profile Name and detials */}
      <div
        className="d-flex gap-2 justify-content-between border rounded align-items-center p-3"
        style={{ backgroundColor: "#e4f1fe " }}
      >
        <div
          className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center my-0 flex-center"
          style={{ height: "3rem", width: "3rem" }}
        >
          <p className="align-middle my-0">AK</p>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <h6 className="text-sm">Utkarsh Bairagi</h6>
          <span className="text-secondary text-sm">(Experience 2 Years)</span>
          <span className=" text-sm">Kota</span>
          <span className="text-sm">Front-End Developer</span>
        </div>
        <div>
          <button className="bg-primary btn align-items-center text-white">
            Update
          </button>
        </div>
      </div>
      {/* Experience and Education */}
      <div
        className="d-flex flex-column gap-3 justify-content-between border rounded  p-3 "
        style={{ backgroundColor: "#e4f1fe " }}
      >
        <h5>Experience</h5>
        {experience.map((exp, id) => {
          return (
            <div key={id} className="d-flex gap-4">
              <img src="/Group 32.png" width={40} height={40} />
              <div className="d-flex flex-column">
                <h6>{exp.role}</h6>
                <span>{exp.company}</span>
                <span>{exp.duration}</span>
              </div>
            </div>
          );
        })}
        <h5>Education</h5>
        {education.map((edu, id) => {
          return (
            <div key={id} className="d-flex gap-4">
              <img src="/Group 32.png" width={40} height={40} />
              <div className="d-flex flex-column">
                <h6>{edu.institution}</h6>
                <span>{edu.degree}</span>
                <span>{edu.duration}</span>
              </div>
            </div>
          );
        })}
        <h5>Skills</h5>
        {skills.map((skill, id) => {
          return (
            <div key={id} className="d-flex gap-4">
              <img src="/Group 32.png" width={40} height={40} />
              <div className="d-flex flex-column">
                <h6>{skill.tool}</h6>
                <span>{skill.job}</span>
                {/* <span>{edu.duration}</span> */}
              </div>
            </div>
          );
        })}
        <div className="text-center">
          <button className="bg-primary text-white btn" onClick={
            () => setUpdate(true)}>Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
