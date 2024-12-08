import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiCss3 } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMongodb } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';

function Landing() {
  return (
    <div className="floating-icons">
      <div className="frontend">
        <FaReact
          className="frontend-icon react"
          size={`50px`}
          color="#07cdf0"
        />
        <FaNodeJs
          className="frontend-icon redux"
          size={`50px`}
          color="#0f5a05"
        />
        <IoLogoJavascript
          className="frontend-icon js"
          size={`50px`}
          color="#e3c905"
        />
        <SiMongodb
          className="frontend-icon router"
          size={`50px`}
          color="#05e314"
        />
        <div className="ui">
          <SiCss3 className="ui-icon css" size="50px" color="blue" />
          <SiTailwindcss
            className="ui-icon tailwind"
            size="50px"
            color="#11d9f7"
          />
          <FaSass className="ui-icon sass" size="50px" color="#f71184" />
          <div className="inner-text">
            <p>Crafting Imaginations, </p>
            <p>Shaping Experiences</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
