import { createSlice} from '@reduxjs/toolkit';
import { AppThunk } from './store/store';
import { useAppDispatch } from './app/hooks';
import { fetchIssues } from './api';

const HomeSlice = createSlice({
	name: 'homeslice',
	initialState: {
		IssuesList: [],
        Weeks:[],
        WeekCount:[],
        totalclosed:0,
	},
	reducers: {
        setIssuesResponse: (state, action) => {
            const sortedData:any=action.payload.sort((a:any,b:any)=> a.created_at.localeCompare(b.created_at))
            // console.log("SortedData",sortedData)
			state.IssuesList= sortedData;
		},
        setWeeks:(state,action)=>{
            state.Weeks=action.payload;
        },
        setWeekCount:(state,action)=>{
            state.WeekCount=action.payload;
        },
        setTotalClosed:(state,action)=>{
            state.totalclosed=action.payload;
        },
	},
});

export default HomeSlice.reducer;
export const {
    setIssuesResponse,
    setWeeks,
    setWeekCount,
    setTotalClosed,
} = HomeSlice.actions;

export const IssuesFetch = (data:any) : AppThunk=> 
    async (dispatch:any) => {
        // console.log("url",data);
        try {
            const response = await fetchIssues(data);
            const issues = await response.json();
            dispatch(setIssuesResponse(issues))
        } catch (err: any) {
        }
    };

// export const FetchMargin =
// 	(SessionKey: string): AppThunk =>
// 	async (dispatch) => {
// 		try {

// 			if(localStorage.getItem("hypersync_token")==null)
// 			{
// 				return;
// 			}
// 			const MarginData = await getUserMargin(SessionKey);
// 			if(MarginData.stCode===200)
// 			{
// 				dispatch(OnTopGainers(MarginData));
// 			}
// 			else{
// 			}
		
// 		} catch (err) {
			
// 		}
// 	};