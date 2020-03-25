import React from 'react'

export default function ProjectItem(props) {
  const {name, desc, img, liveProject, github} = props.project;

  return (
    <div className="project">
      <div className="project__img-container">
        <img className="project__img" src={img} alt="project screenshot"/>
      </div>
      <div className="project__group">
        <div className="project__desc">
          <h2 className="section__title">{name}</h2>
          <p className="section__paragraph">{desc}</p>
        </div>
        <div className="project__btns">
        <a href={liveProject}><button className="btn project__btn btn--white-text btn--lightgreen">Live Project</button></a>
        <a href={github}><button className="btn project__btn btn--white-text btn--dark">GitHub</button></a>
        </div>
      </div>
    </div>
  )
}
