import { useAppSelector } from "../app/hooks";

 //Status wise count of issues

const StatusCount = (props: any) => {

  const issues = useAppSelector((state: any) => state.homeslice.IssuesList);
 
  const open = issues?.length > 0 && issues?.map((issue: any, index: any) => {
    issue.length > 0 && issue?.filter((issue: any) => issue?.state === 'open')
  })
  const OpenCount = open.length
  // console.log(OpenCount);
  const closedCount = issues.length - OpenCount;
  
  return (
    <div>
      <h2>Status Count</h2><br></br>
      <p>Open Issues: {OpenCount}</p>
      <p>Closed Issues: {closedCount}</p>
    </div>
  );
};
export default StatusCount
