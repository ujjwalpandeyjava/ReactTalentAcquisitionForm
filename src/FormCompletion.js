import { useEffect } from "react"
import { NavLink } from "react-router-dom";

export default function FormIn4Section({ onstage }) {
	useEffect(() => {
		const stepElements = document.querySelectorAll('.step');
		if (onstage > 0)
			stepElements.forEach((element, index) => {
				if (index < onstage - 1)
					element.classList.add("completed")
				else if (index === onstage - 1)
					element.classList.add("working")
				else {
					element.classList.remove("completed")
					element.classList.remove("working")
				}
			});
	}, [onstage])

	return (
		<div className="step-bar">
			<NavLink to={"/basic"} className="step">Basic</NavLink>
			<div className="connector"></div>
			<NavLink to={"/documents"} className="step">Documents</NavLink>
			<div className="connector"></div>
			<NavLink to={"/purpose"} className="step">Purpose</NavLink>
			<div className="connector"></div>
			<NavLink to={"/availability"} className="step">availability</NavLink>
		</div>
	)
}