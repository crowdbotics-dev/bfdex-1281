import axios from "axios";
const bfdexAPI = axios.create({
  baseURL: "https://bfdex-1281.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return bfdexAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return bfdexAPI.post(`/api/v1/login/`, payload);
}

function api_v1_signup_create(payload) {
  return bfdexAPI.post(`/api/v1/signup/`, payload);
}

function api_v1_yhbchd_list(payload) {
  return bfdexAPI.get(`/api/v1/yhbchd/`);
}

function api_v1_yhbchd_create(payload) {
  return bfdexAPI.post(`/api/v1/yhbchd/`, payload);
}

function api_v1_yhbchd_retrieve(payload) {
  return bfdexAPI.get(`/api/v1/yhbchd/${payload.id}/`);
}

function api_v1_yhbchd_update(payload) {
  return bfdexAPI.put(`/api/v1/yhbchd/${payload.id}/`, payload);
}

function api_v1_yhbchd_partial_update(payload) {
  return bfdexAPI.patch(`/api/v1/yhbchd/${payload.id}/`, payload);
}

function api_v1_yhbchd_destroy(payload) {
  return bfdexAPI.delete(`/api/v1/yhbchd/${payload.id}/`);
}

function rest_auth_login_create(payload) {
  return bfdexAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_create(payload) {
  return bfdexAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return bfdexAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return bfdexAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return bfdexAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return bfdexAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_resend_email_create(payload) {
  return bfdexAPI.post(`/rest-auth/registration/resend-email/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return bfdexAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return bfdexAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return bfdexAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return bfdexAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_yhbchd_list,
  api_v1_yhbchd_create,
  api_v1_yhbchd_retrieve,
  api_v1_yhbchd_update,
  api_v1_yhbchd_partial_update,
  api_v1_yhbchd_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};