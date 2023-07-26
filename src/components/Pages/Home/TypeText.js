import './Home.scss'
import {Typewriter} from 'react-simple-typewriter';


function TypeText() {
  return (
    <div>
      <h3 className='text-light typescript'>
        I'm a{' '}
        <span>
          <Typewriter
            loops
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Student', 'Professor', 'Web Developer']}
            onLoop={(loopCount) =>
              console.log(`Just completed loop ${loopCount}`)
            }
          />
        </span>
      </h3>
    </div>
  )
}
export default TypeText;