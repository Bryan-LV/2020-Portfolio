import React from 'react'

export default function ProjectItem(props) {
  return (
    <div className="project">
      <div className="project__img-container">
        <img className="project__img" src={props.img} alt=""/>
      </div>
      <div className="project__group">
        <div className="project__desc">
          <h2 className="section__title">Project Name</h2>
          <p className="section__paragraph" >Project description lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat magnam error ut reprehenderit doloremque delectus nihil corporis labore aperiam adipisci cupiditate culpa suscipit repellendus, id tempore nam blanditiis ex?</p>
        </div>
        <div className="project__btns">
          <button className="btn project__btn btn--white-text btn--lightgreen">Live Project</button>
          <button className="btn project__btn btn--white-text btn--dark">GitHub</button>
        </div>
      </div>
    </div>
  )
}
