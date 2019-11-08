import LogOut from './LogOut';

const AuthorizedLinks = [
  {
    name: 'LogOut',
    click: LogOut,
    class: '',
  }
];
const UnAuthorizedLinks = [
  {
    name: 'Sign Up',
    url: '/',
    class: '',
  },
  {
    name: 'Sign In',
    url: '/signin',
    class: '',
  }
];

export { AuthorizedLinks, UnAuthorizedLinks };
