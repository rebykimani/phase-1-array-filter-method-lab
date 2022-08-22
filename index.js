function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, middleName) {
  return drivers.filter(function (driver) {
    return (
      driver.slice(0, middleName.length).toLowerCase() ===
      middleName.toLowerCase()
    );
  });
}

function matchName(drivers, property) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === property.toLowerCase();
  });
}
