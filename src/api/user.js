import instance from './require'

export function rejectUser(username,password){
  return instance.post('/api/users/addUser',{username,password});
}
