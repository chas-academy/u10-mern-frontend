import axios from 'axios';

const authenticate = () => dispatch => axios('https://localhost:8080/api/user', {
  method: 'get',
  withCredentials: true,
}).then((response) => {
  dispatch({ type: 'AUTHENTICATE_SUCCESS', payload: response.data });
}).catch((error) => {
  dispatch({ type: 'AUTHENTICATE_FAILURE' });
  throw (error);
});


const getCourses = () => (dispatch) => {
  axios(`${process.env.REACT_APP_SERVER}/api/courses`, {
    method: 'get',
    withCredentials: true,
  }).then((response) => {
    // Restructure courses and sessions into associative objects instead of arrays

    const newCourses = {};

    response.data.forEach((course) => {
      const courseObject = { ...course };
      const newSessions = course.sessions;

      courseObject.sessions = {};

      newSessions.forEach((session) => {
        courseObject.sessions[session._id] = session;
      });

      newCourses[course._id] = courseObject;
    });

    dispatch({ type: 'COURSES_SUCCESS', payload: newCourses });
  }).catch((error) => {
    dispatch({ type: 'COURSES_FAILURE' });
    throw (error);
  });
};

const setTrack = (courseId, sessionId) => (dispatch) => {
  const track = `https://moment23.amin.nu/api/courses/${courseId}/sessions/${sessionId}/audio`;
  dispatch({ type: 'SET_TRACK', payload: track });
};

export {
  authenticate, getCourses, setTrack, test,
};
