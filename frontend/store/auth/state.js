export default () => ({
  currentUser: window.localStorage.getItem('userMe'),
  apiUrl: 'http://localhost:4488'
});
