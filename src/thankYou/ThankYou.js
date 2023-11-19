import { useEffect } from "react";
import Confetti from 'react-confetti';
import { GiHeraldicSun } from "react-icons/gi";
import thankYouCSS from './ThankYou.module.css';


function ThankYou({ onstage }) {
	useEffect(() => {
		document.title = `Thank you`;
		onstage(5)
	}, []);

	return (
		<section id={thankYouCSS.body}>
			<Confetti />
			Thank You <GiHeraldicSun />
		</section >
	)
}

export default ThankYou;