#Synopsis

This boilerplate has been commented for educational purposes. We aim to guide
the user towards a greater understanding of why the content of this boilerplate
has been included and how each piece contributes to the whole.

#Setup

**To install dependencies**
> npm install

**To start the server**
> npm start

**To run the tests**
> npm test

**To run the server (restart on changes)**
> npm run watch

**To lint the client folder**
> npm run lint

#Motivation

Many engineers new to react, students new to fullstack JavaScript development,
and experienced developers looking to speedily spin up an app look to
boilerplates for help. This boilerplate seeks to educate the user as to what
particular pieces do and how they add to a whole.


#Comments and Documentation

####Table of Contents
1. [Gitignore](#gitignore)
2. [Babel](#babel)

#gitignore

**gitignore** - Specifies intentionally untracked files to ignore.

Files already tracked by Git are not affected.
Each line in a gitignore file specifies a pattern.

**Formatting Patterns:**
 1.  A line starting with # serves as a comment. Put a backslash ("\") in front of
     the first hash for patterns that begin with a hash.
 2.  Trailing spaces are ignored unless they are quoted with backslash ("\").
 3.  An optional prefix "!" which negates the pattern; any matching file excluded
     by a previous pattern will become included again. It is not possible to
     re-include a file if a parent directory of that file is excluded
 5.  If the pattern ends with a slash, it is removed for the purpose of the
     following description, but it would only find a match with a directory.
     In other words, foo/ will match a directory foo and paths underneath it,
     but will not match a regular file or a symbolic link foo (this is consistent
     with the way how pathspec works in general in Git).
 6.  If the pattern does not contain a slash /, Git treats it as a shell glob
     pattern and checks for a match against the pathname relative to the location
     of the .gitignore file (relative to the toplevel of the work tree if not
     from a .gitignore file).
 7.  Otherwise, Git treats the pattern as a shell glob suitable for consumption
     by fnmatch(3) with the FNM_PATHNAME flag: wildcards in the pattern will not
     match a / in the pathname. For example, "Documentation/*.html"
     matches "Documentation/git.html" but not "Documentation/ppc/ppc.html" or
     "tools/perf/Documentation/perf.html".
 8.  A leading slash matches the beginning of the pathname. For example, "/*.c"
     matches "cat-file.c" but not "mozilla-sha1/sha1.c".
 9.  A leading "**" followed by a slash means match in all directories.
     For example, "**/foo" matches file or directory "foo" anywhere, the same as
     pattern "foo". "**/foo/bar" matches file or directory "bar" anywhere that
     is directly under directory "foo".
 10. A trailing "/**" matches everything inside. For example, "abc/**" matches
     all files inside directory "abc", relative to the location of the .gitignore
     file, with infinite depth.
 11. A slash followed by two consecutive asterisks then a slash matches zero or
     more directories. For example, "a/**/b" matches "a/b", "a/x/b", "a/x/y/b" and so on.

Git checks gitignore patterns from multiple sources, with the following order
of precedence:
 1.  Read from the command line for commands that support them
 2.  Patterns read from a .gitignore file in the same directory as the path,
     or in any parent directory, with patterns in the higher level files (up
     to the toplevel of the work tree) being overridden by those in lower level
     files down to the directory containing the file.
 3.  Patterns read from $GIT_DIR/info/exclude
 4.  Patterns read from the file specified by the configuration
     variable core.excludesFile

**But where should I place my patterns???**

gitignore file - Patterns which should be version-controlled and distributed to other
repositories via clone (i.e., files that all developers will want to ignore)
should go into a .gitignore file.

`$GIT_DIR/info/exclude` file - Patterns which are specific to a particular
repository but which do not need to be shared with other related repositories
(e.g., auxiliary files that live inside the repository but are specific to
one user’s workflow) should go into the $GIT_DIR/info/exclude file.

Patterns which a user wants Git to ignore in all situations (e.g., backup or
temporary files generated by the user’s editor of choice) generally go into a
file specified by core.excludesFile in the user’s ~/.gitconfig. Its default
value is `$XDG_CONFIG_HOME/git/ignore`. If $XDG_CONFIG_HOME is either not set or
empty, `$HOME/.config/git/ignore` is used instead.

#Babel

Setup:
  1. Install Babel
  2. Create .babelrc file in your project
  3. Install babel-polyfill
  4. Install babel-preset-react
  5. (Optional) Install babel-sublime for syntax highlighting


Babel is made up of syntax transforming plugins that transform your JavaScript into a browser supported version. It allows you to write the latest JavaScript without having to worry about staying browser compatible.

Install Babel Polyfill to support new JS globals or new JS native methods.

Install react preset to convert JSX syntax and strip type annotations

Compose your own transformation pipeline using existing plugins or write your own. Easily use a set of plugins by using or creating a preset.

`.babelrc` e.g.
```
{
  "presets": ["es2015", "stage-0", "react"]
}
```

stage-0 for the latest JavaScript additions (post es2015)

#Browserify

**Browserify** is a tool for compiling node-flavored commonjs modules for the browser.
In node, there is a require() function for loading code from other files.

Browserify will recursively analyze all the require() calls in your app in
order to build a bundle you can serve up to the browser in a single \<script\> tag

Browsers don't have the require method defined, but Node.js does. With Browserify
you can write code that uses require in the same way that you would use it in Node.

Many node built-in modules have been wrapped to work in the browser, but only
when you explicitly require() or use their functionality.
You can use browserify to organize your code and use third-party libraries.

When you require() any of these modules, you will get a browser-specific shim:

assert,
buffer,
console,
constants,
crypto,
domain,
events,
http,
https,
os,
path,
punycode,
querystring,
stream,
string_decoder,
timers,
tty,
url,
util,
vm, and
zlib

Additionally, if you use any of these variables, they will be defined in the
bundled output in a browser-appropriate way:

process;
Buffer;
global - top-level scope object (window);
\_\_filename - file path of the currently executing file;
\_\_dirname - directory path of the currently executing file

Use a node-style require() to organize your browser code and load modules installed by npm.

#Contributors

Nathan Schwartz
@https://github.com/Nathan-Schwartz

Mark Boraski
@https://github.com/SpartanSOS
