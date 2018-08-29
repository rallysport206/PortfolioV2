import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      // var skillmessage = this.props.data.skillmessage;
      // var education = this.props.data.education.map(function(education){
      //   return <div key={education.school}><h3>{education.school}</h3>
      //   <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      //   <p>{education.description}</p></div>
      // })
      // var work = this.props.data.work.map(function(work){
      //   return <div key={work.company}><h3>{work.company}</h3>
      //       <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      //       <p>{work.description}</p>
      //   </div>
      // })
      var languages = this.props.data.languages.map(function(languages){
        var className = 'bar-expand '+languages.name.toLowerCase();
        return <li key={languages.name}><span style={{width:languages.level}}className={className}></span><em>{languages.name}</em></li> 
      })
      var frameworks = this.props.data.frameworks.map(function(frameworks){
        var className = 'bar-expand '+frameworks.name.toLowerCase();
        return <li key={frameworks.name}><span style={{width:frameworks.level}}className={className}></span><em>{frameworks.name}</em></li>
      })
      var tools = this.props.data.tools.map(function(tools){
        var className = 'bar-expand '+tools.name.toLowerCase();
        return <li key={tools.name}><span style={{width:tools.level}}className={className}></span><em>{tools.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row skill">

         <div className="four columns header-col">
            <h1><span>Languages</span></h1>
            <div class="col-lg-6">
              <ul className="skills">
                {languages}
              </ul>
            </div>
         </div>

         <div className="four columns header-col">
            <h1><span>Frameworks</span></h1>
            <div class="col-lg-6">
              <ul className="skills">
                {frameworks}
              </ul>
            </div>
         </div>

          <div className="four columns header-col">
            <h1><span>Tools & Platforms</span></h1>
            <div class="col-lg-6">
              <ul className="skills">
                {tools}
              </ul>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Resume;
