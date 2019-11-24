'use strict'

const ROLE = Object.freeze({
    ADMIN: "ADMIN",
    MODERATOR: "MODERATOR",
    USER: "USER",
});

const ACTION = Object.freeze({
    CREATE: "CREATE",
    READ: "READ",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
});

let roleRights = new Map();
roleRights.set(ACTION.CREATE,[ROLE.ADMIN, ROLE.MODERATOR]);
roleRights.set(ACTION.READ,[ROLE.ADMIN, ROLE.MODERATOR, ROLE.USER]);
roleRights.set(ACTION.UPDATE, [ROLE.MODERATOR]);
roleRights.set(ACTION.DELETE, [ROLE.ADMIN]);

/*=====================================================================================================
STEP 1*/

function checkPermission(action, role) {
    let rights = roleRights.get(action).indexOf(role);
    if(rights === -1) return false;
    return true;
}

/*=====================================================================================================
STEP 2*/
class User{
    constructor(name,surname,email, role){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
    }

    static checkPermission(action, userExecutor, user){
        if(userExecutor === user){return User.checkSelfPermission(action, userExecutor)}
        let rights = new Map();
        rights.set(ROLE.ADMIN, new Map().set(ACTION.CREATE, [ROLE.MODERATOR, ROLE.USER]));
        rights.get(ROLE.ADMIN).set(ACTION.READ, [ROLE.ADMIN, ROLE.MODERATOR, ROLE.USER]);
        rights.get(ROLE.ADMIN).set(ACTION.UPDATE, [ROLE.ADMIN, ROLE.MODERATOR, ROLE.USER]);
        rights.get(ROLE.ADMIN).set(ACTION.DELETE, [ROLE.MODERATOR, ROLE.USER]);

        rights.set(ROLE.USER, new Map().set(ACTION.READ, [ROLE.MODERATOR, ROLE.USER]));

        rights.set(ROLE.MODERATOR, new Map().set(ACTION.CREATE, [ROLE.USER]));
        rights.get(ROLE.MODERATOR).set(ACTION.READ, [ROLE.MODERATOR, ROLE.USER]);
        rights.get(ROLE.MODERATOR).set(ACTION.UPDATE, [ROLE.USER]);
        let executorAction = rights.get(userExecutor.role).get(action);
        if(executorAction == null) return false;
        let right = executorAction.indexOf(user.role);

        if(right === -1) return false;
        return true;


    }

    //метод для задачи два
    static checkSelfPermission(action, userExecutor) {
        let rights = new Map();
        rights.set(ROLE.ADMIN, [ACTION.READ, ACTION.UPDATE]);
        rights.set(ROLE.MODERATOR, [ACTION.READ, ACTION.UPDATE]);
        rights.set(ROLE.USER, [ACTION.READ, ACTION.UPDATE, ACTION.DELETE]);

        let right = rights.get(userExecutor.role).indexOf(action);
        if(right === -1) return false;
        return true;


    }
}

const admin = new User("Admin", "Adminov", "admin@gmail.com", ROLE.ADMIN);
const user = new User("User", "Userov", "user@gmail.com", ROLE.USER);
const user2 = new User("User2", "Userov2", "user@gmail.com", ROLE.USER);
const moderator = new User("Moderator", "Moderatorov", "moder@gmail.com", ROLE.MODERATOR);
const moderator2 = new User("Moderator2", "Moderatorov2", "moder@gmail.com", ROLE.MODERATOR);