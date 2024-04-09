export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments(eList) {
      return eList.length;
    },
  };

  return report;
}
