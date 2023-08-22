import React from "react"
import { api } from "../requests"

export const UseGetAppointments = () => {
  const [ appointments, setAppointments ] = React.useState(null)

  React.useEffect(() => {
    api.getAppointments()
      .then(res => setAppointments(res.data))
  }, [])

  return {
    appointments
  }
}

export const UseGetDoctors = () => {
  const [ doctors, setDoctors ] = React.useState(null)

  React.useEffect(() => {
    api.getDoctors()
      .then(res => setDoctors(res.data))
  }, [])

  return {
    doctors
  }
}