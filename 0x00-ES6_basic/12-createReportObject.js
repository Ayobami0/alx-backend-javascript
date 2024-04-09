export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments(eList) {
      return Object.keys(eList).length;
    },
  };

  return report;
}
