import axiosInstance from '../../globals';
import axios from 'axios'
import {PROCESSING, LAUNCHESFAIL, LAUNCH } from './types'

// const API_HOST_URL: string = "https://api.spacexdata.com/v3";

export const loadingAction = (payload: boolean) => ({
  type: PROCESSING,
  payload
})

export const launchAction = (payload: any) => ({
  type: LAUNCH,
  payload
})

export const launchFailedAction = (payload: string) => ({
  type: LAUNCHESFAIL,
  payload
})

export const launchesAction = () => (dispatch: any) => {

  dispatch(loadingAction(true));
  console.log('called===>')
  axios.get("https://api.spacexdata.com/v3/launches")
    .then((response) => {
      console.log(response.data, '============+>')
      dispatch(launchAction(response.data));
      dispatch(loadingAction(false));
    })
    .catch((error) => {
      console.log(error, '=====>')
      dispatch(launchFailedAction(error.response));
      dispatch(loadingAction(false));
    })

};
