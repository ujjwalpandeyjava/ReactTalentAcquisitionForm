import { useNavigate } from "react-router";
import { MdOutlineNavigateNext } from "react-icons/md";
import './BasicDetails.scss'
import { useEffect } from "react";

function BasicDetails({onstage}) {
	const goToUrl = useNavigate();
	const submitForm = (event) => {
		event.preventDefault();
		goToUrl("/documents")
	}
	useEffect(() => {
		onstage(1)
		document.title = `Basic details`;
	}, []);

	return (
		<div className="centered-container-basic centered-container">
			<h2>Basics Details</h2>
			<form className="centered-form" onSubmit={submitForm}>
				<div>
					<label htmlFor="name">Name: <span className="requiredRedStar">*</span>
						<input placeholder="Full name" type="text" id="name" name="name" required />
					</label>
				</div>
				<div>
					<label htmlFor="email">Email: <span className="requiredRedStar">*</span>
						<input placeholder="We will update here" type="email" id="email" name="email" required />
					</label>
				</div>
				<div>
					<label htmlFor="mobileNo">Mobile No:
						<input placeholder="Mobile number" type="number" id="mobileNo" name="mobileNo" />
					</label>
				</div>
				<div>
					<label htmlFor="dob">Date of birth:
						<input placeholder="dd/MM/YYYY" type="date" id="dob" name="dob" />
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

export default BasicDetails