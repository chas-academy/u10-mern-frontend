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

const test = () => {
  console.log('hi');
};

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

export { authenticate, getCourses, test };
