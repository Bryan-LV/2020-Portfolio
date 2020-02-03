import React from 'react';
import Img from '../../imgs/space.jpg';
import ProjectItem from '../items/ProjectItem';

export default function Work(props) {

  const projects = () => {
    const projectNum = [1,2,3];
    const projectList = projectNum.map(project => <ProjectItem img={Img}/>);
    return projectList;
  }

  return (
    <section className="section section--padding" id="work">
      <h1 className="section__title section__title--big section__title--underline-dark">My Work</h1>
      <h3 className="section__subtitle section--box section--code section--darkgreen work__subtitle--padding work__subtitle--margin">A selection of my best projects, all with their own set of challenges</h3>
      {projects()}
    </section>
  )
}
