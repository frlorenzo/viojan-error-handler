// error: error handler function
// updated: Jun 1, 2021


/**
 * The `error` handler function provides a consistent way to render error
 * messages. It can be used
 *
 * The `error` function includes console logging during development if the
 * error is of a `Response` or `Error` object types.
 *
 * Note that user-defined functions should throw when there is error and
 * let the caller handle the exception using try...catch.
 *
 * @param {any} err Can be Error, Response, or string
 * @param {string} title The heading shown. This is optional
 *
 * @return {undefined}
 */
const error = async (err, title) => {
  let errmsg;

  // param default do not support null
  title = title || 'Oops! Something went wrong.';

  if (err instanceof Response) // 'Response' object
  {
    // if json get whole error, else the text
    if (err.headers.get('content-type').split(';')[0] === 'application/json')
      errmsg = (await err.json()).error;
    else
      errmsg = (await err.text()) || err.statusText;

    if (sessionStorage.getItem('env') === 'development')
      _logres(err, errmsg);
  }
  else if ((err instanceof Error) || (typeof err === 'object'))
  {
    errmsg = err.message;

    if (sessionStorage.getItem('env') === 'development')
      _logerr(err);
  }
  else if (typeof err === 'string')
    errmsg = err;
  else
    errmsg = 'Unknown Error';

  // render markup
  document.getElementById('app').innerHTML = _render(title, errmsg);
};


// log response to dev console
const _logerr = (e) => {
  console.warn('• name:', e.name);
  console.warn('• message:', e.message);
  console.warn('• filename:', e.fileName);
  console.warn('• line no:', e.lineNumber);
};


// log response to dev console
const _logres = (err, body) => {
  console.warn('• url:', err.url);
  console.warn('• code:', err.status);
  console.warn('• text:', err.statusText);
  console.warn('• body:', body);
};


// render markup, customize as necessary
const _render = (title, message) => {
  return `
      <section class="block" id="contentBlock">
        <h2 id="heading">${title}</h2>
        <div id="message">${message}</div>

        <div>
          Hit <a href="javascript:void(0);"
          onclick="window.location.reload()">refresh</a>
          or <a href="javascript:void(0);"
          onclick="window.history.back()">go back</a>.
        </div>

        <div id="trace"></div>
      </section>
  `;
};

export { error };


//- end
