import axios from 'axios'
import {
  fetch_user_request,
  fetch_user_success,
  fetch_user_fail,
  log_user_request,
  log_user_success,
  log_user_fail,
  git_user_request,
  git_user_success,
  git_user_fail,
} from './actionType'

export const fetchUserRequest = (payload) => ({
  type: fetch_user_request,
  payload,
})

export const fetchUserSuccess = (payload) => ({
  type: fetch_user_success,
  payload,
})

export const fetchUserFail = (payload) => ({
  type: fetch_user_fail,
  payload,
})

export const logUserRequest = (payload) => ({
  type: log_user_request,
  payload,
})

export const logUserSuccess = (payload) => ({
  type: log_user_success,
  payload,
})

export const logUserFail = (payload) => ({
  type: log_user_fail,
  payload,
})

export const gitUserRequest = (payload) => ({
  type: git_user_request,
  payload,
})

export const gitUserSuccess = (payload) => ({
  type: git_user_success,
  payload,
})

export const gitUserFail = (payload) => ({
  type: git_user_fail,
  payload,
})
