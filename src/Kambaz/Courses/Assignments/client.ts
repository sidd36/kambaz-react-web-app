import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const fetchAllAssignments = async () => {
    const { data } = await axios.get(ASSIGNMENTS_API);
    return data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const status = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return status;
}

export const createAssignment = async (assignment: any) => {
    const newAssignment = await axios.post(ASSIGNMENTS_API, assignment);
    return newAssignment;
}

export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
}
