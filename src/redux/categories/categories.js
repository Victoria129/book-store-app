const checkBookStatus = 'Bookstore/categories/checkStatus';

const checkStatus = () => ({
  type: checkBookStatus,
});

const categoryReducer = (state = [], action) => {
  if (action.type === checkBookStatus) {
    return 'Pending';
  }
  return state;
};

export default categoryReducer;
export { checkStatus };
