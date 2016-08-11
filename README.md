## CDN
### 如何将个人网站部署到主账户
 maryfand.github.io

### 在index.js文件中更换browserHistory
/blog  /About 代表绝对路径可以运行

### 怎么解决子链接404问题
写一个404页面
&apm install emmet/*安装自动补齐*/
把404javascript部分  https://github.com/rafrex/spa-github-pages

<script type="text/javascript">
  /////////////////////////////////////////////////////////////////////////
  // Single Page Apps for GitHub Pages
  // https://github.com/rafrex/spa-github-pages
  // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
  // ----------------------------------------------------------------------
  // This script takes the current url and converts the path and query
  // string into just a query string, and then redirects the browser
  // to the new url with only a query string and hash fragment,
  // e.g. http://www.foo.tld/one/two?a=b&c=d#qwe, becomes
  // http://www.foo.tld/?p=/one/two&q=a=b~and~c=d#qwe
  // Note: this 404.html file must be at least 512 bytes for it to work
  // with Internet Explorer (it is currently > 512 bytes)
  /////////////////////////////////////////////////////////////////////////
  var l = window.location;
  l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    '/?' +
    (l.pathname ? 'p=' + l.pathname.replace(/&/g, '~and~') : '') +
    (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
  );
</script>
粘贴到header 里

把https://github.com/rafrex/spa-github-pages
里的<!-- Start Single Page Apps for GitHub Pages -->
    <script type="text/javascript">
      /////////////////////////////////////////////////////////////////////////
      // Single Page Apps for GitHub Pages
      // https://github.com/rafrex/spa-github-pages
      // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
      // ----------------------------------------------------------------------
      // This script checks to see if a redirect is present in the query string
      // and converts it back into the correct url and adds it to the
      // browser's history using window.history.replaceState(...),
      // which won't cause the browser to attempt to load the new url.
      // When the single page app is loaded further down in this file,
      // the correct url will be waiting in the browser's history for
      // the single page app to route accordingly.
      /////////////////////////////////////////////////////////////////////////
      (function(l) {
        if (l.search) {
          var q = {};
          l.search.slice(1).split('&').forEach(function(v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
          });
          if (q.p !== undefined) {
            window.history.replaceState(null, null,
              (q.p || '') +
              (q.q ? ('?' + q.q) : '') +
              l.hash
            );
          }
        }
      }(window.location))
    </script>
    <!-- End Single Page Apps for GitHub Pages -->

    <!-- Start Google Analytics -->
    粘贴到index.html里


    在index.html 里 ./build/bundle.js
                改成  /build/bundle.js
