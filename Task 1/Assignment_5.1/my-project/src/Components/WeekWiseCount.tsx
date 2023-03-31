import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setWeekCount, setWeeks } from '../HomeSlice';

// Group issues by week and return week-wise counts

const WeekWiseCount = (props: any) => {
  const issues = useAppSelector((state: any) => state.homeslice.IssuesList);
  const dispatch: any = useAppDispatch();

  function getWeekNumber(date: any) {
    const onejan: any = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  }
  function groupIssuesByWeek() {
    const weekCount = [];
    const tenWeeksAgo = new Date();
    tenWeeksAgo.setDate(tenWeeksAgo.getDate() - 70);
    for (const issue of issues) {
      const createdAt = new Date(issue.created_at);
      if (createdAt >= tenWeeksAgo) {
        const weekNumber = getWeekNumber(createdAt);
        if (!weekCount[weekNumber]) {
          weekCount[weekNumber] = { open: 0, closed: 0 };
        }
        if (issue.state === 'open') {
          weekCount[weekNumber].open++;
        } else if (issue.state === 'closed') {
          weekCount[weekNumber].closed++;
        }
      }
    }
    return weekCount;
  }
  const weekCount = groupIssuesByWeek();

  const weeks = Object.keys(weekCount).sort();

  dispatch(setWeeks(weeks))
  dispatch(setWeekCount(weekCount))
  return (
    <div>
      <h2>Week-wise Issue Counts</h2>
      <table className="table table-bordered" style={{ border: " 3px solid" }}>
        <thead>
          <tr>
            <th style={{ border: " 3px solid" }}>Week</th>
            <th style={{ border: " 3px solid" }}>Count</th>
          </tr>
        </thead>
        <tbody>
          {weekCount.map((count, index) => (
            <tr key={index}>
              <td style={{ border: " 3px solid" }}>Week  {index}</td>
              <td style={{ border: " 3px solid" }}>open:{count.open}<br></br>closed:{count.closed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeekWiseCount;
