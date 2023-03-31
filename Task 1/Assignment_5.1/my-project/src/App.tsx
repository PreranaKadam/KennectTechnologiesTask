import { useState } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks';
import StatusCount from './Components/StatusCount';
import WeekWiseCount from './Components/WeekWiseCount';
import { IssuesFetch } from './HomeSlice';
import Ratio from './Components/Ratio';
import ClosureRate from './Components/ClosureRate';
import AverageClosureRate from './Components/AverageClosureRate';
function App() {

  const dispatch: any = useAppDispatch();
  const [repoLink, setRepoLink] = useState('');
  // const [issues, setIssues] = useState([]);
  const [showIssues, setShowIssues] = useState(false);
  const initialText = "Show List of Issues";
  const [buttonText, setButtonText] = useState(initialText);

  const issues = useAppSelector((state) => state.homeslice.IssuesList);
  const requestbody = {
    url: repoLink
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(IssuesFetch(requestbody));
  }

  function handleShowIssues() {
    if (showIssues === true) {
      setShowIssues(false);
    }
    else {
      setShowIssues(true);
    }
    setButtonText('Hide Issues');
  }

  return (
    <div className="App">
      <form className='form1' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='label1'>
            Enter GitHub Repository:
            <br></br>
            <input type="text" className='form-control' value={repoLink} onChange={(event) => setRepoLink(event.target.value)} />
          </label>
        </div>

        <button type="submit">Fetch Issues</button>&nbsp;&nbsp;
        <button type="button" onClick={handleShowIssues}>{showIssues ? buttonText : initialText}</button>
      </form>
      <br></br>

      {/* Below Modal to show table containing list of issues and sorted by created date */}

      {showIssues ? (<div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Number</th>
              <th>Title</th>
              <th>State</th>
              <th>User ID</th>
              <th>Assignee</th>
              <th>Comments</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {issues.length > 0 && issues?.map((issue: any, index: any) =>
              <tr key={index}>
                <td>{issue.id}</td>
                <td>{issue.number}</td>
                <td>{issue.title}</td>
                <td>{issue.state}</td>
                <td>{issue.user.id}</td>
                <td>{issue.body}</td>
                <td>{issue.comments}</td>
                <td>{issue.created_at}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>) : (<>
      {/* Components */}
        {issues.length > 0 ? <>
        <div className='maincontainer'>
          <div className="grid-container">
            <div className='containerdiv'><StatusCount /></div>
            <div className='containerdiv'><WeekWiseCount /></div>
            <div className='containerdiv'><Ratio /></div>
          </div>
          <div className='grid-container2'>
            <div className='containerdiv' ><ClosureRate /></div>
            <div className='containerdiv' ><AverageClosureRate /></div>
          </div>
        </div>
        </>
          :
          <></>}</>)}
    </div>
  )
}

export default App
