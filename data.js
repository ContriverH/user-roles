const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Himanshu", role: ROLE.ADMIN },
    { id: 2, name: "Shivam", role: ROLE.BASIC },
    { id: 3, name: "Shefali", role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: "Himanshu's Project", userid: 1 },
    { id: 2, name: "Shivam's Project", userid: 2 },
    { id: 3, name: "Shefali's Project", userid: 3 },
  ],
};
