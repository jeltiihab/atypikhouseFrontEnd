import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Router from "next/router";

import AppButton from '../../src/components/Buttons/Buttons';
import styles from './AddProperties.module.css';
import buttonStyle from '../../src/components/Buttons/Buttons.module.css';
import EquipementAddProperties from '../../src/components/EquipementsAddProperties/EquipementAddProperties';
import TypeProperties from '../../src/components/TypeProperties/TypeProperties';
import AdressAddProperties from '../../src/components/AdressAddProperties/AdressAddProperties';
import DownloadImage from '../../src/components/DownloadImage/DownloadImage';
import FiveImageDownload from '../../src/components/DownloadImage/FiveImageDownload/FiveImageDownload';
import DynamicQuestionAddProperties from '../../src/components/DynamicQuestionAddProperties/DynamicQuestionAddProperties';
import StartAddProperties from '../../src/components/StartAddProperties/StartAddProperties';



const data = [
  {
    question: "Quel est le type de logement ? ",
    page: <TypeProperties />
  },
  {
    question: "Quel est l'adresse de votre BIEN ?",
    page: <AdressAddProperties />
  },
  {
    question: "Quels sont les équipements de votre Propriété ?",
    page: <EquipementAddProperties />
  },
  {
    question: "Veuillez mettre vos photos pour ce BIEN ?",
    page: <FiveImageDownload />
  }
];


class AddProperties extends React.Component {
  state = {
    projects: [],
    activeProject: "",
    modalQuestion: "",
    modalPage: ""
  };

  componentDidMount() {
    this.setState({ projects: data });
  }

  handleModalOpen = (idx) => {
    this.setState({
      activeProject: idx,
      modalQuestion: this.state.projects[idx].question,
      modalPage: this.state.projects[idx].page
    });
  };

  handleModalClose = () => {
    this.setState({
      activeProject: ""
    });
  };

  handleNextProject = () => {
    var arr = this.state.projects.length;
    var idx = this.state.activeProject + 1;
    idx = idx % arr;

    this.setState({
      activeProject: idx,
      modalQuestion: this.state.projects[idx].question,
      modalPage: this.state.projects[idx].page,

    });
  };

  handlePrevProject = () => {
    var arr = this.state.projects.length;
    var idx = this.state.activeProject;

    console.log("initial: " + idx);

    if (idx === 0) {
      idx = arr - 1;
    } else {
      idx = idx - 1;
    }

    console.log("updated: " + idx);

    this.setState({
      activeProject: idx,
      modalQuestion: this.state.projects[idx].question,
      modalPage: this.state.projects[idx].page
    });
  };

  render() {
    console.log(this.state);

    function nextQuestion(idx, arr) {
      var i = idx + 1;
      i = i % arr.length;
      return arr[i].question;
    }

    function prevQuestion(idx, arr) {
      if (idx === 0) {
        var i = arr.length - 1;
      } else {
        i = idx - 1;
      }

      return arr[i].question;
    }



    const projectComponents = data.map((data, idx, arr) => (
      <Project
        key={"project-" + data.idx}
        index={idx}
        question={data.question}
        page={data.page}
        onModalOpen={this.handleModalOpen}
      />
    )).slice(0, 1);


    if (this.state.activeProject === "") {
      return (

        <div className={styles.container}>
          <DynamicQuestionAddProperties />
          <div class={styles.containerRight}>
            <div className={styles.closeToHome}>
            <a href='/home'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg>
            </a>
            </div>
            <div className={styles.itemsContent}>
              <StartAddProperties Button={projectComponents} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <AddPropertiesComponents
            question={this.state.modalQuestion}
            page={this.state.modalPage}
            previousQuestion={prevQuestion(this.state.activeProject, data)}
            nextQuestion={nextQuestion(this.state.activeProject, data)}
            onModalClose={this.handleModalClose}
            onNext={this.handleNextProject}
            onPrev={this.handlePrevProject}
          />

        </div>
      );
    }
  }
}


class Project extends React.Component {
  render() {
    return (
      <>
        <div className={styles.startButton}>
          <AppButton
            Content="Démarrer"
            styleparam={buttonStyle.redLargeSecondButton}
            onClick={this.props.onModalOpen.bind(this, this.props.index)}
          />
          
        </div>
        
      </>
    );
  }
}




class AddPropertiesComponents extends React.Component {
  render() {
    return (

      <div className={styles.container}>

        <DynamicQuestionAddProperties Content={this.props.question} />

        <div class={styles.containerRight}>
          <div className={styles.itemsContent}>
            <div>{this.props.page}</div>
            <div className={styles.prevNext}>
              <div className={styles.alignPrev}>
                <button onClick={this.props.onPrev}  className={styles.textClosePrevNext}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Retour
                </button>
              </div>
              <div className={styles.alignNext}> 
              <button onClick={this.props.onNext}  className={styles.textNext}>
                Suivant
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button></div>
            </div>


          </div>

        </div>
        <div className={styles.close}>
          <button onClick={this.props.onModalClose} className={styles.textClosePrevNext}> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
            Fermer
          </button>
        </div>
      </div>

    );
  }
}





export default AddProperties
