const employee = {
    name: "Name",
    streetAddress: "Address"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign ({}, obj, { [key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key, value) {
    return Object.assign ({}, obj, { [key]: value});
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
   return Object.assign (obj, { [key]: value});
}