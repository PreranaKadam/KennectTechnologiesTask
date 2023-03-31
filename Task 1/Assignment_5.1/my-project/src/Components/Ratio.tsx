import { setTotalClosed } from "../HomeSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

// ratio of new issues vs closed issues per week

const Ratio = () => {
    const dispatch: any = useAppDispatch();
    const issues = useAppSelector((state: any) => state.homeslice.IssuesList);
    const weeks = useAppSelector((state: any) => state.homeslice.Weeks);
    const weekCount = useAppSelector((state: any) => state.homeslice.WeekCount);
    const ratios: any = [];
    let totalClosed = 0;

    weeks.forEach((week: any, i: any) => {
        const closed = issues.filter(
            (issue: any) =>
                issue.state === "closed" &&
                new Date(issue.closed_at) <= new Date(week + "-7")
        ).length;
        totalClosed += closed;
        //   console.log("totalClosed",totalClosed)
    });
    dispatch(setTotalClosed(totalClosed))
    var newIssuecount = 0
    weekCount.map((data: any) => {
        newIssuecount = newIssuecount + data.open
    })
    //   console.log(newIssuecount, "newIssuecount")
    const ratio = newIssuecount / totalClosed;
    ratios.push(ratio);
    return (
        <div>
            <h2>Ratio of new Issues vs Closed Issues</h2><br></br>
            <h4>Ratio={newIssuecount}/{totalClosed}</h4>i.e
            <p>{ratios == Infinity ? "Ratio= ∞" : "Ratio=" + ratios}</p>
        </div>
    );
};
export default Ratio
