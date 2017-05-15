# Usage

Allows Docker host IP to be retrieved from a container.

Slight variation on https://www.npmjs.com/package/docker-host-ip. Uses `/sbin/ip route|awk '/default/ { print $3 }'` as detailed [here](http://stackoverflow.com/questions/22944631/how-to-get-the-ip-address-of-the-docker-host-from-inside-a-docker-container). Note that this can give the bridge IP rather than the host's IP, however this still seems to work in some situations.

```js
getDockerHost((error, result) => {
  if (result) {
    console.log(result)
  } else if (error) {
    console.log(error)
  }
})
```
