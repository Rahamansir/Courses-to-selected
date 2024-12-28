import { useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const course = ['Superman', 'Hulk', 'Thor', 'Spiderman'];

function App() {
  //let selectedcoueseidx = 0;

  const [selectedcouese, setselectedcoueseidx] = useState(
    Number(localStorage.getItem('selectedcourseidx'))
  );
  const [myCourse, setMyCourse] = useState();

  const options = (text, idx) => {
    setselectedcoueseidx(idx);
    setMyCourse(text);
    localStorage.setItem('selectedcourseidx', idx);
  };

  return (
    <div>
      <Courses />

      <ul>
        <pre>SELECTED COURSE : {JSON.stringify(selectedcouese + 1, null)}</pre>
        {course.map((courseitem, idx) => (
          <li
            onClick={() => {
              options(courseitem, idx);
            }}
            className={idx === selectedcouese ? 'active' : ''}
          >
            {/* {idx}.*/}
            {courseitem}
          </li>
        ))}
      </ul>
      {/*         course[0] */}
      <h3>Hello using index base: {course[selectedcouese]}</h3>
      <h3>Hello using useState base: {myCourse}</h3>
      <Learning />
    </div>
  );
  //return <ul>
  // {courses.map(function(courseitem ,idx){
  // return <li>{idx}.{courseitem}</li>
  //})}
  //</ul>
  // return (
  //   <ul>
  //   <li className={selectedcoueseidx === 0 ? 'active' : ''}>
  //   Front End
  //</li>
  //<li className={selectedcoueseidx === 1 ? 'active' : ''}>Back End</li>
  //<li className={selectedcoueseidx === 2 ? 'active' : ''}>Ui & Ux</li>
  //</ul>
  //);
}

export default App;

const coursess = [
  'Front-End Web Development',
  'Back-End Web Development',
  'React JS Development',
  'UI/UX Design',
];

const urlSearchParams = location.search;
const param = new URLSearchParams(urlSearchParams);
const selectedidx = param.get('selectedidx');

function Courses() {
  const [select, setselectrd] = useState(Number(selectedidx || 0));

  const handlingclick = (idx) => {
    setselectrd(idx);
    // localStorage.setItem('selectedcourseidx', idx);
    const origin = location.origin;
    const serachparams = `?selectedidx=${idx}`;
    const url = origin + serachparams;
    const href = location.href + url;
  };

  return (
    <div className="Courses-ui">
      <nav>
        {coursess.map((cr, idx) => (
          <span
            onClick={() => handlingclick(idx)}
            className={idx === select ? 'active' : ''}
          >
            {cr}
          </span>
        ))}
      </nav>
      <div className="details">
        <h3>Course Details</h3>
        <h3>You Have Selected : {coursess[select]}</h3>
      </div>
    </div>
  );
}

const Courselist = [
  'Front-End Web Development',
  'Back-End Web Development',
  'React JS Development',
  'UI/UX Design',
];

function Learning() {
  const [hello, sethello] = useState();

  const handleclick = (idx) => {
    sethello(idx);
    localStorage.setItem('selected', value);
  };

  return (
    <>
      {Courselist.map((value, idx) => (
        <li
          onClick={() => handleclick(value, idx)}
          className={idx === hello ? 'active' : ''}
        >
          {idx}==
          {value}
        </li>
      ))}

      <h2>Good:{hello}</h2>
    </>
  );
}
