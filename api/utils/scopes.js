const scopes = {
  'user-get': ['Admin', 'Principal'],
  'student-create': ['Admin', 'Principal'],
  'student-get': ['Admin', 'Principal'],
  'school-create': ['Admin'],
  'school-get': ['Admin', 'Principal'],
  'school-students': ['Admin', 'Principal']
};

export default scopes
