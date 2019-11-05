const AuthorizedLinks = (initials = 'AN') => [
  {
    name: 'New Shipment',
    url: '/',
    class: '',
  },
  {
    name: 'LogOut',
    url: '/logout',
    class: '',
  },
  {
    name: initials,
    url: '/',
    class: 'btn btn-floating grey lighten-3',
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
