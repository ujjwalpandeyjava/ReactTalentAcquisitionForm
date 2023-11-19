import { FaArrowRightLong } from "react-icons/fa6";
import { HiRectangleGroup } from "react-icons/hi2";
import intentCSS from './Intent.module.css';

export default function Intent() {
  return (
    <div id={intentCSS.formIntent}>
      <div className={intentCSS.intentContent}>
        <div className={intentCSS.intentContentDetails}>
          <HiRectangleGroup size={"4rem"} />
          <div>Talent acquisition form</div>
          <div>
            We're always on the lookout for talented individuals to join our team.<br />
            Fill in the details below, and we'll connect with you if your skills align with our job descriptions.
          </div>
          <div className={intentCSS.whatTheFormHas}>Questions and documents</div>
        </div>
        {/* <NavLink className={intentCSS.startFormButton} to="/talentAcquisition/basic">START <FaArrowRightLong size={"1.2em"} /></NavLink> */}
        <a className={intentCSS.startFormButton} href="/talentAcquisition/basic">START <FaArrowRightLong size={"1.2em"} /></a> {/* As this changes the baseApp  */}
      </div>
    </div>
  );
}