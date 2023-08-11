const fs = require('fs');
function getUserData() {
    const rawData = fs.readFileSync('./userData.json');
    return JSON.parse(rawData);
}
function saveUserData(data) {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('./userData.json', jsonData);
}
function getUserBalance(userId) {
    const userData = getUserData();
    const user = userData.users.find((user) => user.id === userId);
    return user ? user.balance : 0;
}
function updateUserBalance(userId, amount) {
    const userData = getUserData();
    const user = userData.users.find((user) => user.id === userId);
    if (user) {
        user.balance += amount;
        saveUserData(userData);
    }
}
function setUserBalance(userId, newBalance) {
    const userData = getUserData();
    const user = userData.users.find((user) => user.id === userId);
    if (user) {
      user.balance = newBalance;
    } else {
      userData.users.push({ id: userId, balance: newBalance });
    }
    saveUserData(userData);
  }  
function getAllUserBalances() {
    const userData = getUserData();
    return userData.users.map((user) => ({
        username: user.username,
        balance: user.balance,
    }));
}
module.exports = {
    getUserBalance,
    setUserBalance,
    getAllUserBalances,
    updateUserBalance
};