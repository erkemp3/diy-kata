const getEmployerRole = (employeeName, employees) => {
  for (i = 0; i < employees.length; i++)
    if (employeeName === employees[i].name) {
      return employees[i].role;
    }
  return "Employee not found";
};
module.exports = getEmployerRole;
