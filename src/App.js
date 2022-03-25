// import './App.css';
import 'animate.css'
import './card.css';
import Data from './data.json';
import InViewMonitor from "react-inview-monitor"
// import './images/image01.jpeg';

function Content (props) {
  const contentList = Data.map((props) => {
    return (
      <section className='contents'>
        <div className='inner'>
          <InViewMonitor classNameNotInView='vis-hidden' classNameInView='animate__animated animate__fadeInUp slower'>
            <img src={props.imagePath} alt={props.title} className='img' />
          </InViewMonitor>
          <div className='description'>
          <InViewMonitor classNameNotInView='vis-hidden' classNameInView='animate__animated animate__fadeInUp slower'>
              <h1 className='title'>{props.title}</h1>
            </InViewMonitor>
            <InViewMonitor classNameNotInView='vis-hidden' classNameInView='animate__animated animate__fadeInUp slower'>
              <p className='text'>{props.description}</p>
            </InViewMonitor>
          </div>
        </div>
      </section>
      
    )
  })
  return (
    <div className='card'>
      {contentList}
    </div>
  )
}

export default Content;
