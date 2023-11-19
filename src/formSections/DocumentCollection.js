import { MdOutlineAttachment, MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router";
import './DocumentCollection.scss'
import { useEffect } from "react";

function DocumentCollection({ onstage }) {
	const goToUrl = useNavigate();
	const submitDocuments = (event) => {
		event.preventDefault();
		goToUrl("/purpose");
	}
	useEffect(() => {
		onstage(2)
		document.title = `Upload Documents`;
	}, []);

	const fileAttached = (event) => {
		let currentEle = event.currentTarget
		let parentEle = currentEle.parentElement;
		let fileDetail = "";
		let oldEle = parentEle.querySelectorAll(".fileDetails");
		oldEle.forEach(element => {
			element.remove();
		});

		for (let index = 0; index < currentEle.files.length; index++) {
			const file = currentEle.files[index];
			fileDetail += `${index + 1}). ${file.name} - ${Math.ceil(file.size / 1024)} kb${index > 0 ? "," : ""}<br/>`
		}

		let newEle = document.createElement("element")
		newEle.innerHTML = fileDetail;
		newEle.classList.add("fileDetails");
		parentEle.insertBefore(newEle, currentEle);
	}
	return (
		<div className="centered-container-documentation">
			<h2>Documents to verify the authenticity</h2>
			<form className="centered-form" onSubmit={submitDocuments}>
				<div>
					<label htmlFor="markSheet10th">10<sup>th</sup> Marksheet: <span className="requiredRedStar">*</span>
						<MdOutlineAttachment className='attachIcon' size={"1.5rem"} />
						<input type="file" accept="application/pdf" onChange={fileAttached} className="custom-file-input" id="markSheet10th" name="markSheet10th" required multiple />
					</label>
				</div>
				<div>
					<label htmlFor="markSheet12th">12<sup>th</sup> Marksheet: <span className="requiredRedStar">*</span>
						<MdOutlineAttachment className='attachIcon' size={"1.5rem"} />
						<input type="file" accept="application/pdf" onChange={fileAttached} className="custom-file-input" id="markSheet12th" name="markSheet12th" required />
					</label>
				</div>
				<div>
					<label htmlFor="markSheetGraduation">Graduation Marksheet: <span className="requiredRedStar">*</span>
						<MdOutlineAttachment className='attachIcon' size={"1.5rem"} />
						<input type="file" accept="application/pdf" onChange={fileAttached} className="custom-file-input" id="markSheetGraduation" name="markSheetGraduation" required />
					</label>
				</div>
				<div>
					<label htmlFor="markSheetPostGraduation">Post Graduation Marksheet:
						<MdOutlineAttachment className='attachIcon' size={"1.5rem"} />
						<input type="file" accept="application/pdf" onChange={fileAttached} className="custom-file-input" id="markSheetPostGraduation" name="markSheetPostGraduation" />
					</label>
				</div>
				<div>
					<label htmlFor="resume">Graduation Marksheet: <span className="requiredRedStar">*</span>
						<MdOutlineAttachment className='attachIcon' size={"1.5rem"} />
						<input type="file" accept="application/pdf" onChange={fileAttached} className="custom-file-input" id="resume" name="resume" required />
					</label>
				</div>
				<div>
					<label htmlFor="recommendationLetter">recommendation Letter:
						<MdOutlineAttachment className='attachIcon' size={"1.5rem"} />
						<input type="file" accept="application/pdf" onChange={fileAttached} className="custom-file-input" multiple id="recommendationLetter" name="recommendationLetter" />
					</label>
				</div>
				<div>
					<label htmlFor="salarySlips">Salary Slips:
						<MdOutlineAttachment className='attachIcon' size={"1.5rem"} />
						<input type="file" accept="application/pdf" onChange={fileAttached} className="custom-file-input" multiple id="salarySlips" name="salarySlips" />
					</label>
				</div>
				<div>
					<label htmlFor="otherStuff">Other (if any):
						<MdOutlineAttachment className='attachIcon' size={"1.5rem"} />
						<input type="text" id="otherStuffNames" name="otherStuffNames" placeholder="What are they?" />
						<input type="file" accept="application/pdf" onChange={fileAttached} className="custom-file-input" id="otherStuff" name="otherStuff" multiple />
					</label>
				</div>
				<div className="toRight">
					<button type="submit">Next <MdOutlineNavigateNext size={"1.5em"} /></button>
					<div className="note"><strong>Note: </strong> Field marked with <span className="requiredRedStar">*</span> are mandatory</div>
				</div>
			</form>
		</div>
	)
}

export default DocumentCollection