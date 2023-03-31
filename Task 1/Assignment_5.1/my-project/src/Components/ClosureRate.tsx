import { useAppSelector } from "../app/hooks";

// For each week, Weekly closure rate

const ClosureRate = () => {
	const closureRates: any = [];

	const weeks = useAppSelector((state: any) => state.homeslice.Weeks);
	const totalClosed = useAppSelector((state: any) => state.homeslice.totalclosed);
	var closureRate
	weeks.forEach((week: any, i: any) => {
		closureRate = totalClosed / ((i + 1) * 7);
		closureRates.push(closureRate);
	});

	//   console.log("ClosureRates Final--",closureRate)
	return (
		<div>
			<h2>Weekly Closure Rate</h2><br></br>
			<h3>{closureRate}</h3>
		</div>
	);
};
export default ClosureRate;
