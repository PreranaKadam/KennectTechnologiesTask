import { useAppSelector } from "../app/hooks";

// Average Weekly Closure rate of issues

const AverageClosureRate = () => {
    const weeks = useAppSelector((state: any) => state.homeslice.Weeks);
    const totalClosed = useAppSelector((state: any) => state.homeslice.totalclosed);
    const averageClosureRate = totalClosed / ((weeks.length + 1) * 7) || 0;
    return (
        <div>
            <h2>Average Weekly Closure Rate</h2><br></br>
            <h3>{averageClosureRate}</h3>
        </div>
    );
};
export default AverageClosureRate;
