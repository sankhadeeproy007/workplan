export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Rsihi',
        authorLastName: 'Roy',
        authorId: 123,
        createdAt: Date.now()
      })
      .then(() => dispatch({ type: 'CREATE_PROJECT', project }))
      .catch(err => dispatch({ type: 'CREATE_PROJECT_ERROR', err }));
  };
};
