import React from "react"
import { api } from "../requests"

export const UseGetAppointments = () => {
  const [ appointments, setAppointments ] = React.useState(null)
  const [ dep, setDep ] = React.useState(0)

  React.useEffect(() => {
    api.getAppointments()
      .then(res => {
        setAppointments(res.data)
      })
    
    setTimeout(() => {
      setDep(Math.random())
    }, 10000);
  }, [dep])

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