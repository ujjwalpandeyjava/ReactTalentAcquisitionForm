import { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router";

function InterviewAvailability({ onstage }) {
	const [allAvailableTimeZone, setAllAvailableTimeZone] = useState([]);
	const interViewMedium = ['English', 'Hindi', 'German', 'Punjabi', 'Spanish', 'Tamil'];

	useEffect(() => {
		document.title = `Purpose`;
		onstage(4)
		let timeZoneListObj = []
		let timeZoneObj = Intl.supportedValuesOf('timeZone');

		let date = new Date();
		timeZoneObj.forEach(timeZone => {
			let strTime = date.toLocaleString("en-US", { timeZone: `${timeZone}` });
			timeZoneListObj.push({ timeZone, time: strTime, strTime: new Date(strTime).getTimezoneOffset() });
		});
		setAllAvailableTimeZone(timeZoneListObj);
	}, []);

	const goToUrl = useNavigate();
	const submitFullForm = (event) => {
		event.preventDefault();
		goToUrl("/thankYou");
	}

	return (
		<div className="centered-container-basic centered-container">
			<h2>Availability for interview</h2>
			<form className="centered-form" onSubmit={submitFullForm}>
				<div>
					<label>
						E-mail: <span className="requiredRedStar">*</span>
						<input type="email" placeholder="We will connect you here..." required ></input>
					</label>
				</div>

				<div>
					<label>
						Location: <span className="requiredRedStar">*</span>
						<select id="selectOption" required>
							<option value="">Select</option>
							<option value="noida">Noida</option>
							<option value="gugugram">Gurugram/Gurgoan</option>
							<option value="delhi">Delhi</option>
							<option value="banglore">Banglore</option>
						</select>
					</label>
				</div>

				<div>
					<label>
						Interview Dae: <span className="requiredRedStar">*</span>
						<input type="date" placeholder="Your availability date" required ></input>
					</label>
				</div>

				<div>
					<label>
						Interview Time: <span className="requiredRedStar">*</span>
						<input type="time" placeholder="Your availability time" required ></input>
					</label>
				</div>

				<div>
					<label>
						Time zone: <span className="requiredRedStar">*</span>
						{/* <input type="text" required ></input> */}
						<input type="text" id="timeZoneListID" list="timeZoneList" placeholder="Your time Zone" />
						<datalist id="timeZoneList">
							{allAvailableTimeZone.map((timeObj, index) => (
								<option key={index + 1} value={timeObj.timeZone + " (" + timeObj.strTime + ")"} />
							))}
						</datalist>
					</label>
				</div>

				<div>
					<label>
						Interview Medium: <span className="requiredRedStar">*</span>
						<input type="text" id="interviewMediumID" list="interviewMedium" placeholder="Spoken language you are comfortable in" />
						<datalist id="interviewMedium">
							{interViewMedium.map((medium, index) => (
								<option key={index + 1} value={medium} />
							))}
						</datalist>
					</label>
				</div>

				<div className="toRight">
					<button type="submit" className="submitButtonWithIcon">Submit <MdOutlineNavigateNext size={"1.5em"} /></button>
					<div className="note"><strong>Note: </strong> Field marked with <span className="requiredRedStar">*</span> are mandatory</div>
				</div>
			</form>
		</div>
	)
}

export default InterviewAvailability