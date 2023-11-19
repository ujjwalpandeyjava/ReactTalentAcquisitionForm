import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicNav from './BasicNav'
import FormCompletionProgress from './FormCompletion'
import BasicDetails from './formSections/BasicDetails'
import DocumentCollection from './formSections/DocumentCollection'
import InterviewAvailability from './formSections/InterviewAvailability'
import StatementOfPurpose from './formSections/StatementOfPurpose'
import Intent from './intent/Intent'
import ThankYou from './thankYou/ThankYou'

export default function App() {
	const [onstage, setOnStage] = useState(0);
	const setOnStageValue = (newValue) => {
		setOnStage(newValue);
	}
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Intent />}></Route>
				</Routes>
			</BrowserRouter>
			<BrowserRouter basename='/talentAcquisition'>
				<BasicNav />
				<FormCompletionProgress onstage={onstage} />
				<Routes>
					<Route path='/basic' element={<BasicDetails onstage={setOnStageValue} />}></Route>
					<Route path='/documents' element={<DocumentCollection onstage={setOnStageValue} />}></Route>
					<Route path='/purpose' element={<StatementOfPurpose onstage={setOnStageValue} />}></Route>
					<Route path='/availability' element={<InterviewAvailability onstage={setOnStageValue} />}></Route>
					<Route path='/thankYou' element={<ThankYou onstage={setOnStageValue} />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}