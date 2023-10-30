import { commonAPI } from './commonAPI'
import {serverURL} from './serverURL'

// upload a video
export const uploadVideo = async (reqBody)=>{
    // make call post http request to http://localhost:4000/videos to add video in json server and return response to Add component
   return await commonAPI("POST", `${serverURL}/videos`,reqBody)
}

// get all videos from json server
export const getAllVideos = async ()=>{
    // make get http request to http://localhost:4000/videos to get all videos from json server and return response to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

// get a video from json server
export const getAVideo = async (id)=>{
    // make get http request to http://localhost:4000/videos/id to get a video from json server and return response to VideoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// delete a video from json server
export const deleteAVideo = async (id)=>{
    // make delete http request to http://localhost:4000/videos/id to remove a video from json server and return response to VideoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// store watching video history to json server
export const addToHistory = async (videoDetails)=>{
    // make call post http request to http://localhost:4000/history to add video history in json server and return response to video card component
  return await commonAPI("POST", `${serverURL}/history`,videoDetails)
}

// get all watching video history to json server
export const getAllHistory = async ()=>{
    // make get post http request to http://localhost:4000/history to get video history in json server and return response to watch history component
  return await commonAPI("GET", `${serverURL}/history`,"")
}