import axios from "axios";

export const api = {
  getAppointments: () => axios.get('/appointment/'),
  getDoctors: () => axios.get('/doctors/'),
}