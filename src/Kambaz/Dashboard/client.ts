import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const fetchAllEnrollments = async () => {
    const { data } = await axios.get(ENROLLMENTS_API);
    return data;
};

export const enrollInCourse = async(enrollment: any) => {
    const { data } = await axios.put(ENROLLMENTS_API, enrollment);
    return data;
}

export const unEnrollFromCourse = async(enrollment: any) => {
    const { data } = await axios.delete(`${ENROLLMENTS_API}/${enrollment.user}/${enrollment.course}`);
    return data;
}