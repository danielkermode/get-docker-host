const childProcess = require('child_process')

const handleIpRouteResults = callback => (error, stdout, stderr) => {

  if (stdout) {
    const ip = stdout

    if (ip) {
      callback(undefined, ip)
    } else {
      callback(new Error("Unable to find ip with /sbin/ip route|awk '/default/ { print $3 }'"), undefined)
    }
  } else if (error) {
    callback(error, undefined)
  } else if (stderr) {
    callback(new Error(stderr), undefined)
  } else {
    callback(new Error('No results or feedback given'), undefined)
  }
}

module.exports = function (callback) {
  childProcess.exec("/sbin/ip route|awk '/default/ { print $3 }'", handleIpRouteResults(callback))
}
