# viojan-error-handler

Error handler for `viojan`.

## install

```
 npm install github:frlorenzo/viojan-error-handler
```


## Function: `error(err Error|Response|string, title: string): undefined`

The `error` handler function provides a consistent way to render error messages. This is used with `viojan` project to provide application error page, as opposed to 4xx, 5xx sttp status.  The `error` function includes console logging during development if the error is of a `Response` or `Error` object types.


**Parameters:**

- `err`. The [error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object, [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response), or string.
- `title` Heading part


**Returns:**

`error` function renders a page to display the error message and does not return anything.


**Example:**


**See Also:**
- [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
