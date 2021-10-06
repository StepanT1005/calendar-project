
class User {
    constructor (id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    };

    get id(){
        return this._id
    }
    get name() {
        return this._name
    }
    get sessionId() {
        return this._sessionId
    }
}
  class UserRepository {
      _users = [];
      constructor (users) {
        this._users.push(...users);
        Object.freeze(this._users);
      };
      get users() {
          return this._users;
      }
      getUserNames() {
        return this._users.reduce((acc, userName) =>{
            acc.push(userName._name);
            return acc
            }, [])
      }
      getUserIds() {
        return this._users.reduce((acc, userId) =>{
            acc.push(userId._id);
            return acc
            }, [])
      }
      getUserNameById(id) {
        return this._users.reduce((acc, userName) =>{
            if(userName._id == id) acc = userName._name;
            return acc;
            },'')
      }
}
  
  // examples
  const user = new User('1', 'Tom', 'session-id');
  
  // получить свойства можем
  console.log(user.id); // ===> '1'
  console.log(user.name); // ===> 'Tom'
  console.log(user.sessionId); // ===> 'session-id'
  
  // но изменить эти свойства нельзя
  user.name = 'Bob'; // пытаемся изменить старое значение
  console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
 const user1 = new User(2, 'John', 'session-Id 2');
 const user2 = new User(3, 'Mike', 'session-Id 3');
 const user3 = new User(4, 'Kate', 'session-Id 4');


 
const repository = new UserRepository([user1, user2, user3])
repository.getUserNames();