import axios from 'axios';

const authenticate = () => dispatch => axios(`${process.env.REACT_APP_BACKEND_URL}/user`, {
  method: 'get',
  withCredentials: true,
}).then((response) => {
  dispatch({ type: 'AUTHENTICATE_SUCCESS', payload: response.data });
}).catch((error) => {
  dispatch({ type: 'AUTHENTICATE_FAILURE' });
  throw (error);
});


const getCourses = () => (dispatch) => {
  axios(`${process.env.REACT_APP_BACKEND_URL}/courses`, {
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
  // Using live API URL instead of trying to set up locally
  const track = `https://moment23.amin.nu/api/courses/${courseId}/sessions/${sessionId}/audio`;
  dispatch({ type: 'SET_TRACK', payload: track });
};

export {
  authenticate, getCourses, setTrack,
};
