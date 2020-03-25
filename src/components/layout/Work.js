import React from 'react';
import Img from '../../imgs/space.jpg';
import ProjectItem from '../items/ProjectItem';
import latinosrock from '../../imgs/latinosrock.png';
import statusfeed from '../../imgs/statusfeed.png';

export default function Work(props) {

  const projects = () => {
    const projectNum = [
      { name: `Latino's Rock`,
        desc: `E-Commerce store using Wordpress. The biggest challenged I faced was the logistics of the sale. The company wanted to keep their costs low without having to eat much of the costs of shipping. In the end I was able to create a solution that solved the clients needs. Shoppers in the far east coast had to a higher shipping rate while shoppers in more central and west coast had very little costs.`,
        img: latinosrock,
        github: null,
        liveProject: `https://latinosrockshop.com`
      },
      {
        name:`Status Feed`,
        desc:`Built using React on the front end and Node/Express REST api on the back with MongoDB as the database. Authentication using json web tokens. I built this app to challenge myself, I wanted to know how authentication works, how to implement it in a project.`,
        img: statusfeed,
        liveProject: `https://still-meadow-46904.herokuapp.com/`,
        github: `https://github.com/Bryan-LV/Status-Feed`
      }];
    const projectList = projectNum.map(project => <ProjectItem project={project}/>);
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
