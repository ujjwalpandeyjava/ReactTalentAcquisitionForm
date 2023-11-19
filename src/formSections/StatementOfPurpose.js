import { MdOutlineNavigateNext } from "react-icons/md";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function StatementOfPurpose({ onstage }) {
	useEffect(() => {
		document.title = `Purpose`;
		onstage(3)
	}, []);

	const goToUrl = useNavigate();
	const submitPurpose = (event) => {
		event.preventDefault();
		goToUrl("/availability");
	}

	return (
		<div className="centered-container-basic centered-container">
			<h2>Purpose of being a developer</h2>
			<form className="centered-form" onSubmit={submitPurpose}>
				<div>
					<label>
						Tell me about a time you were asked to do something you had never done
						before. How did you react? What did you learn?: <span className="requiredRedStar">*</span>
						<textarea maxLength="300" rows="4" placeholder="Did you shined, and how?" required ></textarea>
					</label>
				</div>
				<div>
					<label>
						Tell me about the last time something significant didn’t go according to plan at
						work. What was your role? What was the outcome?: <span className="requiredRedStar">*</span>
						<textarea maxLength="300" rows="4" placeholder="Anything..." required ></textarea>
					</label>
				</div>
				<div>
					<label>
						What are the three things that are most important to you in a job? <span className="requiredRedStar">*</span>
						<textarea maxLength="300" rows="4" placeholder="What motivated you..." required ></textarea>
					</label>
				</div>
				<div className="toRight">
					<button type="submit" className="submitButtonWithIcon">Next <MdOutlineNavigateNext size={"1.5em"} /></button>
					<div className="note"><strong>Note: </strong> Field marked with <span className="requiredRedStar">*</span> are mandatory</div>
				</div>
			</form>
		</div>
	)
}

export default StatementOfPurpose