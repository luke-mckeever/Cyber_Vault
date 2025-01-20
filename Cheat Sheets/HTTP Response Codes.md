#networking #logs 
# 🌐 HTTP Response Codes Cheat Sheet

A complete guide to HTTP response codes categorized by their status class. 📡 Use this cheat sheet to understand the meaning and purpose of each HTTP response code! 🚀

---

## 📋 Categories of HTTP Response Codes

### 🔵 1XX: Informational Responses
These codes indicate that the server has received the request and is continuing the process.

| **Code** | **Name**                  | **Description**                                                   |
|----------|---------------------------|-------------------------------------------------------------------|
| 100      | Continue                  | Client should continue with its request.                         |
| 101      | Switching Protocols       | Server is switching protocols as requested by the client.        |
| 102      | Processing (WebDAV)       | Server has received and is processing the request.               |
| 103      | Early Hints               | Provides early response headers to preload resources.            |

---

### 🟢 2XX: Successful Responses
The client’s request was successfully received, understood, and accepted.

| **Code** | **Name**                  | **Description**                                                   |
|----------|---------------------------|-------------------------------------------------------------------|
| 200      | OK                        | Standard success response.                                       |
| 201      | Created                   | Resource has been successfully created.                         |
| 202      | Accepted                  | Request has been accepted for processing but is not completed.  |
| 203      | Non-Authoritative Information | Returned metadata is not from the origin server.              |
| 204      | No Content                | Request succeeded but no content is being returned.             |
| 205      | Reset Content             | Instructs the client to reset the document view.                |
| 206      | Partial Content           | Only part of the resource is being delivered.                   |
| 207      | Multi-Status (WebDAV)     | Provides multiple independent response codes.                   |
| 208      | Already Reported (WebDAV) | Elements have already been reported in a previous response.     |
| 226      | IM Used                   | Server has fulfilled a GET request for the resource.            |

---

### 🟡 3XX: Redirection Responses
The client must take additional action to complete the request.

| **Code** | **Name**                  | **Description**                                                   |
|----------|---------------------------|-------------------------------------------------------------------|
| 300      | Multiple Choices          | Multiple options for the resource are available.                |
| 301      | Moved Permanently         | The resource has been permanently moved to a new URL.           |
| 302      | Found                     | The resource is temporarily under a different URL.              |
| 303      | See Other                 | Redirects the client to a different URI.                        |
| 304      | Not Modified              | Indicates cached resource is still valid.                       |
| 305      | Use Proxy                 | Resource must be accessed through a proxy.                      |
| 307      | Temporary Redirect        | Request should be repeated with another URI.                    |
| 308      | Permanent Redirect        | Permanent redirect using the current HTTP method.               |

---

### 🔴 4XX: Client Errors
The client seems to have made an error in the request.

| **Code** | **Name**                  | **Description**                                                   |
|----------|---------------------------|-------------------------------------------------------------------|
| 400      | Bad Request               | Server cannot process the request due to client error.           |
| 401      | Unauthorized              | Authentication is required and has failed or not been provided.  |
| 402      | Payment Required          | Reserved for future use.                                         |
| 403      | Forbidden                 | Server understands the request but refuses to authorize it.      |
| 404      | Not Found                 | Requested resource could not be found.                          |
| 405      | Method Not Allowed        | HTTP method is not allowed for the resource.                    |
| 406      | Not Acceptable            | Requested resource is not acceptable as per client headers.      |
| 407      | Proxy Authentication Required | Client must authenticate with a proxy.                       |
| 408      | Request Timeout           | Server timed out waiting for the request.                       |
| 409      | Conflict                  | Request conflicts with the server's current state.              |
| 410      | Gone                      | Requested resource is no longer available.                      |
| 411      | Length Required           | Server requires a valid Content-Length header.                  |
| 412      | Precondition Failed       | One or more preconditions in headers failed.                    |
| 413      | Payload Too Large         | Request payload is larger than the server is willing to process.|
| 414      | URI Too Long              | Requested URI is too long for the server to process.            |
| 415      | Unsupported Media Type    | Media format of the requested data is not supported.            |
| 416      | Range Not Satisfiable     | Range specified in the request header is not satisfiable.       |
| 417      | Expectation Failed        | Server cannot meet the requirements of the Expect header.       |
| 418      | I'm a Teapot              | Joke response (RFC 2324).                                       |
| 422      | Unprocessable Entity (WebDAV) | Request was well-formed but cannot be processed.              |
| 429      | Too Many Requests         | Client has sent too many requests in a given time.              |

---

### 🛑 5XX: Server Errors
The server failed to fulfill a valid request due to an error.

| **Code** | **Name**                  | **Description**                                                   |
|----------|---------------------------|-------------------------------------------------------------------|
| 500      | Internal Server Error     | Generic error message for unexpected server issues.              |
| 501      | Not Implemented           | Server does not support the requested functionality.             |
| 502      | Bad Gateway               | Received an invalid response from an upstream server.            |
| 503      | Service Unavailable       | Server is currently unable to handle the request.                |
| 504      | Gateway Timeout           | Upstream server failed to send a request in time.                |
| 505      | HTTP Version Not Supported| Server does not support the HTTP protocol version used.          |
| 507      | Insufficient Storage (WebDAV) | Server is unable to store the representation.                  |
| 511      | Network Authentication Required | Client must authenticate to gain network access.              |

---

## 💡 Pro Tips

1. **Know Your Codes**: Understand the different categories to debug and resolve issues effectively.
2. **Use Tools**: Tools like `Postman` or browser developer tools can help analyze HTTP response codes.
3. **Monitor Redirects**: Pay attention to `3XX` codes to avoid redirect loops.

HTTP response codes are essential for debugging, monitoring, and optimizing your web applications. Keep this cheat sheet handy to stay ahead! 🚀